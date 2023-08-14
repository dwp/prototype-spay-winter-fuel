const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint35c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint35c/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint35c/find', (req, res) => {
    res.redirect('/legacy/sprint35c/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint35c/find-1', (req, res) => {
    res.redirect('/legacy/sprint35c/security')
  })
  ;

  // Security to extra security (failed question)
  router.post('/legacy/sprint35c/security', (req, res) => {
    res.redirect('/legacy/sprint35c/security-extra')
  })
  ;

  //
  router.post('/legacy/sprint35c/security-extra', (req, res) => {
    res.redirect('/legacy/sprint35c/overview-security')
  })
  ;

  //
  router.post('/legacy/sprint35c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint35c/overview')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Correspondence address to address found
  router.post('/legacy/sprint35c/correspondence-address', (req, res) => {
    res.redirect('/legacy/sprint35c/correspondence-address-1')
  })
  ;

  // Correspondence address to address found
  router.post('/legacy/sprint35c/correspondence-address-1', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Home phone number change back to contact
  router.post('/legacy/sprint35c/homephone', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint35c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint35c/workphone', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint35c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint35c/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint35c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint35c/email', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint35c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint35c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint35c/address', (req, res) => {
    res.redirect('/legacy/sprint35c/address-1')
  })
  ;

  router.post('/legacy/sprint35c/address-1', (req, res) => {
    res.redirect('/legacy/sprint35c/move-date')
  })
  ;

  router.post('/legacy/sprint35c/move-date', (req, res) => {
    res.redirect('/legacy/sprint35c/homephone-address')
  })
  ;

  router.post('/legacy/sprint35c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('living-with');
    }
  });

  router.post('/legacy/sprint35c/homephone-address-change', (req, res) => {
    res.redirect('/legacy/sprint35c/living-with')
  })
  ;

  router.post('/legacy/sprint35c/living-with', (req, res) => {
    res.redirect('/legacy/sprint35c/poa')
  })
  ;


  // Living with anyone at address change
  router.post('/legacy/sprint35c/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  router.post('/legacy/sprint35c/poa', (req, res) => {
    res.redirect('/legacy/sprint35c/declaration')
  })
  ;

  router.post('/legacy/sprint35c/declaration', (req, res) => {
    res.redirect('/legacy/sprint35c/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint35c/check', (req, res) => {
    res.redirect('/legacy/sprint35c/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint35c/make-payment', (req, res) => {
    res.redirect('/legacy/sprint35c/overview-topup-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint35c/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint35c/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint35c/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint35c/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint35c/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint35c/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint35c/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint35c/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint35c/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
