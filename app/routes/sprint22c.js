const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  router.use((req, res, next) => {
    res.locals.back = req.headers.referer
    next()
  })

  // Query

  router.post('/legacy/sprint22c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint22c/find');
  }
  });

  router.post('/legacy/sprint22c/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint22c/too-young')
  })
  ;


  router.post('/legacy/sprint22c/frequency', (req, res) => {
    res.redirect('/legacy/sprint22c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint22c/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/workphone', (req, res) => {
    res.redirect('/legacy/sprint22c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint22c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/email', (req, res) => {
    res.redirect('/legacy/sprint22c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/homephone', (req, res) => {
    res.redirect('/legacy/sprint22c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/find', (req, res) => {
    res.redirect('/legacy/sprint22c/find-1')
  })
  ;

  router.post('/legacy/sprint22c/find-1', (req, res) => {
    res.redirect('/legacy/sprint22c/security')
  })
  ;


  router.post('/legacy/sprint22c/security', (req, res) => {
    res.redirect('/legacy/sprint22c/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint22c/address', (req, res) => {
    res.redirect('/legacy/sprint22c/address-1')
  })
  ;

  router.post('/legacy/sprint22c/address-1', (req, res) => {
    res.redirect('/legacy/sprint22c/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint22c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint22c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint22c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint22c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint22c/workphone', (req, res) => {
    res.redirect('/legacy/sprint22c/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint22c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint22c/marital-status', (req, res) => {
    res.redirect('/legacy/sprint22c/marriage-details')
  })
  ;

  router.post('/legacy/sprint22c/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint22c/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint22c/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint22c/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint22c/occupants', (req, res) => {
    res.redirect('/legacy/sprint22c/reason-removed1')
  })
  ;

  router.post('/legacy/sprint22c/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint22c/move-date')
  })
  ;

  router.post('/legacy/sprint22c/move-date', (req, res) => {
    res.redirect('/legacy/sprint22c/reason-removed2')
  })
  ;

  router.post('/legacy/sprint22c/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint22c/check-underpayment')
  })
  ;

  router.post('/legacy/sprint22c/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint22c/evidence-request')
  })
  ;

  router.post('/legacy/sprint22c/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint22c/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint22c/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint22c/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint22c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
