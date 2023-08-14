const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint31c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint31c/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint31c/find', (req, res) => {
    res.redirect('/legacy/sprint31c/find-1')
  })
  ;

  // Find result to record
  router.post('/legacy/sprint31c/find-1', (req, res) => {
    res.redirect('/legacy/sprint31c/overview')
  })
  ;



  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint31c/homephone', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint31c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint31c/workphone', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint31c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint31c/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint31c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint31c/email', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint31c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint31c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint31c/address', (req, res) => {
    res.redirect('/legacy/sprint31c/address-1')
  })
  ;

  router.post('/legacy/sprint31c/address-1', (req, res) => {
    res.redirect('/legacy/sprint31c/move-date')
  })
  ;

  router.post('/legacy/sprint31c/move-date', (req, res) => {
    res.redirect('/legacy/sprint31c/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint31c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint31c/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('declaration');
    }
  });

  router.post('/legacy/sprint31c/declaration', (req, res) => {
    res.redirect('/legacy/sprint31c/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint31c/check', (req, res) => {
    res.redirect('/legacy/sprint31c/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint31c/make-payment', (req, res) => {
    res.redirect('/legacy/sprint31c/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint31c/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint31c/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint31c/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint31c/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint31c/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint31c/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint31c/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint31c/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint31c/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
