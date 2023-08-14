const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.use((req, res, next) => {
  res.locals.back = req.headers.referer
  next()
})

// Address to move date

router.post('/legacy/sprint68b/address', (req, res) => {
  res.redirect('/legacy/sprint68b/move-date')
})
;

router.post('/legacy/sprint68b/address-intl', (req, res) => {
  res.redirect('/legacy/sprint68b/move-date')
})
;

// Move date to living with

router.post('/legacy/sprint68b/move-date', (req, res) => {
  res.redirect('/legacy/sprint68b/living-with')
})
;

// Living with anyone at address change
router.post('/legacy/sprint68b/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint68b/living-with-age', function(req, res) {
  if (req.body['before-1954'] === 'Yes') {
    res.redirect('living-with-over-80');
  } else {
    res.redirect('living-with-date');
  }
});

// Living with age back to contact
router.post('/legacy/sprint68b/living-with-over-80', (req, res) => {
  res.redirect('/legacy/sprint68b/living-with-date')
});

// Living with to
router.post('/legacy/sprint68b/living-with-date', (req, res) => {
  res.redirect('declaration')
})
;


// Home phone number removal
router.post('/legacy/sprint68b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('declaration');
  } else {
    res.redirect('homephone-address');
  }
});

// Declaration to confirmation



router.post('/legacy/sprint68b/declaration', function(req, res) {
  if (req.session.data["move-month"] === "01") {
    res.redirect('overview-residency-ineligible-eea');
  } else if (req.session.data["move-month"] === "02") {
    res.redirect('make-new-claim');
  } else if (req.session.data["move-month"] === "03") {
    res.redirect('over-payment-3');
  } else if (req.session.data["move-month"] === "04") {
    res.redirect('make-payment');
  } else if (req.session.data["move-month"] === "05") {
    res.redirect('over-payment-2');
  } else if (req.session.data["move-month"] === "06") {
    res.redirect('overview-updated');
  } else if (req.session.data["move-month"] === "07") {
    res.redirect('overview-updated');
  } else if (req.session.data["move-month"] === "08") {
    res.redirect('make-new-claim');
  } else if (req.session.data["move-month"] === "09") {
    res.redirect('make-payment');
  } else if (req.session.data["move-month"] === "10") {
    res.redirect('over-payment-2');
  } else {
    res.redirect('overview');
  }
});




// make new claim to overview
router.post('/legacy/sprint68b/make-new-claim', (req, res) => {
  res.redirect('/legacy/sprint68b/overview-new-claim')
})
;

// do not qualify for wfp - overview
router.post('/legacy/sprint68b/over-payment-3', (req, res) => {
  res.redirect('/legacy/sprint68b/overview-dnq')
})
;

// underpayment to overview
router.post('/legacy/sprint68b/make-payment', (req, res) => {
  res.redirect('/legacy/sprint68b/overview-make-payment')
})
;

// underpayment to overview
router.post('/legacy/sprint68b/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint68b/overview-make-payment')
})
;

// underpayment to overview
router.post('/legacy/sprint68b/make-new-claim-2', (req, res) => {
  res.redirect('/legacy/sprint68b/overview-make-payment')
})
;

// Bank type to bank details
router.post('/legacy/sprint68b/bank-type', function(req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('bank-details-uk');
  } else {
    res.redirect('bank-details-ig');
  }
});

// Bank details to payment
router.post('/legacy/sprint68b/bank-details-uk', (req, res) => {
  res.redirect('/legacy/sprint68b/payment-changed')
})
;

// Bank details to payment
router.post('/legacy/sprint68b/bank-details-ig', (req, res) => {
  res.redirect('/legacy/sprint68b/payment-changed')
})
;



module.exports = router;
