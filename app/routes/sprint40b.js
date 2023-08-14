const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Find to find result
  router.post('/legacy/sprint40b/find', (req, res) => {
    res.redirect('/legacy/sprint40b/find-1')
  });

  // Find to find result
  router.post('/legacy/sprint40b/find-1', (req, res) => {
    res.redirect('/legacy/sprint40b/security')
  });

  // Find to find result
  router.post('/legacy/sprint40b/security', (req, res) => {
    res.redirect('/legacy/sprint40b/overview-po-box')
  });

  // Fix PO box to PO box fixed
  router.post('/legacy/sprint40b/fix-po-box', (req, res) => {
    res.redirect('/legacy/sprint40b/overview-po-box')
  });

  // Address to address found
  router.post('/legacy/sprint40b/address', (req, res) => {
    res.redirect('/legacy/sprint40b/address-1')
  });

  // Home phone number change to living with q
  router.post('/legacy/sprint40b/approve-po-box', (req, res) => {
    res.redirect('/legacy/sprint40b/living-with-po')
  });


  // Address found to move date
  router.post('/legacy/sprint40b/address-1', (req, res) => {
    res.redirect('/legacy/sprint40b/move-date')
  });

  // Move date to home phone number change
  router.post('/legacy/sprint40b/move-date', (req, res) => {
    res.redirect('/legacy/sprint40b/homephone-address')
  });

  // Home phone number change
  router.post('/legacy/sprint40b/homephone-address', function(req, res) {
    if (req.body['homephone-address'] === 'Yes') {
      res.redirect('homephone-address-change');
    } else {
      res.redirect('living-with');
    }
  });

  router.post('/legacy/sprint40b/homephone-address-change', (req, res) => {
    res.redirect('/legacy/sprint40b/living-with')
  });

  // Living with anyone at address change
  router.post('/legacy/sprint40b/living-with', function(req, res) {
    if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  // Living with anyone at PO box
  router.post('/legacy/sprint40b/living-with-po', function(req, res) {
    if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
      res.redirect('living-with-age-po');
    } else {
      res.redirect('poa-po');
    }
  });


  // Living with age to POA
  router.post('/legacy/sprint40b/living-with-age-po', (req, res) => {
    res.redirect('/legacy/sprint40b/poa-po')
  });

  // Living with age to POA
  router.post('/legacy/sprint40b/living-with-age', (req, res) => {
    res.redirect('/legacy/sprint40b/poa')
  });

  // Declaration to overview
  router.post('/legacy/sprint40b/declaration', (req, res) => {
    res.redirect('/legacy/sprint40b/make-payment')
  });


  // Power of attourney
  router.post('/legacy/sprint40b/poa', function(req, res) {
    if (req.body['poa'] === 'Yes') {
      res.redirect('poa-people');
    } else {
      res.redirect('declaration');
    }
  });

  // POA to
  router.post('/legacy/sprint40b/poa-po', (req, res) => {
    res.redirect('/legacy/sprint40b/declaration-po')
  });

  // POA to
  router.post('/legacy/sprint40b/declaration-po', (req, res) => {
    res.redirect('/legacy/sprint40b/make-payment')
  });

// Make the payment back to view of the record
router.post('/legacy/sprint40b/make-payment', (req, res) => {
  res.redirect('/legacy/sprint40b/overview-changed')
});


  module.exports = router;
