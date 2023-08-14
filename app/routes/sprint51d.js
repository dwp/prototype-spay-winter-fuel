const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint51d/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint51d/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint51d/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint51d/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint51d/find-2');
  } else if (req.body['nino'] === 'AB123456C') {
    res.redirect('/legacy/sprint51d/find-3');
  } else if (req.body['nino'] === 'ab123456c') {
    res.redirect('/legacy/sprint51d/find-3');
  } else {
    res.redirect('/legacy/sprint51d/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint51d/find-1', (req, res) => {
  res.redirect('/legacy/sprint51d/security')
});
// Find result to security
router.post('/legacy/sprint51d/find-2', (req, res) => {
  res.redirect('/legacy/sprint51d/security-2')
});

// Find result to security
router.post('/legacy/sprint51d/find-3', (req, res) => {
  res.redirect('/legacy/sprint51d/security-3')
});


router.post('/legacy/sprint51d/security', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-returned')
});

router.post('/legacy/sprint51d/security-2', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-2')
});

router.post('/legacy/sprint51d/security-3', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-returned-3')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint51d/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint51d/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint51d/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint51d/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint51d/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint51d/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint51d/correspondence-address-search-result')
});

router.post('/legacy/sprint51d/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint51d/homephone', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Home phone number removal
router.post('/legacy/sprint51d/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint51d/workphone', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Work phone number removal
router.post('/legacy/sprint51d/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint51d/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint51d/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint51d/email', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Email removal
router.post('/legacy/sprint51d/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint51d/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint51d/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint51d/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/legacy/sprint51d/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint51d/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint51d/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint51d/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint51d/move-date', (req, res) => {
  res.redirect('/legacy/sprint51d/living-with')
});

// Care home move date
router.post('/legacy/sprint51d/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint51d/declaration')
});


router.post('/legacy/sprint51d/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    }
    else if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('poa');
    }
});


router.post('/legacy/sprint51d/homephone-address-change', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('poa');
    }
});



// Living with anyone at address change
router.post('/legacy/sprint51d/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint51d/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint51d/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint51d/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint51d/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint51d/poa-people', (req, res) => {
  res.redirect('/legacy/sprint51d/declaration')
});

// Declaration

router.post('/legacy/sprint51d/declaration', function(req, res) {
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
router.post('/legacy/sprint51d/over-payment', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint51d/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint51d/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint51d/check', (req, res) => {
  res.redirect('/legacy/sprint51d/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint51d/make-payment', (req, res) => {
  res.redirect('/legacy/sprint51d/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint51d/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint51d/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint51d/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint51d/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint51d/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint51d/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint51d/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissueto same bank account?
router.post('/legacy/sprint51d/reissue-account', function(req, res) {
  if (req.body['reissue-account'] === 'yes') {
    res.redirect('reissue-payment');
  } else {
    res.redirect('reissue-bank-details');
  }
});

// Reissueto same bank account?
router.post('/legacy/sprint51d/reissue-account-3', function(req, res) {
  if (req.body['reissue-account'] === 'yes') {
    res.redirect('reissue-payment-3');
  } else {
    res.redirect('reissue-bank-details-3');
  }
});


// New bank details to reissue payment
router.post('/legacy/sprint51d/reissue-bank-details', (req, res) => {
  res.redirect('/legacy/sprint51d/reissue-payment')
});

// New bank details to reissue payment
router.post('/legacy/sprint51d/reissue-bank-details-3', (req, res) => {
  res.redirect('/legacy/sprint51d/reissue-payment-3')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint51d/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint51d/payment-reissued-banner')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint51d/reissue-payment-3', (req, res) => {
  res.redirect('/legacy/sprint51d/payment-reissued-banner-3')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint51d/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint51d/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint51d/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
