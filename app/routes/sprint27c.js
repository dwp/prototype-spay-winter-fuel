const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/legacy/sprint27c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint27c/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint27c/find', (req, res) => {
    res.redirect('/legacy/sprint27c/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint27c/find-1', (req, res) => {
    res.redirect('/legacy/sprint27c/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/legacy/sprint27c/security', (req, res) => {
    res.redirect('/legacy/sprint27c/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/legacy/sprint27c/homephone', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;

  // Home phone number removal
  router.post('/legacy/sprint27c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/legacy/sprint27c/workphone', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;

  // Work phone number removal
  router.post('/legacy/sprint27c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/legacy/sprint27c/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/legacy/sprint27c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/legacy/sprint27c/email', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint27c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/legacy/sprint27c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;

  // Address -----------------------------

  router.post('/legacy/sprint27c/address', (req, res) => {
    res.redirect('/legacy/sprint27c/address-1')
  })
  ;

  router.post('/legacy/sprint27c/address-1', (req, res) => {
    res.redirect('/legacy/sprint27c/living-with')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint27c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/legacy/sprint27c/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('homephone-address');
    }
  });

  // Living with age back to contact
  router.post('/legacy/sprint27c/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint27c/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details to reissue payment
  router.post('/legacy/sprint27c/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint27c/reissue-payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/legacy/sprint27c/reissue-payment', (req, res) => {
    res.redirect('/legacy/sprint27c/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint27c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
