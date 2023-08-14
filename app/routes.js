const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
const eligibilitychecker = require('./routes/eligibility-checker');
const eligibilitycheckerpostqweek = require('./routes/eligibility-checker-postqweek');
const eligibilitycheckerexpect = require('./routes/eligibility-checker-expect');
const payDeathArrears = require('./routes/tasks-pay-death-arrears');
const ec49b_version = require('./routes/ec49b');




const sprint15 = require('./routes/sprint15');
const sprint15b = require('./routes/sprint15b');
const sprint17 = require('./routes/sprint17');
const sprint18 = require('./routes/sprint18');
const sprint18b = require('./routes/sprint18b');
const sprint18c = require('./routes/sprint18c');
const sprint19 = require('./routes/sprint19');
const sprint19b = require('./routes/sprint19b');
const sprint20 = require('./routes/sprint20');
const sprint20b = require('./routes/sprint20b');
const sprint20c = require('./routes/sprint20c');
const sprint21 = require('./routes/sprint21');
const sprint21b = require('./routes/sprint21b');
const sprint21c = require('./routes/sprint21c');
const sprint21d = require('./routes/sprint21d');
const sprint22a = require('./routes/sprint22a');
const sprint22 = require('./routes/sprint22');
const sprint22b = require('./routes/sprint22b');
const sprint22c = require('./routes/sprint22c');
const sprint22d = require('./routes/sprint22d');
const sprint23 = require('./routes/sprint23');
const sprint23b = require('./routes/sprint23b');
const sprint24 = require('./routes/sprint24');
const sprint24b = require('./routes/sprint24b');
const returnedpayment = require('./routes/returnedpayment');
const sprint26 = require('./routes/sprint26');
const sprint27 = require('./routes/sprint27');
const sprint27b = require('./routes/sprint27b');
const sprint27c = require('./routes/sprint27c');
const sprint28 = require('./routes/sprint28');
const sprint28b = require('./routes/sprint28b');
const sprint28c = require('./routes/sprint28c');
const sprint29b = require('./routes/sprint29b');
const sprint30a = require('./routes/sprint30a');
const sprint30b = require('./routes/sprint30b');
const sprint30c = require('./routes/sprint30c');
const sprint31a = require('./routes/sprint31a');
const sprint31b = require('./routes/sprint31b');
const sprint31c = require('./routes/sprint31c');
const sprint31d = require('./routes/sprint31d');
const sprint32a = require('./routes/sprint32a');
const sprint32b = require('./routes/sprint32b');
const sprint32c = require('./routes/sprint32c');
const sprint32d = require('./routes/sprint32d');
const sprint32e = require('./routes/sprint32e');
const sprint32f = require('./routes/sprint32f');
const sprint33a = require('./routes/sprint33a');
const sprint33b = require('./routes/sprint33b');
const sprint33c = require('./routes/sprint33c');
const sprint33d = require('./routes/sprint33d');
const sprint35 = require('./routes/sprint35');
const sprint35b = require('./routes/sprint35b');
const sprint35c = require('./routes/sprint35c');
const sprint35d = require('./routes/sprint35d');
const sprint35e = require('./routes/sprint35e');
const emergencypayments = require('./routes/emergencypayments');
const sprint37 = require('./routes/sprint37');
const sprint37b = require('./routes/sprint37b');
const sprint38 = require('./routes/sprint38');
const sprint39c = require('./routes/sprint39c');
const sprint40a = require('./routes/sprint40a');
const sprint40b = require('./routes/sprint40b');
const sprint41 = require('./routes/sprint41');
const sprint41b = require('./routes/sprint41b');
const sprint42b = require('./routes/sprint42b');
const sprint42c = require('./routes/sprint42c');
const sprint43 = require('./routes/sprint43');
const sprint43b = require('./routes/sprint43b');
const sprint43d = require('./routes/sprint43d');
const sprint45 = require('./routes/sprint45');
const sprint45b = require('./routes/sprint45b');
const sprint46 = require('./routes/sprint46');
const sprint46b = require('./routes/sprint46b');
const sprint47b = require('./routes/sprint47b');
const sprint49 = require('./routes/sprint49');
const sprint49b = require('./routes/sprint49b');
const sprint49c = require('./routes/sprint49c');
const sprint49d = require('./routes/sprint49d');
const sprint50 = require('./routes/sprint50');
const sprint50b = require('./routes/sprint50b');
const sprint50c = require('./routes/sprint50c');
const sprint49e = require('./routes/sprint49e');
const sprint51 = require('./routes/sprint51');
const sprint51b = require('./routes/sprint51b');
const sprint51c = require('./routes/sprint51c');
const sprint51d = require('./routes/sprint51d');
const sprint52 = require('./routes/sprint52');
const sprint52b = require('./routes/sprint52b');
const sprint52c = require('./routes/sprint52c');
const sprint52d = require('./routes/sprint52d');
const sprint52e = require('./routes/sprint52e');
const sprint52f = require('./routes/sprint52f');
const sprint52g = require('./routes/sprint52g');
const sprint53 = require('./routes/sprint53');
const sprint55 = require('./routes/sprint55');
const sprint55b = require('./routes/sprint55b');
const sprint56 = require('./routes/sprint56');
const sprint57 = require('./routes/sprint57');
const sprint57b = require('./routes/sprint57b');
const sprint57c = require('./routes/sprint57c');
const sprint59 = require('./routes/sprint59');
const sprint59b = require('./routes/sprint59b');
const sprint59c = require('./routes/sprint59c');
const sprint59d = require('./routes/sprint59d');
const sprint59e = require('./routes/sprint59e');
const sprint59f = require('./routes/sprint59f');
const sprint60 = require('./routes/sprint60');
const sprint60b = require('./routes/sprint60b');
const sprint60c = require('./routes/sprint60c');
const sprint62 = require('./routes/sprint62');
const sprint62b = require('./routes/sprint62b');
const sprint62c = require('./routes/sprint62c');
const sprint63 = require('./routes/sprint63');
const sprint63c = require('./routes/sprint63c');
const sprint63d = require('./routes/sprint63d');
const sprint63e = require('./routes/sprint63e');
const sprint63f = require('./routes/sprint63f');
const sprint64 = require('./routes/sprint64');
const sprint64b = require('./routes/sprint64b');
const sprint65 = require('./routes/sprint65');
const sprint65c = require('./routes/sprint65c');
const sprint66 = require('./routes/sprint66');
const sprint66b = require('./routes/sprint66b');
const sprint68 = require('./routes/sprint68');
const sprint68b = require('./routes/sprint68b');
const sprint68c = require('./routes/sprint68c');
const sprint69 = require('./routes/sprint69');
const sprint69b = require('./routes/sprint69b');


//copy the router use and update the sprint version
router.use(eligibilitychecker);
router.use(eligibilitycheckerpostqweek);
router.use(eligibilitycheckerexpect);
router.use(payDeathArrears);
router.use(ec49b_version);



router.use(sprint15);
router.use(sprint15b);
router.use(sprint17);
router.use(sprint18);
router.use(sprint18b);
router.use(sprint18c);
router.use(sprint19);
router.use(sprint19b);
router.use(sprint20);
router.use(sprint20b);
router.use(sprint20c);
router.use(sprint21);
router.use(sprint21b);
router.use(sprint21c);
router.use(sprint21d);
router.use(sprint22);
router.use(sprint22a);
router.use(sprint22b);
router.use(sprint22c);
router.use(sprint22d);
router.use(sprint23);
router.use(sprint23b);
router.use(sprint24);
router.use(sprint24b);
router.use(returnedpayment);
router.use(sprint26);
router.use(sprint27);
router.use(sprint27b);
router.use(sprint27c);
router.use(sprint28);
router.use(sprint28b);
router.use(sprint28c);
router.use(sprint29b);
router.use(sprint30a);
router.use(sprint30b);
router.use(sprint30c);
router.use(sprint31a);
router.use(sprint31b);
router.use(sprint31c);
router.use(sprint31d);
router.use(sprint32a);
router.use(sprint32b);
router.use(sprint32c);
router.use(sprint32d);
router.use(sprint32e);
router.use(sprint32f);
router.use(sprint33a);
router.use(sprint33b);
router.use(sprint33c);
router.use(sprint33d);
router.use(sprint35);
router.use(sprint35b);
router.use(sprint35c);
router.use(sprint35d);
router.use(sprint35e);
router.use(emergencypayments);
router.use(sprint37);
router.use(sprint37b);
router.use(sprint38);
router.use(sprint39c);
router.use(sprint40a);
router.use(sprint40b);
router.use(sprint41);
router.use(sprint41b);
router.use(sprint42b);
router.use(sprint42c);
router.use(sprint43);
router.use(sprint43b);
router.use(sprint43d);
router.use(sprint45);
router.use(sprint45b);
router.use(sprint46);
router.use(sprint46b);
router.use(sprint47b);
router.use(sprint49);
router.use(sprint49b);
router.use(sprint49c);
router.use(sprint49d);
router.use(sprint50);
router.use(sprint50b);
router.use(sprint50c);
router.use(sprint49e);
router.use(sprint51);
router.use(sprint51b);
router.use(sprint51c);
router.use(sprint51d);
router.use(sprint52);
router.use(sprint52b);
router.use(sprint52c);
router.use(sprint52d);
router.use(sprint52e);
router.use(sprint52f);
router.use(sprint52g);
router.use(sprint53);
router.use(sprint55);
router.use(sprint55b);
router.use(sprint56);
router.use(sprint57);
router.use(sprint57b);
router.use(sprint57c);
router.use(sprint59);
router.use(sprint59b);
router.use(sprint59c);
router.use(sprint59d);
router.use(sprint59e);
router.use(sprint59f);
router.use(sprint60);
router.use(sprint60b);
router.use(sprint60c);
router.use(sprint62);
router.use(sprint62b);
router.use(sprint62c);
router.use(sprint63);
router.use(sprint63c);
router.use(sprint63d);
router.use(sprint63e);
router.use(sprint63f);
router.use(sprint64);
router.use(sprint64b);
router.use(sprint65);
router.use(sprint65c);
router.use(sprint66);
router.use(sprint66b);
router.use(sprint68);
router.use(sprint68b);
router.use(sprint68c);
router.use(sprint69);
router.use(sprint69b);


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


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
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
}) */

module.exports = router
