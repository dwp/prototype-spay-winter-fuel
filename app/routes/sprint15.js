
const express = require('express');
const router = express.Router()

// '/start' is telling the router which URL to work on eg: localhost:3000/start
// router.post is telling the router look for: <form method="post"> on /start
// anything inside the <form method="post"></form> tags with a name="" will be inside req.body
router.post('/legacy/sprint15/uk/PAB', (req, res) => {
    // you can see whats inside the request body in the terminal with console.log()
    console.log(req.body)
  
    if (req.body.PAB === 'yes') {  // checks in the reqest body for name="branch" and checks for value="international"
      res.redirect('/legacy/sprint15/uk/PAB-fullname')     // if value is international it redirects to /international/page-1 
    } else {                                    // if the value is neither uk or international it does something else
      res.redirect('/legacy/sprint15/uk/dateofbirth')             // redirects to /other/page-1
    }
  })
  
  router.post('/legacy/sprint15/uk/qweek', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.qweek === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/uk/write-address')
    } else {
      res.redirect('/legacy/sprint15/uk/qweek-address')
    }
  })
  
  router.post('/legacy/sprint15/international/qweek-address1', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.qweekaddress === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/write-address1')
    } else {
      res.redirect('/legacy/sprint15/international/qweek-address2')
    }
  })
  
  
  
  /////////
  
  router.post('/legacy/sprint15/international/country-leavinguk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.countryleavinguk === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/country-leavinguk2')
    } else {
      res.redirect('/legacy/sprint15/international/worked-outside')
    }
  })
  
  ////////
  
  
  
  
  
  
  router.post('/legacy/sprint15/international/write-address1', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.writeaddress === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/anyone-else-sp')
    } else {
      res.redirect('/legacy/sprint15/international/write-address2')
    }
  })
  
  router.post('/legacy/sprint15/international/qweek-country', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.writeaddress === 'yes') { // name of data / + answer
      res.redirect('./sprint15/international/country-leavinguk2')
    } else {
      res.redirect('/legacy/sprint15/international/qweek-country')
    }
  })
  
  router.post('/legacy/sprint15/international/anyone-else-sp', (req, res) => { // router name
    console.log(req.anyoneElseSp) // name of data / id name
  
    if (req.body.anyoneElseSp === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/anyone-else-sp-details')
    } else {
      res.redirect('/legacy/sprint15/international/anyone-else-wf')
    }
  })
  
  router.post('/legacy/sprint15/international/relationship-status', (req, res) => { // router name
    console.log(req.relationship) // name of data / id name
  
    if (req.body.relationship === 'single') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/sp-uk')
    } else {
      res.redirect('/legacy/sprint15/international/european-national')
    }
  })
  
  
  router.post('/legacy/sprint15/international/anyone-else-wf', (req, res) => { // router name
    console.log(req.anyoneElseWf) // name of data / id name
  
    if (req.body.anyoneElseWf === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/wf-last-payment')
    } else {
      res.redirect('/legacy/sprint15/international/homepage')
    }
  })
  
  router.post('/legacy/sprint15/international/hospital', (req, res) => { // router name
    console.log(req.hospital) // name of data / id name
  
    if (req.body.hospital === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/hospital-details')
    } else {
      res.redirect('/legacy/sprint15/international/bank-1')
    }
  })
  
  router.post('/legacy/sprint15/international/custody', (req, res) => { // router name
    console.log(req.custody) // name of data / id name
  
    if (req.body.custody === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/authorityname')
    } else {
      res.redirect('/legacy/sprint15/international/carehome')
    }
  })
  
  router.post('/legacy/sprint15/international/carehome', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.carehome === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/carehome_address')
    } else {
      res.redirect('/legacy/sprint15/international/hospital')
    }
  })
  
  router.post('/legacy/sprint15/international/uknational', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.uknational === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/other-uk')
    } else {
      res.redirect('/legacy/sprint15/international/refugee')
    }
  })
  
  router.post('/legacy/sprint15/international/other-uk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.otheruk === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/nationalities-start')
    } else {
      res.redirect('/legacy/sprint15/international/lived-in-uk')
    }
  })
  
  router.post('/legacy/sprint15/international/lived-in-uk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.livedinuk === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/longest-lived-uk')
    } else {
      res.redirect('/legacy/sprint15/international/worked-in-uk')
    }
  })
  
  
  router.post('/legacy/sprint15/international/property', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.property === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/propertyaddress')
    } else {
      res.redirect('/legacy/sprint15/international/business')
    }
  })
  
  router.post('/legacy/sprint15/international/worked-outside', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.workedoutside === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/longest-worked2')
    } else {
      res.redirect('/legacy/sprint15/international/homepage3')
    }
  })
  
  router.post('/legacy/sprint15/international/business', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.business === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/business-date')
    } else {
      res.redirect('/legacy/sprint15/international/returned-uk')
    }
  })
  
  router.post('/legacy/sprint15/international/healthcare', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.healthcare === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/healthcaredate')
    } else {
      res.redirect('/legacy/sprint15/international/sp-outside')
    }
  })
  
  router.post('/legacy/sprint15/international/sp-outside', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.outsidebenefit === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/sp-outside-details')
    } else {
      res.redirect('/legacy/sprint15/international/country-leavinguk')
    }
  })
  
  router.post('/legacy/sprint15/international/returned-uk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.returneduk === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15/international/returned-ukdetails')
    } else {
      res.redirect('/legacy/sprint15/international/familyuk')
    }
    })
  
    router.post('/legacy/sprint15/international/familyuk', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.familyuk === 'yes') { // name of data / + answer
        res.redirect('/legacy/sprint15/international/familyuk-details')
      } else {
        res.redirect('/legacy/sprint15/international/anylinks')
      }
      })
  
      router.post('/legacy/sprint15/international/bank-1', (req, res) => { // router name
        console.log(req.body) // name of data / id name
      
        if (req.body.bankaccount === 'uk') { // name of data / + answer
          res.redirect('/legacy/sprint15/international/bankuk')
        } else {
          res.redirect('/legacy/sprint15/international/bankoverseas')
        }
      })
  
      router.post('/legacy/sprint15/international/letteroremail', (req, res) => { // router name
        console.log(req.body) // name of data / id name
      
        if (req.body.letteroremail === 'yes') { // name of data / + answer
          res.redirect('/legacy/sprint15/international/letteroremail-decision')
        } else {
          res.redirect('/legacy/sprint15/international/declaration')
        }
      })
  
      router.post('/legacy/sprint15/international/worked-in-uk', (req, res) => { // router name
        console.log(req.body) // name of data / id name
      
        if (req.body.workedinuk === 'yes') { // name of data / + answer
          res.redirect('/legacy/sprint15/international/dates-worked')
        } else {
          res.redirect('/legacy/sprint15/international/property')
        }
      })
  
  //sprint 15 buttons
  
  router.post('/legacy/sprint15/international/findsomeone', function(req, res) {
    res.redirect('/legacy/sprint15/international/findsomeoneresults')
  })
  
  router.post('/legacy/sprint15/international/findsomeoneresults', function(req, res) {
    res.redirect('/legacy/sprint15/international/fullname')
  })
  
  router.post('/legacy/sprint15/international/country', function(req, res) {
    res.redirect('/legacy/sprint15/international/findsomeone')
  })
  
  router.post('/legacy/sprint15/international/DOB', function(req, res) {
    res.redirect('/legacy/sprint15/international/country')
  })
  
  router.post('/legacy/sprint15/international/fullname', function(req, res) {
    res.redirect('/legacy/sprint15/international/relationship-status')
  })
  
  router.post('/legacy/sprint15/international/homeaddress', function(req, res) {
    res.redirect('/legacy/sprint15/international/check-homeaddress')
  })
  
  router.post('/legacy/sprint15/international/check-homeaddress', function(req, res) {
    res.redirect('/legacy/sprint15/international/date-living')
  })
  
  router.post('/legacy/sprint15/international/date-living', function(req, res) {
    res.redirect('/legacy/sprint15/international/qweek-address1')
  })
  
  router.post('/legacy/sprint15/international/telephone', function(req, res) {
    res.redirect('/legacy/sprint15/international/check-telephone')
  })
  
  router.post('/legacy/sprint15/international/check-telephone', function(req, res) {
    res.redirect('/legacy/sprint15/international/emailaddress')
  })
  
  router.post('/legacy/sprint15/international/emailaddress', function(req, res) {
    res.redirect('/legacy/sprint15/international/contact-preference')
  })
  
  router.post('/legacy/sprint15/international/contact-preference', function(req, res) {
    res.redirect('/legacy/sprint15/international/letteroremail')
  })
  
  router.post('/legacy/sprint15/international/european-national', function(req, res) {
    res.redirect('/legacy/sprint15/international/homeaddress')
  })
  
  router.post('/legacy/sprint15/international/anyone-else-sp-details', function(req, res) {
    res.redirect('/legacy/sprint15/international/anyone-else-wf')
  })
  
  router.post('/legacy/sprint15/international/wf-last-payment', function(req, res) {
    res.redirect('/legacy/sprint15/international/homepage')
  })
  
  router.post('/legacy/sprint15/international/hospital-details', function(req, res) {
    res.redirect('/legacy/sprint15/international/bank-1')
  })
  
  router.post('/legacy/sprint15/international/authorityname', function(req, res) {
    res.redirect('/legacy/sprint15/international/authorityaddress')
  })
  
  router.post('/legacy/sprint15/international/authorityaddress', function(req, res) {
    res.redirect('/legacy/sprint15/international/carehome')
  })
  
  router.post('/legacy/sprint15/international/carehome_address', function(req, res) {
    res.redirect('/legacy/sprint15/international/carehome_date')
  })
  
  router.post('/legacy/sprint15/international/carehome_date', function(req, res) {
    res.redirect('/legacy/sprint15/international/hospital')
  })
  
  router.post('/legacy/sprint15/international/othernationalities', function(req, res) {
    res.redirect('/legacy/sprint15/international/lived-in-uk')
  })
  
  router.post('/legacy/sprint15/international/refugee', function(req, res) {
    res.redirect('/legacy/sprint15/international/other-uk')
  })
  
  router.post('/legacy/sprint15/international/nationalities-start', function(req, res) {
    res.redirect('/legacy/sprint15/international/lived-in-uk')
  })
  
  router.post('/legacy/sprint15/international/longest-lived-uk', function(req, res) {
    res.redirect('/legacy/sprint15/international/worked-in-uk')
  })
  
  
  router.post('/legacy/sprint15/international/dates-worked', function(req, res) {
    res.redirect('/legacy/sprint15/international/property')
  })
  
  
  router.post('/legacy/sprint15/international/propertyaddress', function(req, res) {
    res.redirect('/legacy/sprint15/international/propertyaddress2')
  })
  
  router.post('/legacy/sprint15/international/propertyaddress2', function(req, res) {
    res.redirect('/legacy/sprint15/international/business')
  })
  
  router.post('/legacy/sprint15/international/longest-worked2', function(req, res) {
    res.redirect('/legacy/sprint15/international/homepage3')
  })
  
  
  router.post('/legacy/sprint15/international/business-date', function(req, res) {
    res.redirect('/legacy/sprint15/international/returned-uk')
  })
  
  
  router.post('/legacy/sprint15/international/healthcaredate', function(req, res) {
    res.redirect('/legacy/sprint15/international/sp-outside')
  })
  
  router.post('/legacy/sprint15/international/sp-uk', function(req, res) {
    res.redirect('/legacy/sprint15/international/homeaddress')
  })
  
  router.post('/legacy/sprint15/international/sp-outside-details', function(req, res) {
    res.redirect('/legacy/sprint15/international/country-leavinguk')
  })
  
  router.post('/legacy/sprint15/international/sp-outside-details-add1', function(req, res) {
    res.redirect('/legacy/sprint15/international/country-leavinguk')
  })
  
  router.post('/legacy/sprint15/international/returned-ukdetails', function(req, res) {
    res.redirect('/legacy/sprint15/international/familyuk')
  })
   
  router.post('/legacy/sprint15/international/returned-ukdetails-add1', function(req, res) {
    res.redirect('/legacy/sprint15/international/familyuk')
  })
  
  router.post('/legacy/sprint15/international/returned-ukdetails-add2', function(req, res) {
    res.redirect('/legacy/sprint15/international/familyuk')
  })
  
  
    router.post('/legacy/sprint15/international/familyuk-details', function(req, res) {
    res.redirect('/legacy/sprint15/international/anylinks')
  })
  
  router.post('/legacy/sprint15/international/anylinks', function(req, res) {
    res.redirect('/legacy/sprint15/international/healthcare')
  })
  
  router.post('/legacy/sprint15/international/bankuk', function(req, res) {
    res.redirect('/legacy/sprint15/international/declaration')
  })
  
  router.post('/legacy/sprint15/international/bankoverseas', function(req, res) {
    res.redirect('/legacy/sprint15/international/bankoverseas-cont')
  })
  
  router.post('/legacy/sprint15/international/bankoverseas-cont', function(req, res) {
    res.redirect('/legacy/sprint15/international/check-bankdetails')
  })
  
  router.post('/legacy/sprint15/international/check-bankdetails', function(req, res) {
    res.redirect('/legacy/sprint15/international/telephone')
  })
  
  
  router.post('/legacy/sprint15/international/letteroremail-decision', function(req, res) {
    res.redirect('/legacy/sprint15/international/declaration')
  })
  
  router.post('/legacy/sprint15/international/qweek-address2', function(req, res) {
    res.redirect('/legacy/sprint15/international/write-address1')
  })
  
  router.post('/legacy/sprint15/international/write-address2', function(req, res) {
    res.redirect('/legacy/sprint15/international/anyone-else-sp')
  })
  
  router.post('/legacy/sprint15/international/anyone-else-sp-details-filledin', function(req, res) {
    res.redirect('/legacy/sprint15/international/anyone-else-wf')
  })
  
  router.post('/legacy/sprint15/international/wf-last-payment-adddate', function(req, res) {
    res.redirect('/legacy/sprint15/international/homepage2')
  })
  
  router.post('/legacy/sprint15/international/nationalities-start-add', function(req, res) {
    res.redirect('/legacy/sprint15/international/lived-in-uk')
  })
  
  router.post('/legacy/sprint15/international/declaration', function(req, res) {
    res.redirect('/legacy/sprint15/international/applicationcomplete')
  })

  module.exports = router;