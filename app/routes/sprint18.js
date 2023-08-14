const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/frequency', (req, res) => {
    res.redirect('/legacy/sprint18/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint18/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/workphone', (req, res) => {
    res.redirect('/legacy/sprint18/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint18/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/email', (req, res) => {
    res.redirect('/legacy/sprint18/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/homephone', (req, res) => {
    res.redirect('/legacy/sprint18/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/find', (req, res) => {
    res.redirect('/legacy/sprint18/find-1')
  })
  ;

  router.post('/legacy/sprint18/find-1', (req, res) => {
    res.redirect('/legacy/sprint18/security')
  })
  ;


  router.post('/legacy/sprint18/security', (req, res) => {
    res.redirect('/legacy/sprint18/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18/address', (req, res) => {
    res.redirect('/legacy/sprint18/address-1')
  })
  ;

  router.post('/legacy/sprint18/address-1', (req, res) => {
    res.redirect('/legacy/sprint18/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint18/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint18/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint18/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint18/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint18/workphone', (req, res) => {
    res.redirect('/legacy/sprint18/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint18/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint18/marital-status', (req, res) => {
    res.redirect('/legacy/sprint18/marriage-details')
  })
  ;

  router.post('/legacy/sprint18/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint18/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint18/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint18/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint18/occupants', (req, res) => {
    res.redirect('/legacy/sprint18/reason-removed1')
  })
  ;

  router.post('/legacy/sprint18/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint18/move-date')
  })
  ;

  router.post('/legacy/sprint18/move-date', (req, res) => {
    res.redirect('/legacy/sprint18/reason-removed2')
  })
  ;

  router.post('/legacy/sprint18/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint18/check-underpayment')
  })
  ;

  router.post('/legacy/sprint18/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint18/evidence-request')
  })
  ;

  router.post('/legacy/sprint18/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint18/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint18/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint18/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint18/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
