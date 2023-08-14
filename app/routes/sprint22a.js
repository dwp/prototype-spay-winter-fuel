const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/frequency', (req, res) => {
    res.redirect('/legacy/sprint22a/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint22a/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/workphone', (req, res) => {
    res.redirect('/legacy/sprint22a/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint22a/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/email', (req, res) => {
    res.redirect('/legacy/sprint22a/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/homephone', (req, res) => {
    res.redirect('/legacy/sprint22a/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/find', (req, res) => {
    res.redirect('/legacy/sprint22a/find-1')
  })
  ;

  router.post('/legacy/sprint22a/find-1', (req, res) => {
    res.redirect('/legacy/sprint22a/security')
  })
  ;


  router.post('/legacy/sprint22a/security', (req, res) => {
    res.redirect('/legacy/sprint22a/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22a/address', (req, res) => {
    res.redirect('/legacy/sprint22a/address-1')
  })
  ;

  router.post('/legacy/sprint22a/address-1', (req, res) => {
    res.redirect('/legacy/sprint22a/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint22a/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint22a/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint22a/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint22a/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint22a/workphone', (req, res) => {
    res.redirect('/legacy/sprint22a/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint22a/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint22a/marital-status', (req, res) => {
    res.redirect('/legacy/sprint22a/marriage-details')
  })
  ;

  router.post('/legacy/sprint22a/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint22a/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint22a/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint22a/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint22a/occupants', (req, res) => {
    res.redirect('/legacy/sprint22a/reason-removed1')
  })
  ;

  router.post('/legacy/sprint22a/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint22a/move-date')
  })
  ;

  router.post('/legacy/sprint22a/move-date', (req, res) => {
    res.redirect('/legacy/sprint22a/reason-removed2')
  })
  ;

  router.post('/legacy/sprint22a/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint22a/check-underpayment')
  })
  ;

  router.post('/legacy/sprint22a/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint22a/evidence-request')
  })
  ;

  router.post('/legacy/sprint22a/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint22a/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint22a/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint22a/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint22a/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
