const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


// Pension credit/State Pension
router.post('/legacy/sprint21/receiving-sp', (req, res) => {
  if (req.body.pension.includes('pc')) {
    res.redirect('/legacy/sprint21/full-payment')
  }
  else if (req.body.pension.includes('sp')) {
    res.redirect('/legacy/sprint21/residency-type');
  } else {
    res.redirect('/legacy/sprint21/claimed')
  }
})

  // Date of birth

  router.post('/legacy/sprint21/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint21/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint21/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint21/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/legacy/sprint21/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});



  // Residency type

  router.post('/legacy/sprint21/residency-type', function(req, res) {
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

  router.post('/legacy/sprint21/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/legacy/sprint21/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/legacy/sprint21/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('live-with-carehome');
        } else {
          res.redirect('full-payment');
        }
      });

      // Shared payment to ref

      router.post('/legacy/sprint21/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint21/find')
      })
      ;

      // Full payment

      router.post('/legacy/sprint21/full-payment', (req, res) => {
        res.redirect('/legacy/sprint21/find')
      })
      ;

      // Find a person

      router.post('/legacy/sprint21/find', (req, res) => {
        res.redirect('/legacy/sprint21/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint21/find-result', (req, res) => {
        res.redirect('/legacy/sprint21/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint21/security', (req, res) => {
        res.redirect('/legacy/sprint21/address-check')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint21/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/legacy/sprint21/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Current address

router.post('/legacy/sprint21/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('poa');
  } else {
    res.redirect('postcode');
  }
});


// Power of attorney

router.post('/legacy/sprint21/poa', (req, res) => {
  res.redirect('/legacy/sprint21/check')
})
;

// Postcode

router.post('/legacy/sprint21/postcode', (req, res) => {
  res.redirect('/legacy/sprint21/select-address')
})
;

// Check

router.post('/legacy/sprint21/postcode', (req, res) => {
  res.redirect('/legacy/sprint21/select-address')
})
;

// Select address to check

router.post('/legacy/sprint21/select-address', (req, res) => {
  res.redirect('/legacy/sprint21/move-date')
})
;

// Select address to check

router.post('/legacy/sprint21/move-date', (req, res) => {
  res.redirect('/legacy/sprint21/poa')
})
;


// Occupants

router.post('/legacy/sprint21/occupants', (req, res) => {
  res.redirect('/legacy/sprint21/check')
})
;

// Check to declaration

router.post('/legacy/sprint21/check', (req, res) => {
  res.redirect('/legacy/sprint21/declaration')
})
;

// Check to declaration

router.post('/legacy/sprint21/declaration', (req, res) => {
  res.redirect('/legacy/sprint21/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
