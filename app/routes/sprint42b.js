const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/legacy/sprint42b/application-type', (req, res) => {
  res.redirect('/legacy/sprint42b/find')
});

// Find to name
router.post('/legacy/sprint42b/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/legacy/sprint42b/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/legacy/sprint42b/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/legacy/sprint42b/address', function(req, res) {
  if (req.session.data["living-with-anyone"] === "yes") {
    res.redirect('living-with');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Living with details to contact or q week address
router.post('/legacy/sprint42b/living-with', function(req, res) {
  if (req.session.data["living-with-spa"] === "yes") {
    res.redirect('living-with-about');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});


router.post('/legacy/sprint42b/living-with-about', function(req, res) {
  if (req.session.data["living-with-anyone-else"] === "yes") {
    res.redirect('living-with-about');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Address Q week to contact details
router.post('/legacy/sprint42b/address-q-week', (req, res) => {
  res.redirect('/legacy/sprint42b/contact')
});


// Contact details to bank details
router.post('/legacy/sprint42b/contact', (req, res) => {
  res.redirect('/legacy/sprint42b/bank-details')
});

// Bank details to info about living in UK
router.post('/legacy/sprint42b/bank-details', (req, res) => {
  res.redirect('/legacy/sprint42b/about-uk')
});


// About UK to living in the UK
router.post('/legacy/sprint42b/about-uk', (req, res) => {
  res.redirect('/legacy/sprint42b/living-in-uk')
});


// Info about UK to info about living outside the UK
router.post('/legacy/sprint42b/living-in-uk', function(req, res) {
  if (req.session.data["lived-in-uk-another"] === "yes") {
    res.redirect('living-in-uk');
  } else {
    res.redirect('living-outside-uk');
  }
});

// Info about living outside the UK to UK family details
router.post('/legacy/sprint42b/living-outside-uk', function(req, res) {
  if (req.session.data["outside-uk"] === "yes") {
    res.redirect('living-outside-about');
  } else {
    res.redirect('uk-family');
  }
});

// living outside the uk, add more countries or moce to uk family
router.post('/legacy/sprint42b/living-outside-about', function(req, res) {
  if (req.session.data["living-outside-about"] === "yes") {
    res.redirect('living-outside-about');
  } else {
    res.redirect('uk-family');
  }
});



// UK family to other nationalities
router.post('/legacy/sprint42b/uk-family', (req, res) => {
  res.redirect('/legacy/sprint42b/other-nationalities')
});

// Other nationalities to more info work dates
router.post('/legacy/sprint42b/other-nationalities', function(req, res) {
  if (req.session.data['other-nationalities'] === "yes") {
    res.redirect('other-nationalities-about');
  } else if (req.session.data["no-nationality"] === "parter-eea") {
  res.redirect('eea-partner');
  } else {
    res.redirect('work');
  }
});

// Other nationalities about to add another or to work info
router.post('/legacy/sprint42b/other-nationalities-about', function(req, res) {
  if (req.session.data["more-nationalities"] === "yes") {
    res.redirect('other-nationalities-about');
  } else {
    res.redirect('work');
  }
});


// EEA partner details to w
router.post('/legacy/sprint42b/eea-partner', (req, res) => {
  res.redirect('/legacy/sprint42b/work')
});



// Work periods to information about links to UK or info about working in UK
router.post('/legacy/sprint42b/work', function(req, res) {
  if (req.session.data["uk-work"] === "yes") {
    res.redirect('work-in-uk');
  } else {
    res.redirect('uk-info');
  }
});

// Working in the UK periods to uk info
router.post('/legacy/sprint42b/work-in-uk', function(req, res) {
  if (req.session.data["working-in-uk-another"] === "yes") {
    res.redirect('work-in-uk');
  } else {
    res.redirect('uk-info');
  }
});


// information about the UK - if owns property get info, if not go to q week questions
router.post('/legacy/sprint42b/uk-info', function(req, res) {
  if (req.session.data["property"] === "yes") {
    res.redirect('uk-property-about');
  } else {
    res.redirect('q-week');
  }
});

// UK property info input to work
router.post('/legacy/sprint42b/uk-property-about', (req, res) => {
  res.redirect('/legacy/sprint42b/q-week')
});


// Q week questions to reasons for returning to the UK
router.post('/legacy/sprint42b/q-week', (req, res) => {
  res.redirect('/legacy/sprint42b/returning-to-uk')
});

// Returning to the UK to more info or benefits questions
router.post('/legacy/sprint42b/returning-to-uk', function(req, res) {
  if (req.session.data["return"] === "yes") {
    res.redirect('returning-to-uk-about');
  } else {
    res.redirect('benefits');
  }
});

// info about visits to the uk to benefits
router.post('/legacy/sprint42b/returning-to-uk-About', function(req, res) {
  if (req.session.data["returned-again"] === "yes") {
    res.redirect('returning-to-uk-about');
  } else {
    res.redirect('benefits');
  }
});

// Benefit and pension information to any other links
router.post('/legacy/sprint42b/benefits', function(req, res) {
  if (req.session.data["benefits-pensions"] === "yes") {
    res.redirect('benefits-outside');
  } else {
    res.redirect('any-other-links');
  }
});


// benefits outside the UK, more show screen again or no continue to any other links
router.post('/legacy/sprint42b/benefits-outside', function(req, res) {
  if (req.session.data["benefits-outside-add"] === "yes") {
    res.redirect('benefits-outside');
  } else {
    res.redirect('any-other-links');
  }
});

// Any other links to declaration
router.post('/legacy/sprint42b/any-other-links', (req, res) => {
  res.redirect('/legacy/sprint42b/declaration')
});

// Declaration to THE END!
router.post('/legacy/sprint42b/declaration', (req, res) => {
  res.redirect('/legacy/sprint42b/complete')
});




module.exports = router;
