const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/frequency', (req, res) => {
    res.redirect('/legacy/sprint19b/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/bankdetails', (req, res) => {
    res.redirect('/legacy/sprint19b/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/workphone', (req, res) => {
    res.redirect('/legacy/sprint19b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/mobilephone', (req, res) => {
    res.redirect('/legacy/sprint19b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/email', (req, res) => {
    res.redirect('/legacy/sprint19b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/homephone', (req, res) => {
    res.redirect('/legacy/sprint19b/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/find', (req, res) => {
    res.redirect('/legacy/sprint19b/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint19b/address', (req, res) => {
    res.redirect('/legacy/sprint19b/address-1')
  })
  ;

  router.post('/legacy/sprint19b/address-1', (req, res) => {
    res.redirect('/legacy/sprint19b/new-move-date')
  })
  ;

  // Change of address and home phone number
  router.post('/legacy/sprint19b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/legacy/sprint19b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/legacy/sprint19b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/legacy/sprint19b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/legacy/sprint19b/workphone', (req, res) => {
    res.redirect('/legacy/sprint19b/overview')
  })
  ;

  // Email removal
  router.post('/legacy/sprint19b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/legacy/sprint19b/marital-status', (req, res) => {
    res.redirect('/legacy/sprint19b/marriage-details')
  })
  ;

  router.post('/legacy/sprint19b/marriage-details', (req, res) => {
    res.redirect('/legacy/sprint19b/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/legacy/sprint19b/contact-preferences', (req, res) => {
    res.redirect('/legacy/sprint19b/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/legacy/sprint19b/occupants', (req, res) => {
    res.redirect('/legacy/sprint19b/reason-removed1')
  })
  ;

  router.post('/legacy/sprint19b/occupants1', function(req, res) {
    if ( req.body['correct-address'] === 'yes' ) {
      res.redirect('/legacy/sprint19b/correct-address');
    } else {
      res.redirect('/legacy/sprint19b/address');
    }
  });


  router.post('/legacy/sprint19b/correct-address', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19b/other-occupants2');
    } else {
      res.redirect('/legacy/sprint19b/other-occupants');
    }
  });

  router.post('/legacy/sprint19b/reason-removed1', (req, res) => {
    res.redirect('/legacy/sprint19b/searchlight-check')
  })
  ;


  router.post('/legacy/sprint19b/searchlight-check', function(req, res) {
    if ( req.body['searchlight'] === 'yes' ) {
      res.redirect('evidence-request');
    } else {
      res.redirect('move-date');
    }
  });

  router.post('/legacy/sprint19b/move-date', (req, res) => {
    res.redirect('/legacy/sprint19b/confirm-top-up')
  })
  ;

  router.post('/legacy/sprint19b/confirm-top-up', (req, res) => {
    res.redirect('/legacy/sprint19b/overview-evidence-received')
  })
  ;

  router.post('/legacy/sprint19b/check-underpayment', (req, res) => {
    res.redirect('/legacy/sprint19b/evidence-request')
  })
  ;

  router.post('/legacy/sprint19b/evidence-request', (req, res) => {
    res.redirect('/legacy/sprint19b/overview-awaiting-verification')
  })
  ;

  router.post('/legacy/sprint19b/evidence-verification', (req, res) => {
    res.redirect('/legacy/sprint19b/confirm-top-up')
  })
  ;


  // Stopping payments
  router.post('/legacy/sprint19b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });


  router.post('/legacy/sprint19b/move-date1', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19b/move-date');
    } else {
      res.redirect('/legacy/sprint19b/move-date3');
    }
  });

  router.post('/legacy/sprint19b/move-date3', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19b/confirm-top-up');
    } else {
      res.redirect('/legacy/sprint19b/confirm-no-top-up');
    }
  });

  router.post('/legacy/sprint19b/list-of-reasons', function(req, res) {
    if ( req.body['sp-age'] === 'yes' ) {
      res.redirect('/legacy/sprint19b/move-date3');
    } else {
      res.redirect('/legacy/sprint19b/move-date3');
    }
  });

  module.exports = router;
