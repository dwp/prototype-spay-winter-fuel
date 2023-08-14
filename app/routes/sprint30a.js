const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint30a/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint30a/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint30a/find', (req, res) => {
    res.redirect('/legacy/sprint30a/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint30a/find-1', (req, res) => {
    res.redirect('/legacy/sprint30a/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/legacy/sprint30a/security', (req, res) => {
    res.redirect('/legacy/sprint30a/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint30a/homephone', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint30a/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint30a/workphone', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint30a/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint30a/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint30a/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint30a/email', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint30a/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint30a/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint30a/address', (req, res) => {
    res.redirect('/legacy/sprint30a/address-1')
  })
  ;

  router.post('/legacy/sprint30a/address-1', (req, res) => {
    res.redirect('/legacy/sprint30a/move-date')
  })
  ;

  router.post('/legacy/sprint30a/move-date', (req, res) => {
    res.redirect('/legacy/sprint30a/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint30a/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint30a/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('make-payment');
    }
  });

  // Check to payments
  router.post('/legacy/sprint30a/check', (req, res) => {
    res.redirect('/legacy/sprint30a/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint30a/make-payment', (req, res) => {
    res.redirect('/legacy/sprint30a/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint30a/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint30a/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details to reissue payment
  router.post('/legacy/sprint30a/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint30a/reissue-payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint30a/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint30a/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint30a/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/legacy/sprint30a/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;
