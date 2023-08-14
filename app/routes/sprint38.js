const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Address -------------------------------------------------------------------
router.post('/legacy/sprint38/address', (req, res) => {
  res.redirect('/legacy/sprint38/address-1')
});


// Address select, yes or search address
router.post('/legacy/sprint38/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});

// Care home address select, yes or search address
router.post('/legacy/sprint38/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});


// Address search
router.post('/legacy/sprint38/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint38/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint38/move-date', (req, res) => {
  res.redirect('/legacy/sprint38/homephone-address')
});


router.post('/legacy/sprint38/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    }
    else if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('living-with');
    }
});



router.post('/legacy/sprint38/homephone-address-change', (req, res) => {
  res.redirect('/legacy/sprint38/living-with')
});



// Living with anyone at address change
router.post('/legacy/sprint38/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age');
  } else {
    res.redirect('poa');
  }
});

// Living with anyone at address change
router.post('/legacy/sprint38/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('poa');
  }
});

// Power of attourney
router.post('/legacy/sprint38/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint38/poa-people', (req, res) => {
  res.redirect('/legacy/sprint38/declaration')
});

// Declaration

router.post('/legacy/sprint38/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else {
      res.redirect('overview-changed');
    }
});

// Check to payments
router.post('/legacy/sprint38/check', (req, res) => {
  res.redirect('/legacy/sprint38/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint38/make-payment', (req, res) => {
  res.redirect('/legacy/sprint38/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint38/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint38/poa')
});

// Living with age back to contact
router.post('/legacy/sprint38/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint38/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint38/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint38/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint38/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint38/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint38/payment-confirmation')
});

// Starting payments
router.post('/legacy/sprint38/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('payment-stopped');
  }
});

module.exports = router;
