const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint52e/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint52e/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint52e/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint52e/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint52e/find-2');
  } else {
    res.redirect('/legacy/sprint52e/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint52e/find-1', (req, res) => {
  res.redirect('/legacy/sprint52e/security')
});
// Find result to security
router.post('/legacy/sprint52e/find-2', (req, res) => {
  res.redirect('/legacy/sprint52e/security-2')
});


router.post('/legacy/sprint52e/security', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-returned')
});

router.post('/legacy/sprint52e/security-2', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint52e/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52e/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint52e/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint52e/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint52e/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint52e/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint52e/correspondence-address-search-result')
});

router.post('/legacy/sprint52e/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint52e/homephone', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Home phone number removal
router.post('/legacy/sprint52e/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint52e/workphone', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Work phone number removal
router.post('/legacy/sprint52e/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint52e/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint52e/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint52e/email', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Email removal
router.post('/legacy/sprint52e/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint52e/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52e/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint52e/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/legacy/sprint52e/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint52e/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint52e/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint52e/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint52e/move-date', (req, res) => {
  res.redirect('/legacy/sprint52e/living-with')
});

// Care home move date
router.post('/legacy/sprint52e/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint52e/declaration')
});


router.post('/legacy/sprint52e/homephone-address', function(req, res) {
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


router.post('/legacy/sprint52e/homephone-address-change', function(req, res) {
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
router.post('/legacy/sprint52e/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint52e/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint52e/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint52e/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint52e/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint52e/poa-people', (req, res) => {
  res.redirect('/legacy/sprint52e/declaration')
});

// Declaration

router.post('/legacy/sprint52e/declaration', function(req, res) {
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
router.post('/legacy/sprint52e/over-payment', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint52e/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint52e/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint52e/check', (req, res) => {
  res.redirect('/legacy/sprint52e/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint52e/make-payment', (req, res) => {
  res.redirect('/legacy/sprint52e/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint52e/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint52e/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint52e/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint52e/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint52e/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint52e/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint52e/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissueto same bank account?
router.post('/legacy/sprint52e/reissue-account', function(req, res) {
  if (req.body['reissue-account'] === 'yes') {
    res.redirect('reissue-payment');
  } else {
    res.redirect('reissue-bank-details');
  }
});


// New bank details to account details origin
router.post('/legacy/sprint52e/reissue-bank-details', (req, res) => {
  res.redirect('/legacy/sprint52e/account-details-origin')
});

// Account details origin to reissue payment
router.post('/legacy/sprint52e/account-details-origin', (req, res) => {
  res.redirect('/legacy/sprint52e/reissue-payment')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint52e/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint52e/payment-reissued-banner')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint52e/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint52e/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint52e/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
