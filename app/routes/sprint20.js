const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Scenarios



  // Date of birth

  router.post('/legacy/sprint1-21/sprint20/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint1-21/sprint20/residency')
  })
  ;

  // Living

  router.post('/legacy/sprint1-21/sprint20/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('benefits');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/legacy/sprint1-21/sprint20/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});



  // Residency type

  router.post('/legacy/sprint1-21/sprint20/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('who');
    }
  });


  // Hospital

  router.post('/legacy/sprint1-21/sprint20/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/legacy/sprint1-21/sprint20/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/legacy/sprint1-21/sprint20/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('live-with-carehome');
        } else {
          res.redirect('full-payment');
        }
      });

// Who (Care home during Q week)

router.post('/legacy/sprint1-21/sprint20/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/legacy/sprint1-21/sprint20/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});


  //    } else if (something === something) {


  module.exports = router;
