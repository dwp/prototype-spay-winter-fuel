/* global $ */



// Warn about official sensitive nature of this prototype
if (window.console && window.console.info) {
  window.console.warn('*****************************************************************************************\n\nOFFICIAL SENSITIVE - You must have direct authorisation to access or share this prototype\n\n*****************************************************************************************')
}

function enableInternalBranding() {
  var internalHeader = document.getElementsByClassName('internal')
  var i
  for (i = 0; i < internalHeader.length; i++) {
      var outerElement = internalHeader[i].parentNode
      outerElement.className += ' internal'
      if (i == 0) {
        document.body.className += ' internal'
      }
  } 
}

function nextPageBasedOnSelection($radioObject) {
console.log("hello")
  if (nextPageRoutes) {
    for (let index = 0; index < Object.keys(nextPageRoutes).length; index++) {
      var checkboxValue = $radioObject.val()
      if (nextPageRoutes[checkboxValue] != undefined) {
        var nextPageField = null
        if ($('#next-page').length) {
          nextPageField = $('#next-page')
        } else {
          nextPageField = $('<input type="hidden" id="next-page" name="next-page">')
          $('form').append(nextPageField)
        }
        nextPageField.val(nextPageRoutes[checkboxValue])
        console.log('Next page destination has been set as "' + nextPageRoutes[checkboxValue] + '"')
        break
      } else {
        $('#next-page').remove()
      }
    }
  }

}

$(document).ready(function () {

  window.GOVUKFrontend.initAll()

  try { 
    $('input[type=radio]:checked').each(function() {
      nextPageBasedOnSelection($(this))
    })
    enableInternalBranding()
  } catch (e) {}


})

/* Change where journey goes once a radio option is selected, to define use the following element in your page:

  <script>
      nextPageRoutes = {
          'radioValue1': 'destination1.html',
          'radioValue2': 'destination2.html',
          ...
      }
  </script>

*/

$('input[type=radio]').on('change', function() {
  try { 
    $('input[type=radio]:checked').each(function() {
      nextPageBasedOnSelection($(this))
    })
  } catch (e) {}
})  


