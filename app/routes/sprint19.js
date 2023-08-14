const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/frequency', (req, res) => {
    res.redirect('/legacy/sprint19/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint19/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/workphone', (req, res) => {
    res.redirect('/legacy/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/email', (req, res) => {
    res.redirect('/legacy/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/homephone', (req, res) => {
    res.redirect('/legacy/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/find', (req, res) => {
    res.redirect('/legacy/sprint19/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19/address', (req, res) => {
    res.redirect('/legacy/sprint19/address-1')
  })
  ;

  router.post('/legacy/sprint19/address-1', (req, res) => {
    res.redirect('/legacy/sprint19/new-move-date')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint19/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint19/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint19/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint19/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint19/workphone', (req, res) => {
    res.redirect('/legacy/sprint19/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint19/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint19/marital-status', (req, res) => {
    res.redirect('/legacy/sprint19/marriage-details')
  })
  ;

  router.post('/legacy/sprint19/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint19/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint19/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint19/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint19/occupants', (req, res) => {
    res.redirect('/legacy/sprint19/reason-removed1')
  })
  ;

  router.post('/legacy/sprint19/occupants1', function(req, res) {
    if ( req.body['correct-address'] === 'yes' ) {
      res.redirect('/legacy/sprint19/correct-address');
    } else {
      res.redirect('/legacy/sprint19/address');
    }
  });


  router.post('/legacy/sprint19/correct-address', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19/other-occupants2');
    } else {
      res.redirect('/legacy/sprint19/other-occupants');
    }
  });

  router.post('/legacy/sprint19/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint19/searchlight-check')
  })
  ;


  router.post('/legacy/sprint19/searchlight-check', function(req, res) {
    if ( req.body['searchlight'] === 'yes' ) {
      res.redirect('evidence-request');
    } else {
      res.redirect('move-date');
    }
  });

  router.post('/legacy/sprint19/move-date', (req, res) => {
    res.redirect('/legacy/sprint19/confirm-top-up')
  })
  ;

  router.post('/legacy/sprint19/confirm-top-up', (req, res) => {
    res.redirect('/legacy/sprint19/overview-evidence-received')
  })
  ;

  router.post('/legacy/sprint19/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint19/evidence-request')
  })
  ;

  router.post('/legacy/sprint19/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint19/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint19/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint19/confirm-top-up')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint19/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });


  router.post('/legacy/sprint19/move-date1', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19/move-date');
    } else {
      res.redirect('/legacy/sprint19/move-date3');
    }
  });

  router.post('/legacy/sprint19/move-date3', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19/confirm-top-up');
    } else {
      res.redirect('/legacy/sprint19/confirm-no-top-up');
    }
  });

  router.post('/legacy/sprint19/list-of-reasons', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19/move-date3');
    } else {
      res.redirect('/legacy/sprint19/move-date3');
    }
  });

  module.exports = router;
