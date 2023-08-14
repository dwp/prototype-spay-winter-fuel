const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint30c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint30c/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------



  // Security into record with security confirmation box
  router.post('/legacy/sprint30c/get-overpayment', (req, res) => {
    res.redirect('/legacy/sprint30c/overview')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint30c/homephone', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint30c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint30c/workphone', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint30c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint30c/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint30c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint30c/email', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint30c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint30c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint30c/address', (req, res) => {
    res.redirect('/legacy/sprint30c/address-1')
  })
  ;

  router.post('/legacy/sprint30c/address-1', (req, res) => {
    res.redirect('/legacy/sprint30c/move-date')
  })
  ;

  router.post('/legacy/sprint30c/move-date', (req, res) => {
    res.redirect('/legacy/sprint30c/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint30c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint30c/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('make-payment');
    }
  });

  // Check to payments
  router.post('/legacy/sprint30c/check', (req, res) => {
    res.redirect('/legacy/sprint30c/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint30c/make-payment', (req, res) => {
    res.redirect('/legacy/sprint30c/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint30c/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint30c/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details to reissue payment
  router.post('/legacy/sprint30c/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint30c/reissue-payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint30c/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint30c/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint30c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });


  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint30c/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint30c/payment-confirmation')
  })
  ;

  // Underpayment ref to overview with payment made banner
  router.post('/legacy/sprint30c/underpayment', (req, res) => {
    res.redirect('/legacy/sprint30c/top-up-confirmation')
  })
  ;


  module.exports = router;
