
const express = require('express');
const router = express.Router()

router.post('/legacy/sprint15b/international/qweek-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.qweekaddress === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/write-address1')
  } else {
    res.redirect('/legacy/sprint15b/international/qweek-address2')
  }
})


router.post('/legacy/sprint15b/international/country-leavinguk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.countryleavinguk === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/country-leavinguk2')
  } else {
    res.redirect('/legacy/sprint15b/international/worked-outside')
  }
})

router.post('/legacy/sprint15b/international/write-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/anyone-else-sp')
  } else {
    res.redirect('/legacy/sprint15b/international/write-address2')
  }
})

router.post('/legacy/sprint15b/international/qweek-country', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('./sprint15b/international/country-leavinguk2')
  } else {
    res.redirect('/legacy/sprint15b/international/qweek-country')
  }
})

router.post('/legacy/sprint15b/international/anyone-else-sp', (req, res) => { // router name
  console.log(req.anyoneElseSp) // name of data / id name

  if (req.body.anyoneElseSp === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/anyone-else-sp-details')
  } else {
    res.redirect('/legacy/sprint15b/international/anyone-else-wf')
  }
})

router.post('/legacy/sprint15b/international/relationship-status', (req, res) => { // router name
  console.log(req.relationship) // name of data / id name

  if (req.body.relationship === 'single') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/sp-uk')
  } else {
    res.redirect('/legacy/sprint15b/international/european-national')
  }
})


router.post('/legacy/sprint15b/international/anyone-else-wf', (req, res) => { // router name
  console.log(req.anyoneElseWf) // name of data / id name

  if (req.body.anyoneElseWf === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/wf-last-payment')
  } else {
    res.redirect('/legacy/sprint15b/international/homepage')
  }
})

router.post('/legacy/sprint15b/international/hospital', (req, res) => { // router name
  console.log(req.hospital) // name of data / id name

  if (req.body.hospital === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/hospital-details')
  } else {
    res.redirect('/legacy/sprint15b/international/bank-1')
  }
})

router.post('/legacy/sprint15b/international/custody', (req, res) => { // router name
  console.log(req.custody) // name of data / id name

  if (req.body.custody === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/authorityname')
  } else {
    res.redirect('/legacy/sprint15b/international/carehome')
  }
})

router.post('/legacy/sprint15b/international/carehome', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.carehome === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/carehome_address')
  } else {
    res.redirect('/legacy/sprint15b/international/hospital')
  }
})

router.post('/legacy/sprint15b/international/uknational', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.uknational === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/other-uk')
  } else {
    res.redirect('/legacy/sprint15b/international/refugee')
  }
})

router.post('/legacy/sprint15b/international/other-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.otheruk === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/nationalities-start')
  } else {
    res.redirect('/legacy/sprint15b/international/lived-in-uk')
  }
})

router.post('/legacy/sprint15b/international/lived-in-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.livedinuk === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/longest-lived-uk')
  } else {
    res.redirect('/legacy/sprint15b/international/worked-in-uk')
  }
})


router.post('/legacy/sprint15b/international/property', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.property === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/propertyaddress')
  } else {
    res.redirect('/legacy/sprint15b/international/business')
  }
})

router.post('/legacy/sprint15b/international/worked-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.workedoutside === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/longest-worked2')
  } else {
    res.redirect('/legacy/sprint15b/international/homepage3')
  }
})

router.post('/legacy/sprint15b/international/business', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.business === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/business-date')
  } else {
    res.redirect('/legacy/sprint15b/international/returned-uk')
  }
})

router.post('/legacy/sprint15b/international/healthcare', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.healthcare === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/healthcaredate')
  } else {
    res.redirect('/legacy/sprint15b/international/sp-outside')
  }
})

router.post('/legacy/sprint15b/international/sp-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.outsidebenefit === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/sp-outside-details')
  } else {
    res.redirect('/legacy/sprint15b/international/country-leavinguk')
  }
})

router.post('/legacy/sprint15b/international/returned-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.returneduk === 'yes') { // name of data / + answer
    res.redirect('/legacy/sprint15b/international/returned-ukdetails')
  } else {
    res.redirect('/legacy/sprint15b/international/familyuk')
  }
  })

  router.post('/legacy/sprint15b/international/familyuk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.familyuk === 'yes') { // name of data / + answer
      res.redirect('/legacy/sprint15b/international/familyuk-details')
    } else {
      res.redirect('/legacy/sprint15b/international/anylinks')
    }
    })

    router.post('/legacy/sprint15b/international/bank-1', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.bankaccount === 'uk') { // name of data / + answer
        res.redirect('/legacy/sprint15b/international/bankuk')
      } else {
        res.redirect('/legacy/sprint15b/international/bankoverseas')
      }
    })

    router.post('/legacy/sprint15b/international/letteroremail', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.letteroremail === 'yes') { // name of data / + answer
        res.redirect('/legacy/sprint15b/international/letteroremail-decision')
      } else {
        res.redirect('/legacy/sprint15b/international/declaration')
      }
    })

    router.post('/legacy/sprint15b/international/worked-in-uk', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.workedinuk === 'yes') { // name of data / + answer
        res.redirect('/legacy/sprint15b/international/dates-worked')
      } else {
        res.redirect('/legacy/sprint15b/international/property')
      }
    })

//sprint 15 buttons

router.post('/legacy/sprint15b/international/findsomeone', function(req, res) {
  res.redirect('/legacy/sprint15b/international/findsomeoneresults')
})

router.post('/legacy/sprint15b/international/findsomeoneresults', function(req, res) {
  res.redirect('/legacy/sprint15b/international/fullname')
})

router.post('/legacy/sprint15b/international/country', function(req, res) {
  res.redirect('/legacy/sprint15b/international/findsomeone')
})

router.post('/legacy/sprint15b/international/DOB', function(req, res) {
  res.redirect('/legacy/sprint15b/international/country')
})

router.post('/legacy/sprint15b/international/fullname', function(req, res) {
  res.redirect('/legacy/sprint15b/international/relationship-status')
})

router.post('/legacy/sprint15b/international/homeaddress', function(req, res) {
  res.redirect('/legacy/sprint15b/international/check-homeaddress')
})

router.post('/legacy/sprint15b/international/check-homeaddress', function(req, res) {
  res.redirect('/legacy/sprint15b/international/date-living')
})

router.post('/legacy/sprint15b/international/date-living', function(req, res) {
  res.redirect('/legacy/sprint15b/international/qweek-address1')
})

router.post('/legacy/sprint15b/international/telephone', function(req, res) {
  res.redirect('/legacy/sprint15b/international/check-telephone')
})

router.post('/legacy/sprint15b/international/check-telephone', function(req, res) {
  res.redirect('/legacy/sprint15b/international/emailaddress')
})

router.post('/legacy/sprint15b/international/emailaddress', function(req, res) {
  res.redirect('/legacy/sprint15b/international/contact-preference')
})

router.post('/legacy/sprint15b/international/contact-preference', function(req, res) {
  res.redirect('/legacy/sprint15b/international/letteroremail')
})

router.post('/legacy/sprint15b/international/european-national', function(req, res) {
  res.redirect('/legacy/sprint15b/international/homeaddress')
})

router.post('/legacy/sprint15b/international/anyone-else-sp-details', function(req, res) {
  res.redirect('/legacy/sprint15b/international/anyone-else-wf')
})

router.post('/legacy/sprint15b/international/wf-last-payment', function(req, res) {
  res.redirect('/legacy/sprint15b/international/homepage')
})

router.post('/legacy/sprint15b/international/hospital-details', function(req, res) {
  res.redirect('/legacy/sprint15b/international/bank-1')
})

router.post('/legacy/sprint15b/international/authorityname', function(req, res) {
  res.redirect('/legacy/sprint15b/international/authorityaddress')
})

router.post('/legacy/sprint15b/international/authorityaddress', function(req, res) {
  res.redirect('/legacy/sprint15b/international/carehome')
})

router.post('/legacy/sprint15b/international/carehome_address', function(req, res) {
  res.redirect('/legacy/sprint15b/international/carehome_date')
})

router.post('/legacy/sprint15b/international/carehome_date', function(req, res) {
  res.redirect('/legacy/sprint15b/international/hospital')
})

router.post('/legacy/sprint15b/international/othernationalities', function(req, res) {
  res.redirect('/legacy/sprint15b/international/lived-in-uk')
})

router.post('/legacy/sprint15b/international/refugee', function(req, res) {
  res.redirect('/legacy/sprint15b/international/other-uk')
})

router.post('/legacy/sprint15b/international/nationalities-start', function(req, res) {
  res.redirect('/legacy/sprint15b/international/lived-in-uk')
})

router.post('/legacy/sprint15b/international/longest-lived-uk', function(req, res) {
  res.redirect('/legacy/sprint15b/international/worked-in-uk')
})


router.post('/legacy/sprint15b/international/dates-worked', function(req, res) {
  res.redirect('/legacy/sprint15b/international/property')
})


router.post('/legacy/sprint15b/international/propertyaddress', function(req, res) {
  res.redirect('/legacy/sprint15b/international/propertyaddress2')
})

router.post('/legacy/sprint15b/international/propertyaddress2', function(req, res) {
  res.redirect('/legacy/sprint15b/international/business')
})

router.post('/legacy/sprint15b/international/longest-worked2', function(req, res) {
  res.redirect('/legacy/sprint15b/international/homepage3')
})


router.post('/legacy/sprint15b/international/business-date', function(req, res) {
  res.redirect('/legacy/sprint15b/international/returned-uk')
})


router.post('/legacy/sprint15b/international/healthcaredate', function(req, res) {
  res.redirect('/legacy/sprint15b/international/sp-outside')
})

router.post('/legacy/sprint15b/international/sp-uk', function(req, res) {
  res.redirect('/legacy/sprint15b/international/homeaddress')
})

router.post('/legacy/sprint15b/international/sp-outside-details', function(req, res) {
  res.redirect('/legacy/sprint15b/international/country-leavinguk')
})

router.post('/legacy/sprint15b/international/sp-outside-details-add1', function(req, res) {
  res.redirect('/legacy/sprint15b/international/country-leavinguk')
})

router.post('/legacy/sprint15b/international/returned-ukdetails', function(req, res) {
  res.redirect('/legacy/sprint15b/international/familyuk')
})
 
router.post('/legacy/sprint15b/international/returned-ukdetails-add1', function(req, res) {
  res.redirect('/legacy/sprint15b/international/familyuk')
})

router.post('/legacy/sprint15b/international/returned-ukdetails-add2', function(req, res) {
  res.redirect('/legacy/sprint15b/international/familyuk')
})


  router.post('/legacy/sprint15b/international/familyuk-details', function(req, res) {
  res.redirect('/legacy/sprint15b/international/anylinks')
})

router.post('/legacy/sprint15b/international/anylinks', function(req, res) {
  res.redirect('/legacy/sprint15b/international/healthcare')
})

router.post('/legacy/sprint15b/international/bankuk', function(req, res) {
  res.redirect('/legacy/sprint15b/international/declaration')
})

router.post('/legacy/sprint15b/international/bankoverseas', function(req, res) {
  res.redirect('/legacy/sprint15b/international/bankoverseas-cont')
})

router.post('/legacy/sprint15b/international/bankoverseas-cont', function(req, res) {
  res.redirect('/legacy/sprint15b/international/check-bankdetails')
})

router.post('/legacy/sprint15b/international/check-bankdetails', function(req, res) {
  res.redirect('/legacy/sprint15b/international/telephone')
})


router.post('/legacy/sprint15b/international/letteroremail-decision', function(req, res) {
  res.redirect('/legacy/sprint15b/international/declaration')
})

router.post('/legacy/sprint15b/international/qweek-address2', function(req, res) {
  res.redirect('/legacy/sprint15b/international/write-address1')
})

router.post('/legacy/sprint15b/international/write-address2', function(req, res) {
  res.redirect('/legacy/sprint15b/international/anyone-else-sp')
})

router.post('/legacy/sprint15b/international/anyone-else-sp-details-filledin', function(req, res) {
  res.redirect('/legacy/sprint15b/international/anyone-else-wf')
})

router.post('/legacy/sprint15b/international/wf-last-payment-adddate', function(req, res) {
  res.redirect('/legacy/sprint15b/international/homepage2')
})

router.post('/legacy/sprint15b/international/nationalities-start-add', function(req, res) {
  res.redirect('/legacy/sprint15b/international/lived-in-uk')
})

router.post('/legacy/sprint15b/international/declaration', function(req, res) {
  res.redirect('/legacy/sprint15b/international/applicationcomplete')
})


module.exports = router;