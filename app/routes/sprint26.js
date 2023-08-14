const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint26/get-underpayment', (req, res) => {
    res.redirect('/legacy/sprint26/top-up')
  })
  ;

  // OVERPAYMENT

    router.post('/legacy/sprint26/get-overpayment', (req, res) => {
      res.redirect('/legacy/sprint26/overpayment')
    })
    ;

  // Overpayment referral to confirmation or no payment

  router.post('/legacy/sprint26/overpayment', function(req, res) {
    if ( req.body['overpayment-payment'] === 'yes' ) {
      res.redirect('overpayment-confirmation');
    } else {
      res.redirect('overpayment-no');
    }
  });

  // Overpayment confirmation to get another

  router.post('/legacy/sprint26/overpayment-confirmation', (req, res) => {
    res.redirect('/legacy/sprint26/get-nopayment')
  })
  ;



  // UNDERPAYMENT
  // Top up referral to confirmation or no payment

  router.post('/legacy/sprint26/top-up', function(req, res) {
    if ( req.body['topup-payment'] === 'yes' ) {
      res.redirect('top-up-confirmation');
    } else {
      res.redirect('top-up-no');
    }
  });

  // Top up payment to referral

  router.post('/legacy/sprint26/top-up-payment', (req, res) => {
    res.redirect('/legacy/sprint26/top-up-confirmation')
  })
  ;

  // Top up confirmation to get another

  router.post('/legacy/sprint26/top-up-confirmation', (req, res) => {
    res.redirect('/legacy/sprint26/get-underpayment')
  })
  ;


  // NO PAYMENT
  // Get next referral (No payment)

  router.post('/legacy/sprint26/get-nopayment', (req, res) => {
    res.redirect('/legacy/sprint26/nopayment')
  })
  ;

  // Make payment or do not make payment... (No payment)
  router.post('/legacy/sprint26/nopayment', function(req, res) {
    if ( req.body['nopayment-payment'] === 'yes' ) {
      res.redirect('nopayment-confirmation');
    } else {
      res.redirect('nopayment-no');
    }
  });

  // No payment payment confirmation to get no payment

  router.post('/legacy/sprint26/nopayment-confirmation', (req, res) => {
    res.redirect('/legacy/sprint26/get-nopayment')
  })
  ;


  module.exports = router;
