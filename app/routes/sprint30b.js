const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint30b/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint30b/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------



  // Security into record with security confirmation box
  router.post('/legacy/sprint30b/get-overpayment', (req, res) => {
    res.redirect('/legacy/sprint30b/overview')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint30b/homephone', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint30b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint30b/workphone', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint30b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint30b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint30b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint30b/email', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint30b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint30b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint30b/address', (req, res) => {
    res.redirect('/legacy/sprint30b/address-1')
  })
  ;

  router.post('/legacy/sprint30b/address-1', (req, res) => {
    res.redirect('/legacy/sprint30b/move-date')
  })
  ;

  router.post('/legacy/sprint30b/move-date', (req, res) => {
    res.redirect('/legacy/sprint30b/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/legacy/sprint30b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint30b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('make-payment');
    }
  });

  // Check to payments
  router.post('/legacy/sprint30b/check', (req, res) => {
    res.redirect('/legacy/sprint30b/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/legacy/sprint30b/make-payment', (req, res) => {
    res.redirect('/legacy/sprint30b/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/legacy/sprint30b/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint30b/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details to reissue payment
  router.post('/legacy/sprint30b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint30b/reissue-payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint30b/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint30b/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint30b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  //
  router.post('/legacy/sprint30b/overpayment', (req, res) => {
    res.redirect('/legacy/sprint30b/overpayment-confirmation')
  })
  ;

  module.exports = router;
