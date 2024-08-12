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

// router.post('/qualifying', function(req, res) {
    
//   // all selections made on the country screen are sorted in session.data['countries']

//   // I convert that array back to a single value string and assign it to the variable countries
//   let qweek = req.session.data['countries'].toString();

//   // use your console.log to check you're getting the values you expect. You'll see the results in your terminal window
//   console.log(qweek);
  

//   // a switch case is another way to compare a series of values
//   // it works in the same way as alot of else if but with a lot less code
//   switch(qweek) {
//       case 'hospital':
//           // if countries equals france do this
//           res.redirect('/current/new-claims/international/q-hospital');
//           break;
//       case 'care-home':
//           // if countries equals france,portugal do this
//           res.redirect('/current/new-claims/international/q-care-home');
//           break;
//           case 'custody':
//             // if countries equals france,portugal do this
//             res.redirect('/current/new-claims/international/q-custody');
//             break;
//       default:
//           //this acts as an else and catches everything you haven't listed above
//           res.redirect('/everything-else');
//     }
// })

/////////// CHECKBOXES START ///////////
// The checkRoute function compares the desired checkbox combination against the ones the user actually selected
function checkRoute(route, data){
  
  /* Checks to see if the actual selection and the desired selection arrays are the same length.
  this immediately discounts options where the user has selected a different number of checkboxes
  than we want to compare. For example, we want to check if they selected two checkboxes but they only selected one
  this if statement will immediately discount this route and return false */
  if(route.length !== data.length) return false;
  
  /* A Set is an object that stores only unique values. The three dots is called a Spread Operator and we are using them
  to combine two arrays, 'route' and 'data'. By adding them to a set any duplicate values will be removed */
  var comp = new Set([...route, ...data]);

  // 'For of' loops through each item in an array. In this case it's looping through the items in the 'comp' set
  for(var i of comp){

      /* We create two variables: 'a' and 'b' to store the length of two arrays. We are using the filter method to check to
      see if the current item of the 'comp' Set is in the 'route' and 'data' arrays. If the value is found in the array, the 
      respective variable will be equal to 1 and if it isn't found it will equal 0. */
      var a = route.filter(cb => cb === i).length;
      var b = data.filter(cb => cb === i).length;

      /* If the length of both arrays isn't the same then this isn't the correct route. The function will return
      false and try the next route. If the array lengths are the same it will continue on to check the next
      item in the 'comp' Set */
      if(a !== b) return false;
  }
  /* If the all of the values in the 'comp' Set return true then this route is the correct one. The function will return
  true and the page will be redirected to the specified page */
  return true;
}

// Checkboxe routing logic
router.post('/qualifying', function (req, res) {
  // Get the checkboxes that were selected on the page
  var fromPage = req.session.data['qweek'];

  /* Set up which checkbox value combinations result in a different route. The values used here should match the 'value'
  attribute of the checkbox */
  var route1 = ["hospital",];
  var route2 = ["care-home", ];
  var route3 = ["custody",];

  /* This passes the values we assigned to route1 and the options the user selected onto the page into the checkRoute function */
  if(checkRoute(route1, fromPage)){

    // If the checkRoute function returns true, the page will be redirected to the one specified
    res.redirect('/current/new-claims/international/q-hospital')
  }
  else if(checkRoute(route2, fromPage)){
    res.redirect('/current/new-claims/international/q-care-home')
  }
  else if(checkRoute(route3, fromPage)){
    res.redirect('/current/new-claims/international/q-custody')
  }
  else {
    // If none of the routes match the selection then it will fall back and redirect to this page
    res.redirect('/current/new-claims/international/any-other-links')
  }  
})
/////////// CHECKBOXES END ///////////

router.post('/living-where-1', function (req, res) { 
  var whereDoYouLive = req.session.data['whereDoYouLive']  

  if (whereDoYouLive == 'uk') { 
    res.redirect('/current/eligibility-checker/getting-pension')
  } 
  if (whereDoYouLive == 'scotland') { 
    res.redirect('/current/eligibility-checker/scotland')
  }
  if (whereDoYouLive == 'overseas') { 
    res.redirect('/current/eligibility-checker/overseas-question')
  }
}) 

router.post('/in-the-UK', function (req, res) { 
  var inUk = req.session.data['inUk']  

  if (inUk == 'yes') { 
    res.redirect('/current/eligibility-checker/getting-pension')
  } 
  if (inUk == 'no') { 
    res.redirect('/current/eligibility-checker/overseas')
  }
}) 

router.post('/pc-benefits', function (req, res) { 
  var pcbenefit = req.session.data['pcbenefit']

  if (pcbenefit == 'yes') { 
    res.redirect('/current/eligibility-checker/qweek')
  } 
  if (pcbenefit == 'no') { 
    res.redirect('/current/eligibility-checker/otherbenefits-v2')
  }
}) 

router.post('/meanstested', function (req, res) { 
  var meanstested = req.session.data['meanstested']

  if (meanstested == 'yes') { 
    res.redirect('/current/eligibility-checker/qweek')
  } 
  if (meanstested == 'no') { 
    res.redirect('/current/eligibility-checker/ineligible')
  }
}) 

router.post('/qualifying1', function (req, res) { 
  var qualifying1 = req.session.data['qualifying1']

  if (qualifying1 == 'none') { 
    res.redirect('/current/eligibility-checker/success-eligible')
  } 
}) 

router.post('/timeperiod-answer-2', function (req, res) { 
  var whendata = req.session.data['whendata']  

  if (whendata == 'year') { 
    res.redirect('/current/MI/MI-V3/year-to-date')
  } 
  if (whendata == 'range') { 
    res.redirect('/current/MI/MI-V3/search-date-range')
  }
  if (whendata == 'day') { 
    res.redirect('/current/MI/MI-V3/search-day')
  }
}) 

//* 2024 international correspondence address changes//

router.post('/ukaddress', function (req, res) { 
  var ukaddress = req.session.data['ukaddress'] 

  if (ukaddress == 'ukaddress-yes') { 
    res.redirect('/current/record-view/contact-tab/correspondence-address/correspondence-address-uk')
  } 
  if (ukaddress == 'ukaddress-no') { 
    res.redirect('/current/record-view/contact-tab/correspondence-address/correspondence-address-international')
  }
}) 

//* 2024 international correspondence address changes END//

//* Users must have at least one phone number on file//

router.post('/phoneneeded', function (req, res) { 
  var phoneneeded = req.session.data['phoneneeded']

  if (phoneneeded == 'homephoneneeded') { 
    res.redirect('/current/record-view/contact-tab/home-phone/homephone')
  } 
  if (phoneneeded == 'mobilephoneneeded') { 
    res.redirect('/current/record-view/contact-tab/mobile-phone/mobilephone')
  }
  if (phoneneeded == 'workphoneneeded') { 
    res.redirect('/current/record-view/contact-tab/work-phone/workphone')
  }
}) 

//* Users must have at least one phone number on file END//

//* Adding or removing pension credit / partner benefit flags //

router.post('/benefitflag', function (req, res) { 
  var benefitflag = req.session.data['benefitflag']

  if (benefitflag == 'pension-credit') { 
    res.redirect('/current/record-view/overview-tab/overview-pension-credit-flag')
  } 
  if (benefitflag == 'pension-credit-partner') { 
    res.redirect('/current/record-view/overview-tab/overview-pension-credit-flag')
  }
  if (benefitflag == 'removed') { 
    res.redirect('/current/record-view/overview-tab/overview-pension-credit-flag')
  }

})

//* Adding or removing pension credit / partner benefit flags END//

//* Not removing pension credit / partner benefit flags //

router.post('/removebenefitflag', function (req, res) { 
  var removebenefitflag = req.session.data['removebenefitflag']

  if (removebenefitflag == 'benefitflagnotremoved') { 
    res.redirect('/current/record-view/overview-tab/overview-pension-credit-flag')
  }
}) 

//* Not removing pension credit / partner benefit flags END//