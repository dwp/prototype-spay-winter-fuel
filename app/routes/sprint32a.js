const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint32a/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint32a/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint32a/find', (req, res) => {
    res.redirect('/legacy/sprint32a/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint32a/find-1', (req, res) => {
    res.redirect('/legacy/sprint32a/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/legacy/sprint32a/security', (req, res) => {
    res.redirect('/legacy/sprint32a/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint32a/homephone', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint32a/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint32a/workphone', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint32a/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint32a/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint32a/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint32a/email', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint32a/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint32a/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint32a/address', (req, res) => {
    res.redirect('/legacy/sprint32a/address-1')
  })
  ;

  router.post('/legacy/sprint32a/address-1', (req, res) => {
    res.redirect('/legacy/sprint32a/move-date')
  })
  ;

  router.post('/legacy/sprint32a/move-date', (req, res) => {
    res.redirect('/legacy/sprint32a/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint32a/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint32a/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  router.post('/legacy/sprint32a/poa', (req, res) => {
    res.redirect('/legacy/sprint32a/declaration')
  })
  ;

  router.post('/legacy/sprint32a/declaration', (req, res) => {
    res.redirect('/legacy/sprint32a/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint32a/check', (req, res) => {
    res.redirect('/legacy/sprint32a/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint32a/make-payment', (req, res) => {
    res.redirect('/legacy/sprint32a/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint32a/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint32a/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint32a/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint32a/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint32a/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint32a/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint32a/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint32a/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint32a/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
