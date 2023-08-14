const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint49/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint49/find');
  }
});


// Find result to security
router.post('/legacy/sprint55b/benefit-flag', (req, res) => {
  res.redirect('/legacy/sprint49/overview-changed')
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint49/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint49/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint49/find-2');
  } else {
    res.redirect('/legacy/sprint49/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint49/find-1', (req, res) => {
  res.redirect('/legacy/sprint49/security')
});
// Find result to security
router.post('/legacy/sprint49/find-2', (req, res) => {
  res.redirect('/legacy/sprint49/security-2')
});


router.post('/legacy/sprint49/security', (req, res) => {
  res.redirect('/legacy/sprint49/overview')
});

router.post('/legacy/sprint49/security-2', (req, res) => {
  res.redirect('/legacy/sprint49/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint49/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint49/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint49/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint49/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint49/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint49/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint49/correspondence-address-search-result')
});

router.post('/legacy/sprint49/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint49/homephone', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Home phone number removal
router.post('/legacy/sprint49/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint49/workphone', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Work phone number removal
router.post('/legacy/sprint49/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint49/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint49/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint49/email', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Email removal
router.post('/legacy/sprint49/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint49/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint49/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint49/address', function(req, res) {
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
router.post('/legacy/sprint49/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint49/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint49/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint49/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint49/move-date', (req, res) => {
  res.redirect('/legacy/sprint49/living-with')
});

// Care home move date
router.post('/legacy/sprint49/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint49/declaration')
});


router.post('/legacy/sprint49/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('poa');
    }
});


router.post('/legacy/sprint49/homephone-address-change', (req, res) => {
  res.redirect('/legacy/sprint49/poa')
});

// Living with anyone at address change
router.post('/legacy/sprint49/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint49/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint49/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint49/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint49/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint49/poa-people', (req, res) => {
  res.redirect('/legacy/sprint49/declaration')
});

// Declaration

router.post('/legacy/sprint49/declaration', function(req, res) {
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
router.post('/legacy/sprint49/over-payment', (req, res) => {
  res.redirect('/legacy/sprint49/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint49/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint49/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint49/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint49/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint49/check', (req, res) => {
  res.redirect('/legacy/sprint49/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint49/make-payment', (req, res) => {
  res.redirect('/legacy/sprint49/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint49/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint49/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint49/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint49/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint49/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint49/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint49/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint49/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint49/payment-confirmation')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint49/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint49/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint49/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
