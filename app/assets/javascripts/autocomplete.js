//Need these files in html
/*
<script src="https://unpkg.com/ua-parser-js@0.7.12"></script>
<script src="/public/javascripts/bloodhound.js"></script>
<script src="https://unpkg.com/accessible-typeahead@0.3.1"></script>
<link rel="stylesheet" href="https://unpkg.com/accessible-typeahead@0.3.1/examples/styled.css">
<style>
    .typeahead__menu--inline {
        max-height: none;
        overflow-x: visible;
    }
</style>
<script src="https://unpkg.com/lodash@4.17.4" type="text/javascript"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
 */
function isCanonicalNode (node) {
    return node.meta.canonical
}

function presentableName (node, locale) {
    var requestedName = node['names'][locale]
    var fallback = Object.keys(node['names']).map(k => node['names'][k])[0]
    return requestedName || fallback
}

// Given a starting node and the locale with which it was reached, this is a
// recursive function that will search the graph to find the canonical node(s).
function findCanonicalNodeWithPath (node, locale, path, graph, preferredLocale) {
    if (locale === preferredLocale) {
        if (isCanonicalNode(node)) {
            // We found it.
            return [{ node, locale: preferredLocale, path, graph, preferredLocale }]
        } else {
            // Get all the linked nodes.
            var linkedNodes = node.edges.from.map(nodeFromCurie => graph[nodeFromCurie])
            // Find the canonical nodes for each one of them.
            return linkedNodes.reduce((canonicalNodes, linkedNode) =>{
                return canonicalNodes.concat(findCanonicalNodeWithPath(
                    linkedNode,
                    preferredLocale,
                    path.concat([{ node, locale: preferredLocale }]),
                    graph,
                    preferredLocale
                ))
            }, [])
        }
    } else {
        // If not the preferredLocale, add a hop to the path while we switch
        // to the preferredLocale.
        return findCanonicalNodeWithPath(
            node,
            preferredLocale,
            path.concat([{ node, locale }]),
            graph,
            preferredLocale
        )
    }
}

function indexOfLowerCase (str, prefix) {
    return str.toLowerCase().indexOf(prefix.toLowerCase())
}

// Takes a canonical node with the path to reach it, and the typed in query.
// Returns the same node and path, with added weight based on a number of criteria.
// Higher weight means higher priority, so it should be ranked higher in the list.
function addWeight (canonicalNodeWithPath, query) {
    const cnwp = canonicalNodeWithPath

    const name = presentableName(cnwp.node, preferredLocale)

    const synonym = cnwp.path
        .map(pathNode => presentableName(pathNode.node, pathNode.locale)).map(nameInPath => nameInPath.toLowerCase()).pop()

    const indexOfQuery = indexOfLowerCase(name, query)

    const isUk = name === 'United Kingdom'
    const isUs = name === 'United States'

    // Temporary country weighting

    const ukBias = 2
    const usBias = 1.5
    const defaultCountryBias = 1

    const isExactMatchToCanonicalName = name.toLowerCase() === query.toLowerCase()

    const canonicalNameStartsWithQuery = indexOfQuery === 0

    const wordInCanonicalNameStartsWithQuery = name
        .split(' ')
        .filter(w => w.toLowerCase().indexOf(query.toLowerCase()) === 0).length > 0

    // TODO: make these const
    var synonymIsExactMatch = false
    var synonymStartsWithQuery = false
    var wordInSynonymStartsWith = false
    var indexOfSynonymQuery = false
    var synonymContainsQuery = false

    if (synonym) {

        synonymIsExactMatch = synonym === query.toLowerCase()

        synonymStartsWithQuery = synonym
            .indexOf(query.toLowerCase()) === 0

        wordInSynonymStartsWith = synonym
            .split(' ')
            .filter(w => w.toLowerCase().indexOf(query.toLowerCase()) === 0)
    .length > 0

        indexOfSynonymQuery = indexOfLowerCase(synonym, query)
    }

    // TODO: Contains consts don't work
    const canonicalNameContainsQuery = indexOfQuery > 0
    synonymContainsQuery = indexOfSynonymQuery > 0

    // Canonical name matches
    if (isExactMatchToCanonicalName){
        cnwp.weight = 100
    }
    else if (canonicalNameStartsWithQuery){
        cnwp.weight = 76
    }
    else if (wordInCanonicalNameStartsWithQuery){
        cnwp.weight = 60
    }
    // Synonmn matches
    else if (synonymIsExactMatch){
        cnwp.weight = 50
    }
    else if (synonymStartsWithQuery){
        cnwp.weight = 45
    }
    else if (wordInSynonymStartsWith){
        cnwp.weight = 37
    }
    // Contains (DOES NOT WORK YET)
    else if (canonicalNameContainsQuery){
        cnwp.weight = 25
    }
    else if (synonymContainsQuery){
        cnwp.weight = 22
    }

    // Not sure if else is possible
    else cnwp.weight = 15

    // Longer paths mean canonical node is further from matched synonym, so rank it lower.
    // TODO - pruning multiple matches should happen elsewhere
    cnwp.weight -= cnwp.path.length

    var countryBias = isUk ? ukBias : defaultCountryBias
    countryBias = isUs ? usBias : countryBias

    cnwp.weight *= countryBias

    return cnwp
}

function byWeightAndThenAlphabetically (a, b) {
    const aName = presentableName(a.node, preferredLocale)
    const bName = presentableName(b.node, preferredLocale)
    return (a.weight > b.weight)
        ? -1
        : (a.weight < b.weight)
            ? 1
            // Weights are equal, sort alphabetically by name.
            : (aName < bName)
                ? -1
                : (aName > bName)
                    ? 1
                    : 0
}

// Bloodhound gives us back a list of results that includes synonyms, typos,
// endonyms and other things we don't want the user to see.
// This function transforms those into a list of stable canonical country names.
function presentResults (rawResults, query, graph, reverseMap, preferredLocale, showPaths) {
    var nodesWithLocales = rawResults.map(r => reverseMap[r])

    var canonicalNodesWithPaths = nodesWithLocales.reduce((canonicalNodes, nwl) => {
        return canonicalNodes.concat(findCanonicalNodeWithPath(nwl.node, nwl.locale, [], graph, preferredLocale))
    }, [])

    const canonicalNodesWithPathsAndWeights = canonicalNodesWithPaths.map(cnwp => addWeight(cnwp, query))

    canonicalNodesWithPathsAndWeights.sort(byWeightAndThenAlphabetically)

    const uniqueNodesWithPathsAndWeights = _.uniqBy(canonicalNodesWithPathsAndWeights, (cnwp) => {
        return presentableName(cnwp.node, preferredLocale)
    })

    var presentableNodes = uniqueNodesWithPathsAndWeights.map(cnwp => {
        var canonicalName = presentableName(cnwp.node, preferredLocale)
        var pathToName = ''
        if (showPaths && cnwp.path.length) {
            var stableNamesInPath = cnwp.path
                .filter(pathNode => pathNode.node.meta['stable-name'])
                .map(pathNode => presentableName(pathNode.node, pathNode.locale))
            var lastNode = stableNamesInPath.pop()
            if (lastNode) {
                pathToName = ` (${lastNode})`
            }
        }
        return `${canonicalName}${pathToName}`
    })

    return presentableNodes
}

function createData(id, selectboxid, graph, minTypeAHeadLength, reverseMap, preferredLocale, showPaths) {
    // The keys of the reverseMap represent all the names/synonyms/endonyms, so
    // we use them as the seed data for Bloodhound.
    var seed = Object.keys(reverseMap)
    var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.nonword,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: seed
    })

    // Find the existing select and enhance it to the typeahead.
    var select = $('#' + id)
    var container = $('<div class="form-control-1-2"></div>')
    select.after(container)

    var id = 'location-select-box' + selectboxid

    AccessibleTypeahead({
        autoselect: true,
        element: container[0],
        id: id,
        name: id,
        minLength: minTypeAHeadLength,
        source: (query, syncResults) => {
            const showNoResults = query.length <= 1
            if (showNoResults) {
                syncResults([])
            } else {
                query = query.replace(/\./g,'')
                countries.search(query, (rawResults) => {
                    var presentableResults = presentResults(rawResults, query, graph, reverseMap, preferredLocale, showPaths)
                    syncResults(presentableResults)
                })
            }
        }
    })

    var label = $('[for="' + id + '"]')
    label.attr('for', id)

    select.hide()
}