const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint32b/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint32b/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint32b/find', (req, res) => {
    res.redirect('/legacy/sprint32b/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint32b/find-1', (req, res) => {
    res.redirect('/legacy/sprint32b/security')
  })
  ;

  // Security to extra security (failed question)
  router.post('/legacy/sprint32b/security', (req, res) => {
    res.redirect('/legacy/sprint32b/security-extra')
  })
  ;

  //
  router.post('/legacy/sprint32b/security-extra', (req, res) => {
    res.redirect('/legacy/sprint32b/contact-preferences')
  })
  ;

  //
  router.post('/legacy/sprint32b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint32b/overview')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint32b/homephone', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint32b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint32b/workphone', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint32b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint32b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint32b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint32b/email', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint32b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint32b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint32b/address', (req, res) => {
    res.redirect('/legacy/sprint32b/address-1')
  })
  ;

  router.post('/legacy/sprint32b/address-1', (req, res) => {
    res.redirect('/legacy/sprint32b/move-date')
  })
  ;

  router.post('/legacy/sprint32b/move-date', (req, res) => {
    res.redirect('/legacy/sprint32b/homephone-address')
  })
  ;

  router.post('/legacy/sprint32b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('living-with');
    }
  });

  router.post('/legacy/sprint32b/homephone-address-change', (req, res) => {
    res.redirect('/legacy/sprint32b/living-with')
  })
  ;

  router.post('/legacy/sprint32b/living-with', (req, res) => {
    res.redirect('/legacy/sprint32b/poa')
  })
  ;


  // Living with anyone at address change
  router.post('/legacy/sprint32b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  router.post('/legacy/sprint32b/poa', (req, res) => {
    res.redirect('/legacy/sprint32b/declaration')
  })
  ;

  router.post('/legacy/sprint32b/declaration', (req, res) => {
    res.redirect('/legacy/sprint32b/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint32b/check', (req, res) => {
    res.redirect('/legacy/sprint32b/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint32b/make-payment', (req, res) => {
    res.redirect('/legacy/sprint32b/overview-topup-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint32b/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint32b/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint32b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint32b/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint32b/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint32b/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint32b/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint32b/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint32b/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
