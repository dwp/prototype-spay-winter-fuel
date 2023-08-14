const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/legacy/sprint27b/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint27b/find');
  }
  });



  router.post('/legacy/sprint27b/frequency', (req, res) => {
    res.redirect('/legacy/sprint27b/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint27b/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/workphone', (req, res) => {
    res.redirect('/legacy/sprint27b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint27b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/email', (req, res) => {
    res.redirect('/legacy/sprint27b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/homephone', (req, res) => {
    res.redirect('/legacy/sprint27b/contact')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/find', (req, res) => {
    res.redirect('/legacy/sprint27b/find-1')
  })
  ;

  router.post('/legacy/sprint27b/find-1', (req, res) => {
    res.redirect('/legacy/sprint27b/security')
  })
  ;


  router.post('/legacy/sprint27b/security', (req, res) => {
    res.redirect('/legacy/sprint27b/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint27b/address', (req, res) => {
    res.redirect('/legacy/sprint27b/address-1')
  })
  ;

  router.post('/legacy/sprint27b/address-1', (req, res) => {
    res.redirect('/legacy/sprint27b/living-with')
  })
  ;


  // Living with
  router.post('/legacy/sprint27b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('contact-left-hospital');
    }
  });

  // Living with age
  router.post('/legacy/sprint27b/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint27b/contact-left-hospital')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint27b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint27b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint27b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint27b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint27b/workphone', (req, res) => {
    res.redirect('/legacy/sprint27b/contact')
  })
  ;

  // Email removal
  router.post('/legacy/sprint27b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint27b/marital-status', (req, res) => {
    res.redirect('/legacy/sprint27b/marriage-details')
  })
  ;

  router.post('/legacy/sprint27b/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint27b/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint27b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint27b/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint27b/occupants', (req, res) => {
    res.redirect('/legacy/sprint27b/reason-removed1')
  })
  ;

  router.post('/legacy/sprint27b/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint27b/move-date')
  })
  ;

  router.post('/legacy/sprint27b/move-date', (req, res) => {
    res.redirect('/legacy/sprint27b/reason-removed2')
  })
  ;

  router.post('/legacy/sprint27b/reason-removed2', (req, res) => {
    res.redirect('/legacy/sprint27b/check-underpayment')
  })
  ;

  router.post('/legacy/sprint27b/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint27b/evidence-request')
  })
  ;

  router.post('/legacy/sprint27b/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint27b/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint27b/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint27b/overview-evidence-received')
  })
  ;


  // Hospital leave date to address
  router.post('/legacy/sprint27b/left-hospital', (req, res) => {
    res.redirect('/legacy/sprint27b/address')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint27b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
