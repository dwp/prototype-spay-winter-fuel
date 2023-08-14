const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/frequency', (req, res) => {
    res.redirect('/legacy/sprint18b/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint18b/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/workphone', (req, res) => {
    res.redirect('/legacy/sprint18b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint18b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/email', (req, res) => {
    res.redirect('/legacy/sprint18b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/homephone', (req, res) => {
    res.redirect('/legacy/sprint18b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/find', (req, res) => {
    res.redirect('/legacy/sprint18b/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint18b/address', (req, res) => {
    res.redirect('/legacy/sprint18b/address-1')
  })
  ;

  router.post('/legacy/sprint18b/address-1', (req, res) => {
    res.redirect('/legacy/sprint18b/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint18b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint18b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint18b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint18b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint18b/workphone', (req, res) => {
    res.redirect('/legacy/sprint18b/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint18b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint18b/marital-status', (req, res) => {
    res.redirect('/legacy/sprint18b/marriage-details')
  })
  ;

  router.post('/legacy/sprint18b/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint18b/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint18b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint18b/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint18b/occupants', (req, res) => {
    res.redirect('/legacy/sprint18b/reason-removed1')
  })
  ;

  router.post('/legacy/sprint18b/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint18b/searchlight-check')
  })
  ;


  router.post('/legacy/sprint18b/searchlight-check', function(req, res) {
    if ( req.body['searchlight'] === 'yes' ) {
      res.redirect('evidence-request');
    } else {
      res.redirect('move-date');
    }
  });

  router.post('/legacy/sprint18b/move-date', (req, res) => {
    res.redirect('/legacy/sprint18b/confirm-top-up')
  })
  ;

  router.post('/legacy/sprint18b/confirm-top-up', (req, res) => {
    res.redirect('/legacy/sprint18b/overview-evidence-received')
  })
  ;

  router.post('/legacy/sprint18b/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint18b/evidence-request')
  })
  ;

  router.post('/legacy/sprint18b/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint18b/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint18b/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint18b/confirm-top-up')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint18b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
