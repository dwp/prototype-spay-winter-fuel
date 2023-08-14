const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint32f/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint32f/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint32f/find', (req, res) => {
    res.redirect('/legacy/sprint32f/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint32f/find-1', (req, res) => {
    res.redirect('/legacy/sprint32f/security')
  })
  ;

  // Security to extra security (failed question)
  router.post('/legacy/sprint32f/security', (req, res) => {
    res.redirect('/legacy/sprint32f/security-extra')
  })
  ;

  // Security into record with security confirmation box
  router.post('/legacy/sprint32f/security-extra', (req, res) => {
    res.redirect('/legacy/sprint32f/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint32f/homephone', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint32f/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint32f/workphone', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint32f/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint32f/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint32f/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint32f/email', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint32f/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint32f/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint32f/address', (req, res) => {
    res.redirect('/legacy/sprint32f/address-1')
  })
  ;

  router.post('/legacy/sprint32f/address-1', (req, res) => {
    res.redirect('/legacy/sprint32f/move-date')
  })
  ;

  router.post('/legacy/sprint32f/move-date', (req, res) => {
    res.redirect('/legacy/sprint32f/homephone-address')
  })
  ;

  router.post('/legacy/sprint32f/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('living-with');
    }
  });

  router.post('/legacy/sprint32f/homephone-address-change', (req, res) => {
    res.redirect('/legacy/sprint32f/living-with')
  })
  ;

  router.post('/legacy/sprint32f/living-with', (req, res) => {
    res.redirect('/legacy/sprint32f/poa')
  })
  ;


  // Living with anyone at address change
  router.post('/legacy/sprint32f/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  router.post('/legacy/sprint32f/poa', (req, res) => {
    res.redirect('/legacy/sprint32f/declaration')
  })
  ;

  router.post('/legacy/sprint32f/declaration', (req, res) => {
    res.redirect('/legacy/sprint32f/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint32f/check', (req, res) => {
    res.redirect('/legacy/sprint32f/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint32f/make-payment', (req, res) => {
    res.redirect('/legacy/sprint32f/overview-topup-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint32f/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint32f/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint32f/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint32f/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint32f/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint32f/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint32f/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint32f/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint32f/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
