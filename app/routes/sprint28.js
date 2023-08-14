const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint28/comparison-filter', function(req, res) {
  if ( req.body['filter-by'] === 'file-type' ) {
    res.redirect('comparison-filter-file');
  } else {
    res.redirect('comparison-filter-eligibility');
  }
  });
  ;

  router.post('/legacy/sprint28/comparison-filter-eligibility', function(req, res) {
  if ( req.body['eligibility'] === 'eligible' ) {
    res.redirect('comparison-filter-eligible');
  } else {
    res.redirect('comparison-filter-ineligible');
  }
  });
  ;

  router.post('/legacy/sprint28/comparison-filter-eligible', (req, res) => {
    res.redirect('/legacy/sprint28/results-eligible')
  })
  ;

  router.post('/legacy/sprint28/comparison-filter-ineligible', (req, res) => {
    res.redirect('/legacy/sprint28/results-ineligible')
  })
  ;


  // See cases, eligible or ineligible

  router.post('/legacy/sprint28/comparison-filter-eligibility', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/legacy/sprint28/comparison-filter-eligible')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/legacy/sprint28/comparison-filter-ineligible');
    } else {
      res.redirect('/legacy/sprint23/deferral')
    }
  })

  // GySP filter

  router.post('/legacy/sprint28/gysp-filter', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/legacy/sprint28/gysp-eligible-filter')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/legacy/sprint28/gysp-ineligible-filter');
    } else {
      res.redirect('/legacy/sprint23/deferral')
    }
  })


  // GySP filter to results
  router.post('/legacy/sprint28/gysp-eligible-filter', (req, res) => {
    res.redirect('/legacy/sprint28/gysp-results')
  })
  ;




  module.exports = router;
