const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/returnedpayment/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/returnedpayment/find');
  }
  });



  router.post('/returnedpayment/frequency', (req, res) => {
    res.redirect('/returnedpayment/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/bankdetails', (req, res) => {
    res.redirect('/returnedpayment/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/workphone', (req, res) => {
    res.redirect('/returnedpayment/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/mobilephone', (req, res) => {
    res.redirect('/returnedpayment/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/email', (req, res) => {
    res.redirect('/returnedpayment/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/homephone', (req, res) => {
    res.redirect('/returnedpayment/contact')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/find', (req, res) => {
    res.redirect('/returnedpayment/find-1')
  })
  ;

  router.post('/returnedpayment/find-1', (req, res) => {
    res.redirect('/returnedpayment/security')
  })
  ;


  router.post('/returnedpayment/security', (req, res) => {
    res.redirect('/returnedpayment/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/returnedpayment/address', (req, res) => {
    res.redirect('/returnedpayment/address-1')
  })
  ;

  router.post('/returnedpayment/address-1', (req, res) => {
    res.redirect('/returnedpayment/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/returnedpayment/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/returnedpayment/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/returnedpayment/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/returnedpayment/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/returnedpayment/workphone', (req, res) => {
    res.redirect('/returnedpayment/contact')
  })
  ;

  // Email removal
  router.post('/returnedpayment/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/returnedpayment/marital-status', (req, res) => {
    res.redirect('/returnedpayment/marriage-details')
  })
  ;

  router.post('/returnedpayment/marriage-details', (req, res) => {
    res.redirect('/returnedpayment/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/returnedpayment/contact-preferences', (req, res) => {
    res.redirect('/returnedpayment/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/returnedpayment/occupants', (req, res) => {
    res.redirect('/returnedpayment/reason-removed1')
  })
  ;

  router.post('/returnedpayment/reason-removed1', (req, res) => {
    res.redirect('/returnedpayment/move-date')
  })
  ;

  router.post('/returnedpayment/move-date', (req, res) => {
    res.redirect('/returnedpayment/reason-removed2')
  })
  ;

  router.post('/returnedpayment/reason-removed2', (req, res) => {
    res.redirect('/returnedpayment/check-underpayment')
  })
  ;

  router.post('/returnedpayment/check-underpayment', (req, res) => {
    res.redirect('/returnedpayment/evidence-request')
  })
  ;

  router.post('/returnedpayment/evidence-request', (req, res) => {
    res.redirect('/returnedpayment/overview-awaiting-verification')
  })
  ;

  router.post('/returnedpayment/evidence-verification', (req, res) => {
    res.redirect('/returnedpayment/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/returnedpayment/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
