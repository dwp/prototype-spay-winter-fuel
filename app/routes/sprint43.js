const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/legacy/sprint43/application-type', (req, res) => {
  res.redirect('/legacy/sprint43/find')
});

// Find to name
router.post('/legacy/sprint43/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/legacy/sprint43/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/legacy/sprint43/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address to move date
router.post('/legacy/sprint43/address', (req, res) => {
  res.redirect('/legacy/sprint43/move-date')
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/legacy/sprint43/move-date', (req, res) => {
  res.redirect('/legacy/sprint43/living-with')
});


// Living with details to contact or q week address
router.post('/legacy/sprint43/living-with', function(req, res) {
  if (req.session.data['move-month'] === "9") {
    res.redirect('address-q-week');
  } else {
    res.redirect('wf-payment');
  }
});


// Address Q week to contact details
router.post('/legacy/sprint43/address-q-week', (req, res) => {
  res.redirect('/legacy/sprint43/wf-payment')
});


// Contact details to bank details
router.post('/legacy/sprint43/wf-payment', (req, res) => {
  res.redirect('/legacy/sprint43/contact')
});


// Contact details to bank details
router.post('/legacy/sprint43/contact', (req, res) => {
  res.redirect('/legacy/sprint43/bank-details')
});

// Bank details to UK bank Q or countries lived in details

router.post('/legacy/sprint43/bank-details', function(req, res) {
  if (req.session.data["bank-account-type"] === "uk-bank") {
    res.redirect('lived-worked');
  } else {
    res.redirect('uk-bank');
  }
});


// UK bank account Q to countries lived in details
router.post('/legacy/sprint43/uk-bank', (req, res) => {
  res.redirect('/legacy/sprint43/lived-worked')
});

// Lived and worked to UK national
router.post('/legacy/sprint43/lived-worked', (req, res) => {
  res.redirect('/legacy/sprint43/uk-national')
});

// UK national to property in the UK
router.post('/legacy/sprint43/uk-national', (req, res) => {
  res.redirect('/legacy/sprint43/uk-property')
});

// UK property to UK business
router.post('/legacy/sprint43/uk-property', (req, res) => {
  res.redirect('/legacy/sprint43/uk-business')
});

// UK business to UK family
router.post('/legacy/sprint43/uk-business', (req, res) => {
  res.redirect('/legacy/sprint43/uk-family')
});

// UK family to UK healthcare professional
router.post('/legacy/sprint43/uk-family', (req, res) => {
  res.redirect('/legacy/sprint43/uk-healthcare')
});

// UK healthcare to returning to the UK in past 3 years
router.post('/legacy/sprint43/uk-healthcare', (req, res) => {
  res.redirect('/legacy/sprint43/returning-to-uk')
});

// Returning to the UK in past 3 years to
router.post('/legacy/sprint43/returning-to-uk', (req, res) => {
  res.redirect('/legacy/sprint43/other-nationalities')
});

// Returning to the UK in past 3 years to
router.post('/legacy/sprint43/other-nationalities', (req, res) => {
  res.redirect('/legacy/sprint43/benefits-outside')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint43/benefits-outside', (req, res) => {
  res.redirect('/legacy/sprint43/qualifying-week')
});


// Questions about qualifying week to any other links to the UK?
router.post('/legacy/sprint43/qualifying-week', (req, res) => {
  res.redirect('/legacy/sprint43/any-other-links')
});

// Any other links to declaration
router.post('/legacy/sprint43/any-other-links', (req, res) => {
  res.redirect('/legacy/sprint43/check-change')
});

// Any other links to declaration
router.post('/legacy/sprint43/check-change', (req, res) => {
  res.redirect('/legacy/sprint43/declaration')
});

// Declaration to THE END!
router.post('/legacy/sprint43/declaration', (req, res) => {
  res.redirect('/legacy/sprint43/complete')
});

// THE END back to the start!
router.post('/legacy/sprint43/complete', (req, res) => {
  res.redirect('/legacy/sprint43/application-type')
});



module.exports = router;
