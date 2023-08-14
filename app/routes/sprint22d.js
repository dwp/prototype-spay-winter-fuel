const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/legacy/sprint22d/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint22d/find');
  }
  });



  router.post('/legacy/sprint22d/frequency', (req, res) => {
    res.redirect('/legacy/sprint22d/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint22d/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/workphone', (req, res) => {
    res.redirect('/legacy/sprint22d/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint22d/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/email', (req, res) => {
    res.redirect('/legacy/sprint22d/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/homephone', (req, res) => {
    res.redirect('/legacy/sprint22d/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/find', (req, res) => {
    res.redirect('/legacy/sprint22d/find-1')
  })
  ;

  router.post('/legacy/sprint22d/find-1', (req, res) => {
    res.redirect('/legacy/sprint22d/security')
  })
  ;


  router.post('/legacy/sprint22d/security', (req, res) => {
    res.redirect('/legacy/sprint22d/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22d/address', (req, res) => {
    res.redirect('/legacy/sprint22d/address-1')
  })
  ;

  router.post('/legacy/sprint22d/address-1', (req, res) => {
    res.redirect('/legacy/sprint22d/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint22d/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint22d/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint22d/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint22d/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint22d/workphone', (req, res) => {
    res.redirect('/legacy/sprint22d/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint22d/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint22d/marital-status', (req, res) => {
    res.redirect('/legacy/sprint22d/marriage-details')
  })
  ;

  router.post('/legacy/sprint22d/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint22d/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint22d/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint22d/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint22d/occupants', (req, res) => {
    res.redirect('/legacy/sprint22d/reason-removed1')
  })
  ;

  router.post('/legacy/sprint22d/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint22d/move-date')
  })
  ;

  router.post('/legacy/sprint22d/move-date', (req, res) => {
    res.redirect('/legacy/sprint22d/reason-removed2')
  })
  ;

  router.post('/legacy/sprint22d/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint22d/check-underpayment')
  })
  ;

  router.post('/legacy/sprint22d/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint22d/evidence-request')
  })
  ;

  router.post('/legacy/sprint22d/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint22d/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint22d/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint22d/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint22d/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
