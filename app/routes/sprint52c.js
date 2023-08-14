const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint52c/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint52c/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint52c/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint52c/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint52c/find-2');
  } else {
    res.redirect('/legacy/sprint52c/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint52c/find-1', (req, res) => {
  res.redirect('/legacy/sprint52c/security')
});
// Find result to security
router.post('/legacy/sprint52c/find-2', (req, res) => {
  res.redirect('/legacy/sprint52c/security-2')
});


router.post('/legacy/sprint52c/security', (req, res) => {
  res.redirect('/legacy/sprint52c/overview')
});

router.post('/legacy/sprint52c/security-2', (req, res) => {
  res.redirect('/legacy/sprint52c/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint52c/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52c/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint52c/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint52c/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint52c/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint52c/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint52c/correspondence-address-search-result')
});

router.post('/legacy/sprint52c/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint52c/homephone', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Home phone number removal
router.post('/legacy/sprint52c/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint52c/workphone', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Work phone number removal
router.post('/legacy/sprint52c/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint52c/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint52c/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint52c/email', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Email removal
router.post('/legacy/sprint52c/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint52c/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52c/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint52c/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 3HD") {
    res.redirect('/legacy/sprint52c/address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/legacy/sprint52c/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint52c/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Flat 15, Rickleton Retirement Village, Chester-le-Street, DH3 3HD') {
    res.redirect('not-care-home');
  } else {
    res.redirect('address-search');
  }
});

router.post('/legacy/sprint52c/not-care-home', function(req, res) {
  if (req.body['care-home'] === 'yes') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('/legacy/sprint49/move-date');
  }
});

// Address search
router.post('/legacy/sprint52c/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint52c/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint52c/move-date', (req, res) => {
  res.redirect('/legacy/sprint52c/living-with')
});

// Care home move date
router.post('/legacy/sprint52c/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint52c/declaration')
});


router.post('/legacy/sprint52c/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('poa');
    }
});


router.post('/legacy/sprint52c/homephone-address-change', (req, res) => {
  res.redirect('/legacy/sprint52c/poa')
});

// Living with anyone at address change
router.post('/legacy/sprint52c/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint52c/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint52c/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint52c/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint52c/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint52c/poa-people', (req, res) => {
  res.redirect('/legacy/sprint52c/declaration')
});

// Declaration

router.post('/legacy/sprint52c/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "8") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "10") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "05") {
      res.redirect('over-payment-2');
    } else if (req.session.data["movemonth"] === "5") {
      res.redirect('over-payment-2');
    } else {
      res.redirect('overview-changed');
    }
});


// Overpayment recoverable?
router.post('/legacy/sprint52c/over-payment', (req, res) => {
  res.redirect('/legacy/sprint52c/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint52c/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint52c/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint52c/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint52c/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint52c/check', (req, res) => {
  res.redirect('/legacy/sprint52c/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint52c/make-payment', (req, res) => {
  res.redirect('/legacy/sprint52c/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint52c/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint52c/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint52c/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint52c/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint52c/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint52c/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint52c/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint52c/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint52c/payment-confirmation')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint52c/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint52c/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint52c/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
