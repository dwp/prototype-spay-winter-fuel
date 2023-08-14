const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/legacy/sprint23b/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint23b/find');
  }
  });



  router.post('/legacy/sprint23b/frequency', (req, res) => {
    res.redirect('/legacy/sprint23b/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint23b/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/workphone', (req, res) => {
    res.redirect('/legacy/sprint23b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint23b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/email', (req, res) => {
    res.redirect('/legacy/sprint23b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/homephone', (req, res) => {
    res.redirect('/legacy/sprint23b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/find', (req, res) => {
    res.redirect('/legacy/sprint23b/find-1')
  })
  ;

  router.post('/legacy/sprint23b/find-1', (req, res) => {
    res.redirect('/legacy/sprint23b/security')
  })
  ;


  router.post('/legacy/sprint23b/security', (req, res) => {
    res.redirect('/legacy/sprint23b/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint23b/address', (req, res) => {
    res.redirect('/legacy/sprint23b/address-1')
  })
  ;

  router.post('/legacy/sprint23b/address-1', (req, res) => {
    res.redirect('/legacy/sprint23b/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint23b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint23b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint23b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint23b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint23b/workphone', (req, res) => {
    res.redirect('/legacy/sprint23b/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint23b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint23b/marital-status', (req, res) => {
    res.redirect('/legacy/sprint23b/marriage-details')
  })
  ;

  router.post('/legacy/sprint23b/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint23b/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint23b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint23b/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint23b/occupants', (req, res) => {
    res.redirect('/legacy/sprint23b/reason-removed1')
  })
  ;

  router.post('/legacy/sprint23b/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint23b/move-date')
  })
  ;

  router.post('/legacy/sprint23b/move-date', (req, res) => {
    res.redirect('/legacy/sprint23b/reason-removed2')
  })
  ;

  router.post('/legacy/sprint23b/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint23b/check-underpayment')
  })
  ;

  router.post('/legacy/sprint23b/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint23b/evidence-request')
  })
  ;

  router.post('/legacy/sprint23b/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint23b/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint23b/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint23b/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint23b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
