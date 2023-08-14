const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Teleclaim or postal claim
router.post('/legacy/sprint63c/type-of-application', (req, res) => {
  res.redirect('/legacy/sprint63c/find')
});


// Benefits to find someone
router.post('/legacy/sprint63c/benefits', function(req, res) {
  if (req.body['benefits'] === 'yes') {
    res.redirect('no-claim');
  } else {
    res.redirect('find');
  }
});

// are you sure (start again)
router.post('/legacy/sprint63c/are-you-sure', function(req, res) {
  if (req.body['are-you-sure'] === 'yes') {
    res.redirect('type-of-application');
  } else {
    res.redirect('immigration-control');
  }
});

// Find someone to confirm full name

router.post('/legacy/sprint63c/find', function(req, res) {
  if (req.session.data['nino'] === 'PX 12 24 32 A') {
    res.redirect('date-of-birth');
  } else if (req.session.data['nino'] === "PX122432A") {
    res.redirect('date-of-birth');
  } else if (req.session.data['nino'] === "px122432A") {
    res.redirect('date-of-birth');
  } else if (req.session.data['nino'] === "px 12 24 32 A") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('find-1');
  }
});

// Confirm full name to security questions
router.post('/legacy/sprint63c/find-1', function(req, res) {
  if (req.session.data['phone-post'] === 'post') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('security');
  }
});

// DOB (letter) to address or too young
router.post('/legacy/sprint63c/date-of-birth', function(req, res) {
  if (req.session.data['dob-year'] === '1959') {
    res.redirect('too-young-letter');
  } else {
    res.redirect('address');
  }
});



// Security questions to house number and postcode
router.post('/legacy/sprint63c/security', function(req, res) {
  if (req.session.data['nino'] === 'PX 12 43 56') {
    res.redirect('overview');
  } else {
    res.redirect('address');
  }
});


// Address

router.post('/legacy/sprint63c/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0NO") {
    res.redirect('no-address-found');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "ne65 0ap") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "ne650ap") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "NE650AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address for letters to address for letters results
router.post('/legacy/sprint63c/address-carehome', (req, res) => {
  res.redirect('/legacy/sprint63c/carehome-move-date')
});

// Carehome move date to contact
router.post('/legacy/sprint63c/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});

// No permanent address to address for letters
router.post('/legacy/sprint63c/no-permanent-address', function(req, res) {
  if (req.body['address-for-letters'] === 'yes') {
    res.redirect('/legacy/sprint63c/address-for-letters');
  } else {
    res.redirect('no-address-for-letters');
  }
});

// Address for letters to address for letters results
router.post('/legacy/sprint63c/address-for-letters', (req, res) => {
  res.redirect('/legacy/sprint63c/address-for-letters-1')
});

// Address look up to confirm the first line of the address
router.post('/legacy/sprint63c/address-for-letters-1', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});

// Confirm first line of address to immigration control
router.post('/legacy/sprint63c/address-1', function(req, res) {
  if (req.body['address-change'] === 'see all') {
    res.redirect('/legacy/sprint63c/address-see-all');
  }
  else if (req.body['address-change'] === "address not found") {
    res.redirect('address');
  }
  else {
    res.redirect('immigration-control');
  }
});

// No address found to address
router.post('/legacy/sprint63c/no-address-found', (req, res) => {
  res.redirect('/legacy/sprint63c/address')
});


// See all results to immigration-control
router.post('/legacy/sprint63c/address-see-all', (req, res) => {
  res.redirect('/legacy/sprint63c/immigration-control')
});

// immigration control YES to not eligible or NO to move date
router.post('/legacy/sprint63c/immigration-control', function(req, res) {
  if (req.body['immigration-control'] === 'yes') {
    res.redirect('under-immigration-control');
  } else {
    res.redirect('move-date');
  }
});

// See all results to immigration-control
router.post('/legacy/sprint63c/under-immigration-control', (req, res) => {
  res.redirect('/legacy/sprint63c/overview-immigration-control')
});

// Move date to living with
router.post('/legacy/sprint63c/move-date', (req, res) => {
  res.redirect('/legacy/sprint63c/living-with')
});


//
router.post('/legacy/sprint63c/living-with', function(req, res) {
  if (req.body['living-with'] === 'yes') {
    res.redirect('living-with-age');
  } else {
    res.redirect('contact');
  }
});

// Confirm first line of address to move date
router.post('/legacy/sprint63c/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});


// Care home date to contact details
router.post('/legacy/sprint63c/carehome', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});


// Prison date to contact details
router.post('/legacy/sprint63c/prison', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});


// Hospital date to contact details
router.post('/legacy/sprint63c/hospital', (req, res) => {
  res.redirect('/legacy/sprint63c/contact')
});

// Phone number & email to contact requirements
router.post('/legacy/sprint63c/contact', (req, res) => {
  res.redirect('/legacy/sprint63c/bank-details')
});


// Bank details to uk national
router.post('/legacy/sprint63c/bank-details', (req, res) => {
  res.redirect('/legacy/sprint63c/uk-national')
});





// 2nd nationality (yes) to nationality or (no) to declaration
router.post('/legacy/sprint63c/uk-national', function(req, res) {
  if (req.body['uk-national'] === 'yes') {
    res.redirect('2nd-nationality-q');
  } else {
    res.redirect('2nd-nationality-q-2');
  }
});


// 2nd nationality (yes) to nationality or (no) to declaration
router.post('/legacy/sprint63c/2nd-nationality-q', function(req, res) {
  if (req.body['2nd-nationality-q'] === 'yes') {
    res.redirect('nationality');
  } else {
    res.redirect('declaration');
  }
});

// 2nd nationality (yes) to nationality-2 or (no) to 2nd-no
router.post('/legacy/sprint63c/2nd-nationality-q-2', function(req, res) {
  if (req.body['2nd-nationality-q-2'] === 'yes') {
    res.redirect('nationality-2');
  } else {
    res.redirect('declaration');
  }
});

// 2nd no to declaration
router.post('/legacy/sprint63c/2nd-no', (req, res) => {
  res.redirect('/legacy/sprint63c/declaration')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63c/nationality', (req, res) => {
  res.redirect('/legacy/sprint63c/declaration')
});

// Benefits outside the UK to questions about qualifying week
router.post('/legacy/sprint63c/nationality-2', (req, res) => {
  res.redirect('/legacy/sprint63c/declaration')
});








// Declaration to completion
router.post('/legacy/sprint63c/declaration', function(req, res) {
  if (req.session.data['address-change'] === 'Dolphin View, Harbour Road, Amble, NE65 0AP') {
    res.redirect('complete-carehome-successful-pre');
  } else {
    res.redirect('complete-pre');
  }
});

// Start again back to beginning
router.post('/legacy/sprint63c/start-again', (req, res) => {
  res.redirect('/legacy/sprint63c/type-of-application')
});

// Start again back to beginning
router.post('/legacy/sprint63c/too-young-letter', (req, res) => {
  res.redirect('/legacy/sprint63c/type-of-application-letter-sent')
});


module.exports = router;
