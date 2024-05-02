//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const util = require('util')


router.post('*', function (req, res, next) {
  console.log(req.body);

  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
});

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Branching

router.get('/sprint3/qq123456c_main2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob = req.query.dob

  if (dob === 'false') {
    // Redirect to the relevant page
    res.redirect('/sprint3/qq123456c_dob')
  }

  else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('sprint3/qq123456c_main2')
  }
})

router.get('/sprint3/qq123456c_dob2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob2 = req.query.dob2

  if (dob2 === 'false') {
    // Redirect to the relevant page
    res.redirect('/sprint3/qq123456c_evidence')
  } else {

    res.render('sprint3/qq123456c_dob2')
  }
})

router.post(`/development/payment-letter-router`, (req, res) => { // router name
  const privacyPolicy = req.session.data['payment-letter-yn']  // name of data / id name

  if (privacyPolicy === 'Yes') { // name of data / + answer
    res.redirect(`/development/has-letter`)
  } else {
    res.redirect(`/development/post-code-lookup`)
  }
})


///// Sprint 17 routes ////

router.get('/sprint17/', function(req, res) {
  res.render('./sprint17/whattodo')
})

router.post('/sprint15/international/declaration', function(req, res) {
  res.redirect('/sprint15/international/applicationcomplete')
})


// new routes from 2023///

router.post('/current/record-view/contact-tab/address/new-address', function (req, res) { 
  var whereAddress = req.session.data['whereAddress']  

  if (whereAddress == 'yes') { 
    res.redirect('/current/record-view/contact-tab/address/uk-address')
  } 
  if (whereAddress == 'no') { 
    res.redirect('/current/record-view/contact-tab/address/int-address')
  }
})

router.post('/current/tasks/request-manual-payment/get-next-manual-payment', function (req, res) { 
  var approve = req.session.data['approve']  

  if (approve == 'yes') { 
    res.redirect('/current/tasks/request-manual-payment/request-manual-payment-2nd')
  } 
  if (approve == 'decline-and-update') { 
    res.redirect('/current/tasks/request-manual-payment/request-manual-payment-3rd')
  }
  if (approve == 'decline-and-close') { 
    res.redirect('/current/tasks/request-manual-payment/request-manual-payment-v2')
  }
})

/*router.post('/current/record-view/contact-tab/address/occupancy-change', function (req, res) { 
  var liveWith = req.session.data['liveWith']  

  if (liveWith == 'yes') { 
    res.redirect('/current/record-view/contact-tab/address/living-with')
  } 
  if (liveWith == 'no') { 
    res.redirect('/current/record-view/contact-tab/address/update-contact-dets')
  }
}) */

router.post('/timeperiod-answer', function (req, res) { 
  var whendata = req.session.data['whendata']  

  if (whendata == 'year') { 
    res.redirect('/current/MI/MI-V2/year-to-date')
  } 
  if (whendata == 'range') { 
    res.redirect('/current/MI/MI-V2/search-date-range')
  }
  if (whendata == 'day') { 
    res.redirect('/current/MI/MI-V2/search-day')
  }
}) 


