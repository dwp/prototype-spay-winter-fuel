const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/legacy/sprint63e/application-type', (req, res) => {
  res.redirect('/legacy/sprint63e/find')
});

// Find to name
router.post('/legacy/sprint63e/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/legacy/sprint63e/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/legacy/sprint63e/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address to move date
router.post('/legacy/sprint63e/address', (req, res) => {
  res.redirect('/legacy/sprint63e/move-date')
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/legacy/sprint63e/move-date', (req, res) => {
  res.redirect('/legacy/sprint63e/living-with')
});


// Living with details to contact or q week address
router.post('/legacy/sprint63e/living-with', function(req, res) {
  if (req.session.data['move-month'] === "9") {
    res.redirect('address-q-week');
  } else {
    res.redirect('wf-payment');
  }
});


// Address Q week to contact details
router.post('/legacy/sprint63e/address-q-week', (req, res) => {
  res.redirect('/legacy/sprint63e/wf-payment')
});


// Contact details to bank details
router.post('/legacy/sprint63e/wf-payment', (req, res) => {
  res.redirect('/legacy/sprint63e/contact')
});


// Contact details to bank details
router.post('/legacy/sprint63e/contact', (req, res) => {
  res.redirect('/legacy/sprint63e/bank-details')
});

// Bank details to UK bank Q or countries lived in details

router.post('/legacy/sprint63e/bank-details', function(req, res) {
  if (req.session.data["bank-account-type"] === "uk-bank") {
    res.redirect('lived-worked');
  } else {
    res.redirect('uk-bank');
  }
});


// UK bank account Q to countries lived in details
router.post('/legacy/sprint63e/uk-bank', (req, res) => {
  res.redirect('/legacy/sprint63e/lived-worked')
});

// Lived and worked to UK national
router.post('/legacy/sprint63e/lived-worked', (req, res) => {
  res.redirect('/legacy/sprint63e/uk-national')
});

// UK National to UK property
router.post('/legacy/sprint63e/uk-national', (req, res) => {
  res.redirect('/legacy/sprint63e/uk-property')
});
    
// UK property to UK business
router.post('/legacy/sprint63e/uk-property', (req, res) => {
  res.redirect('/legacy/sprint63e/uk-business')
});

// UK business to UK family
router.post('/legacy/sprint63e/uk-business', (req, res) => {
  res.redirect('/legacy/sprint63e/uk-family')
});

// UK family to UK healthcare professional
router.post('/legacy/sprint63e/uk-family', (req, res) => {
  res.redirect('/legacy/sprint63e/uk-healthcare')
});

// UK healthcare to returning to the UK in past 3 years
router.post('/legacy/sprint63e/uk-healthcare', (req, res) => {
  res.redirect('/legacy/sprint63e/returning-to-uk')
});

// Power of attourney
router.post('/legacy/sprint63e/returning-to-uk', function(req, res) {
  if (req.session.data["uk-national"] === "yes") {
    res.redirect('2nd-nationality-q');
  } else {
    res.redirect('2nd-nationality-q-2');
  }
});


// 2nd nationality (yes) to capture or (no) to not eligible no natiionality
router.post('/legacy/sprint63e/2nd-nationality-q', function(req, res) {
  if (req.body['2nd-nationality-q'] === 'yes') {
    res.redirect('nationality');
  } else {
    res.redirect('benefits-outside');
  }
});

// 2nd nationality (yes) to capture or (no) to not eligible no natiionality
router.post('/legacy/sprint63e/2nd-nationality-q-2', function(req, res) {
  if (req.body['2nd-nationality-q-2'] === 'yes') {
    res.redirect('nationality-2');
  } else {
    res.redirect('2nd-no');
  }
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63e/2nd-no', (req, res) => {
  res.redirect('/legacy/sprint63e/benefits-outside')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63e/nationality', (req, res) => {
  res.redirect('/legacy/sprint63e/benefits-outside')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63e/nationality-2', (req, res) => {
  res.redirect('/legacy/sprint63e/benefits-outside')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63e/benefits-outside', (req, res) => {
  res.redirect('/legacy/sprint63e/qualifying-week')
});

// UK healthcare to returning to the UK in past 3 years
router.post('/legacy/sprint63e/uk-healthcare', (req, res) => {
  res.redirect('/legacy/sprint63e/returning-to-uk')
});

// Questions about qualifying week to any other links to the UK?
router.post('/legacy/sprint63e/qualifying-week', (req, res) => {
  res.redirect('/legacy/sprint63e/any-other-links')
});

// Any other links to declaration
router.post('/legacy/sprint63e/any-other-links', (req, res) => {
  res.redirect('/legacy/sprint63e/check-change')
});

// Any other links to declaration
router.post('/legacy/sprint63e/check-change', (req, res) => {
  res.redirect('/legacy/sprint63e/declaration')
});

// Declaration to THE END!
router.post('/legacy/sprint63e/declaration', (req, res) => {
  res.redirect('/legacy/sprint63e/complete')
});

// THE END back to the start!
router.post('/legacy/sprint63e/complete', (req, res) => {
  res.redirect('/legacy/sprint63e/application-type')
});



module.exports = router;
