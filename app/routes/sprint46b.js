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

  // Date of birth

  router.post('/legacy/sprint46b/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint46b/residency')
  })
  ;


  // Living
  router.post('/legacy/sprint46b/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('outside-UK');
    }
  });


  // Residency type SP

  router.post('/legacy/sprint46b/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('benefits');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison-pre');
    } else {
      res.redirect('who');
    }
  });


  // Pension Credit

  router.post('/legacy/sprint46b/pension-credit', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('pension-credit-payment');
    } else {
      res.redirect('state-pension');
    }
  });


  // State Pension

  router.post('/legacy/sprint46b/state-pension', function(req, res) {
    if ( req.body['state-pension'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('make-a-claim');
    }
  });
  // Living with anybody

  router.post('/legacy/sprint46b/who', function(req, res) {
    if ( req.body['who-do-you-live-with'] === 'yes' ) {
      res.redirect('living-with');
    } else {
      res.redirect('full-payment');
    }
  });


  // Living with (age)

    router.post('/legacy/sprint46b/living-with', function(req, res) {
      if ( req.body['live-with-age'] === 'yes' ) {
        res.redirect('living-with-over-80');
      } else {
        res.redirect('full-payment');
      }
    });

    router.post('/legacy/sprint46b/living-with-over-80', function(req, res) {
      if ( req.body['live-with-over-80'] === 'yes' ) {
        res.redirect('shared-payment-over-80');
      } else {
        res.redirect('shared-payment');
      }
    });

//-----HOSPITAL-----

// Hospital

router.post('/legacy/sprint46b/hospital', function(req, res) {
  if ( req.body['hospital-admission'] === 'yes' ) {
    res.redirect('pension-credit');
  } else {
    res.redirect('hospital-pre');
  }
});



//-----HOMELESS-----

router.post('/legacy/sprint46b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('full-payment');
  } else {
    res.redirect('full-payment-no-benefits');
  }
});



//-----CAREHOME-----

router.post('/legacy/sprint46b/care-home', function(req, res) {
  if ( req.body['care-home-admission'] === 'yes' ) {
    res.redirect('pension-credit');
  } else {
    res.redirect('pension-credit-ch');
  }
});


router.post('/legacy/sprint46b/pension-credit-ch', function(req, res) {
  if ( req.body['pension-credit-ch'] === 'yes' ) {
    res.redirect('care-home-over-pc');
  } else {
    res.redirect('state-pension');
  }
});


// full payment to find someone
router.post('/legacy/sprint46b/full-payment', (req, res) => {
  res.redirect('/legacy/sprint39c/find')
})
;

// shared payment to find someone
router.post('/legacy/sprint46b/shared-payment', (req, res) => {
  res.redirect('/legacy/sprint39c/find')
})
;



  module.exports = router;
