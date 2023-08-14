const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/legacy/sprint37-international/application-type', (req, res) => {
  res.redirect('/legacy/sprint37-international/find')
});

// Find to name
router.post('/legacy/sprint37-international/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/legacy/sprint37-international/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/legacy/sprint37-international/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/legacy/sprint37-international/address', function(req, res) {
  if (req.session.data["living-with-anyone"] === "yes") {
    res.redirect('living-with');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Living with details to contact or q week address
router.post('/legacy/sprint37-international/living-with', function(req, res) {
  if (req.session.data["move-month"] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Address Q week to contact details
router.post('/legacy/sprint37-international/address-q-week', (req, res) => {
  res.redirect('/legacy/sprint37-international/contact')
});


// Contact details to bank details
router.post('/legacy/sprint37-international/contact', (req, res) => {
  res.redirect('/legacy/sprint37-international/bank-details')
});

// Bank details to info about living in UK
router.post('/legacy/sprint37-international/bank-details', (req, res) => {
  res.redirect('/legacy/sprint37-international/living-in-uk')
});

// Info about UK to info about living outside the UK
router.post('/legacy/sprint37-international/living-in-uk', (req, res) => {
  res.redirect('/legacy/sprint37-international/living-outside-uk')
});

// Info about living outside the UK to UK family details
router.post('/legacy/sprint37-international/living-outside-uk', (req, res) => {
  res.redirect('/legacy/sprint37-international/uk-family')
});

// UK family to other nationalities
router.post('/legacy/sprint37-international/uk-family', (req, res) => {
  res.redirect('/legacy/sprint37-international/other-nationalities')
});

// Other nationalities to work dates
router.post('/legacy/sprint37-international/other-nationalities', (req, res) => {
  res.redirect('/legacy/sprint37-international/work')
});

// Work periods to information about links to UK
router.post('/legacy/sprint37-international/work', (req, res) => {
  res.redirect('/legacy/sprint37-international/uk-info')
});

// Work periods to information about links to UK
router.post('/legacy/sprint37-international/uk-info', (req, res) => {
  res.redirect('/legacy/sprint37-international/q-week')
});

// Q week questions to reasons for returning to the UK
router.post('/legacy/sprint37-international/q-week', (req, res) => {
  res.redirect('/legacy/sprint37-international/returning-to-uk')
});

// Returning to the UK to benefits questions
router.post('/legacy/sprint37-international/returning-to-uk', (req, res) => {
  res.redirect('/legacy/sprint37-international/benefits')
});

// Benefit and pension information to any other links
router.post('/legacy/sprint37-international/benefits', (req, res) => {
  res.redirect('/legacy/sprint37-international/any-other-links')
});

// Any other links to declaration
router.post('/legacy/sprint37-international/any-other-links', (req, res) => {
  res.redirect('/legacy/sprint37-international/declaration')
});

// Declaration to THE END!
router.post('/legacy/sprint37-international/declaration', (req, res) => {
  res.redirect('/legacy/sprint37-international/complete')
});




module.exports = router;
