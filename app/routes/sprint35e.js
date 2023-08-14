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


//-----STANDARD JOURNEY-----


// Start to DOB

router.post('/legacy/sprint35e/start', (req, res) => {
  res.redirect('/legacy/sprint35e/date-of-birth')
})
;


  // Date of birth

  router.post('/legacy/sprint35e/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint35e/residency')
  })
  ;


  // Living

  router.post('/legacy/sprint35e/residency', (req, res) => {
    res.redirect('/legacy/sprint35e/residency-type')
  })
  ;


  // Residency type SP

  router.post('/legacy/sprint35e/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('benefits');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison-pre');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Pension Credit

  router.post('/legacy/sprint35e/pension-credit', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('pension-credit-payment');
    } else {
      res.redirect('state-pension');
    }
  });


  // State Pension

  router.post('/legacy/sprint35e/state-pension', (req, res) => {
    res.redirect('/legacy/sprint35e/who')
  })
  ;


  // Living with anybody

  router.post('/legacy/sprint35e/who', function(req, res) {
    if ( req.body['who-do-you-live-with'] === 'yes' ) {
      res.redirect('living-with');
    } else {
      res.redirect('full-payment');
    }
  });


  // Living with (age)

    router.post('/legacy/sprint35e/living-with', function(req, res) {
      if ( req.body['live-with-age'] === 'yes' ) {
        res.redirect('shared-payment');
      } else {
        res.redirect('full-payment');
      }
    });



//-----HOSPITAL-----

// Hospital

router.post('/legacy/sprint35e/hospital', function(req, res) {
  if ( req.body['hospital-admission'] === 'yes' ) {
    res.redirect('pension-credit');
  } else {
    res.redirect('hospital-pre');
  }
});



//-----HOMELESS-----

router.post('/legacy/sprint35e/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('full-payment');
  } else {
    res.redirect('full-payment-no-benefits');
  }
});



//-----CAREHOME-----

router.post('/legacy/sprint35e/care-home', function(req, res) {
  if ( req.body['care-home-admission'] === 'yes' ) {
    res.redirect('pension-credit');
  } else {
    res.redirect('pension-credit-ch');
  }
});


router.post('/legacy/sprint35e/pension-credit-ch', function(req, res) {
  if ( req.body['pension-credit-ch'] === 'yes' ) {
    res.redirect('care-home-over-pc');
  } else {
    res.redirect('state-pension');
  }
});


// full payment to find someone
router.post('/legacy/sprint35e/full-payment', (req, res) => {
  res.redirect('/legacy/sprint39c/find')
})
;

// shared payment to find someone
router.post('/legacy/sprint35e/shared-payment', (req, res) => {
  res.redirect('/legacy/sprint39c/find')
})
;



  module.exports = router;
