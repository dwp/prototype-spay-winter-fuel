const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint31d/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint31d/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint31d/find', (req, res) => {
    res.redirect('/legacy/sprint31d/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint31d/find-1', (req, res) => {
    res.redirect('/legacy/sprint31d/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/legacy/sprint31d/security', (req, res) => {
    res.redirect('/legacy/sprint31d/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint31d/homephone', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint31d/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint31d/workphone', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint31d/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint31d/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint31d/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint31d/email', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint31d/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint31d/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint31d/address', (req, res) => {
    res.redirect('/legacy/sprint31d/address-1')
  })
  ;

  router.post('/legacy/sprint31d/address-1', (req, res) => {
    res.redirect('/legacy/sprint31d/move-date')
  })
  ;

  router.post('/legacy/sprint31d/move-date', (req, res) => {
    res.redirect('/legacy/sprint31d/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint31d/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint31d/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('declaration');
    }
  });

  router.post('/legacy/sprint31d/declaration', (req, res) => {
    res.redirect('/legacy/sprint31d/make-payment')
  })
  ;

  // Check to payments
  router.post('/legacy/sprint31d/check', (req, res) => {
    res.redirect('/legacy/sprint31d/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint31d/make-payment', (req, res) => {
    res.redirect('/legacy/sprint31d/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint31d/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint31d/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/legacy/sprint31d/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint31d/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/legacy/sprint31d/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint31d/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint31d/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint31d/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint31d/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
