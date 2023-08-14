const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint52d/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint52d/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint52d/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint52d/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint52d/find-2');
  } else {
    res.redirect('/legacy/sprint52d/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint52d/find-1', (req, res) => {
  res.redirect('/legacy/sprint52d/security')
});
// Find result to security
router.post('/legacy/sprint52d/find-2', (req, res) => {
  res.redirect('/legacy/sprint52d/security-2')
});


router.post('/legacy/sprint52d/security', (req, res) => {
  res.redirect('/legacy/sprint52d/overview')
});

router.post('/legacy/sprint52d/security-2', (req, res) => {
  res.redirect('/legacy/sprint52d/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint52d/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52d/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint52d/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint52d/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint52d/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint52d/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint52d/correspondence-address-search-result')
});

router.post('/legacy/sprint52d/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint52d/homephone', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Home phone number removal
router.post('/legacy/sprint52d/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint52d/workphone', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Work phone number removal
router.post('/legacy/sprint52d/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint52d/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint52d/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint52d/email', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Email removal
router.post('/legacy/sprint52d/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint52d/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint52d/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint52d/address', function(req, res) {
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
router.post('/legacy/sprint52d/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint52d/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint52d/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint52d/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint52d/move-date', (req, res) => {
  res.redirect('/legacy/sprint52d/living-with')
});

// Care home move date
router.post('/legacy/sprint52d/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint52d/declaration')
});


router.post('/legacy/sprint52d/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('poa');
    }
});


router.post('/legacy/sprint52d/homephone-address-change', (req, res) => {
  res.redirect('/legacy/sprint52d/poa')
});

// Living with anyone at address change
router.post('/legacy/sprint52d/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint52d/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint52d/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint52d/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint52d/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint52d/poa-people', (req, res) => {
  res.redirect('/legacy/sprint52d/declaration')
});

// Declaration

router.post('/legacy/sprint52d/declaration', function(req, res) {
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
router.post('/legacy/sprint52d/over-payment', (req, res) => {
  res.redirect('/legacy/sprint52d/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint52d/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint52d/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint52d/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint52d/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint52d/check', (req, res) => {
  res.redirect('/legacy/sprint52d/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint52d/make-payment', (req, res) => {
  res.redirect('/legacy/sprint52d/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint52d/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint52d/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint52d/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint52d/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint52d/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint52d/confirm-bank')
});

// Bank confirm to account details origin
router.post('/legacy/sprint52d/confirm-bank', function(req, res) {
  res.redirect('/legacy/sprint52d/account-details-origin')
});

// Account details origin to payment tab
router.post('/legacy/sprint52d/account-details-origin', function(req, res) {
  res.redirect('/legacy/sprint52d/payment-updated')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint52d/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint52d/payment-confirmation')
});


// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint52d/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint52d/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint52d/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

module.exports = router;
