const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


//
router.post('/legacy/sprint21d/receiving-sp', (req, res) => {
  if (req.body.pension.includes('pc')) {
    res.redirect('/legacy/sprint21d/full-payment')
  }
  else if (req.body.pension.includes('sp')) {
    res.redirect('/legacy/sprint21d/benefits');
  } else {
    res.redirect('/legacy/sprint21d/claimed')
  }
})


  // Date of birth

  router.post('/legacy/sprint21d/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint21d/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint21d/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint21d/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/legacy/sprint21d/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('who');
  }
});



  // Residency type

  router.post('/legacy/sprint21d/residency-type', function(req, res) {
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

  router.post('/legacy/sprint21d/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/legacy/sprint21d/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/legacy/sprint21d/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('shared-payment');
        } else {
          res.redirect('full-payment');
        }
      });

// Who (Care home during Q week)

router.post('/legacy/sprint21d/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/legacy/sprint21d/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});


  //    } else if (something === something) {


  module.exports = router;
