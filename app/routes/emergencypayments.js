const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/emergency-topup-payments/find', (req, res) => {
    res.redirect('/emergency-topup-payments/overview')
  })
  ;

  // Change payment status to returned
  router.post('/emergency-topup-payments/change-payment-status', (req, res) => {
    res.redirect('/emergency-topup-payments/overview-payment-returned')
  })
  ;

  // Reissue a returned payment
  router.post('/emergency-topup-payments/reissue-payment', (req, res) => {
    res.redirect('/emergency-topup-payments/reissue-payment-confirm')
  })
  ;

  router.post('/emergency-topup-payments/reissue-payment-confirm', (req, res) => {
    res.redirect('/emergency-topup-payments/overview-payment-reissued')
  })
  ;

  module.exports = router;
