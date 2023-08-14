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

router.post('/legacy/sprint45b/address', (req, res) => {
  res.redirect('/legacy/sprint45b/move-date')
})
;

// Move date to living with

router.post('/legacy/sprint45b/move-date', (req, res) => {
  res.redirect('/legacy/sprint45b/living-with')
})
;

// Move date to living with

router.post('/legacy/sprint45b/living-with', (req, res) => {
  res.redirect('/legacy/sprint45b/living-with-date')
})
;


// Living with to
router.post('/legacy/sprint45b/living-with-date', (req, res) => {
  res.redirect('declaration')
})
;


// Home phone number removal
router.post('/legacy/sprint45b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('declaration');
  } else {
    res.redirect('homephone-address');
  }
});

// Declaration to confirmation

router.post('/legacy/sprint45b/declaration', (req, res) => {
  res.redirect('/legacy/sprint45b/overview-changed')
})
;

// Bank type to bank details
router.post('/legacy/sprint45b/bank-type', function(req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('bank-details-uk');
  } else {
    res.redirect('bank-details-ig');
  }
});

// Bank details to payment
router.post('/legacy/sprint45b/bank-details-uk', (req, res) => {
  res.redirect('/legacy/sprint45b/payment-changed')
})
;

// Bank details to payment
router.post('/legacy/sprint45b/bank-details-ig', (req, res) => {
  res.redirect('/legacy/sprint45b/payment-changed')
})
;



module.exports = router;
