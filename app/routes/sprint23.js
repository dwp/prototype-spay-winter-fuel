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


// Pension credit/State Pension



  // Date of birth

  router.post('/legacy/sprint23/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint23/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint23/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint23/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });

  // Benefits SP or PC?

  router.post('/legacy/sprint23/receiving-sp', function(req, res) {
    if ( req.body['benefit'] === 'sp' ) {
      res.redirect('residency-type');
    } else if ( req.body['benefit'] === 'pc' ) {
      res.redirect('full-payment');
    } else if ( req.body['benefit'] === 'both' ) {
      res.redirect('full-payment');
    } else if ( req.body['benefit'] === 'none' ) {
      res.redirect('claimed');
    }
  });



  // Benefits

router.post('/legacy/sprint23/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/legacy/sprint23/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint23b/find');
}
});



  // Residency type SP

  router.post('/legacy/sprint23/residency-type', function(req, res) {
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

  // Residency type PC

  router.post('/legacy/sprint23/residency-type-pc', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital-pc');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home-pc');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Hospital

  router.post('/legacy/sprint23/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/legacy/sprint23/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/legacy/sprint23/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Care or nursing home PC

      router.post('/legacy/sprint23/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('who-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/legacy/sprint23/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/legacy/sprint23/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/legacy/sprint23/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('live-with-carehome');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/legacy/sprint23/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint23/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/legacy/sprint23/find-1', (req, res) => {
        res.redirect('/legacy/sprint23/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/legacy/sprint23/find-result-1', (req, res) => {
        res.redirect('/legacy/sprint23/security-1')
      })
      ;

      router.post('/legacy/sprint23/security-1', (req, res) => {
        res.redirect('/legacy/sprint23/postcode')
      })
      ;

      router.post('/legacy/sprint23/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/legacy/sprint23/poa-1', (req, res) => {
        res.redirect('/legacy/sprint23/check-1')
      })
      ;

      router.post('/legacy/sprint23/check-1', (req, res) => {
        res.redirect('/legacy/sprint23/declaration')
      })
      ;

      // Full payment

      router.post('/legacy/sprint23/full-payment', (req, res) => {
        res.redirect('/legacy/sprint23/find')
      })
      ;

      // Find a person

      router.post('/legacy/sprint23/find', (req, res) => {
        res.redirect('/legacy/sprint23/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint23/find-result', (req, res) => {
        res.redirect('/legacy/sprint23/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint23/security', (req, res) => {
        res.redirect('/legacy/sprint23/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint23/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/legacy/sprint23/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Current address

router.post('/legacy/sprint23/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('poa');
  } else {
    res.redirect('postcode');
  }
});


// Power of attorney

router.post('/legacy/sprint23/poa', (req, res) => {
  res.redirect('/legacy/sprint23/check')
})
;

// Postcode underpayment

router.post('/legacy/sprint23/postcode', (req, res) => {
  res.redirect('/legacy/sprint23/select-address')
})
;

// Postcode overpayment

router.post('/legacy/sprint23/postcode-1', (req, res) => {
  res.redirect('/legacy/sprint23/select-address-1')
})
;

// Check

router.post('/legacy/sprint23/postcode', (req, res) => {
  res.redirect('/legacy/sprint23/select-address')
})
;

// Select address to move date

router.post('/legacy/sprint23/select-address', (req, res) => {
  res.redirect('/legacy/sprint23/move-date')
})
;

// Select address to move date

router.post('/legacy/sprint23/select-address-1', (req, res) => {
  res.redirect('/legacy/sprint23/move-date-1')
})
;

// Move date to power of attorney

router.post('/legacy/sprint23/move-date', (req, res) => {
  res.redirect('/legacy/sprint23/poa')
})
;

// Move date to power of attorney 2

router.post('/legacy/sprint23/move-date-1', (req, res) => {
  res.redirect('/legacy/sprint23/poa-1')
})
;


// Occupants

router.post('/legacy/sprint23/occupants', (req, res) => {
  res.redirect('/legacy/sprint23/check')
})
;

// Check to declaration

router.post('/legacy/sprint23/check', (req, res) => {
  res.redirect('/legacy/sprint23/declaration')
})
;

// Check to declaration

router.post('/legacy/sprint23/declaration', (req, res) => {
  res.redirect('/legacy/sprint23/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
