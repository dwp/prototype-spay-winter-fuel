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

  // Date of birth

  router.post('/legacy/sprint24b/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint24b/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint24b/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint24b/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });

  // Benefits SP or PC?

  router.post('/legacy/sprint24b/receiving-sp', function(req, res) {
    if ( req.body['benefit'] === 'sp' ) {
      res.redirect('residency-type');
    } else if ( req.body['benefit'] === 'pc' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['benefit'] === 'both' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['benefit'] === 'none' ) {
      res.redirect('deferral');
    }
  });



  // Benefits

router.post('/legacy/sprint24b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/legacy/sprint24b/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint24b/find');
}
});



  // Residency type SP

  router.post('/legacy/sprint24b/residency-type', function(req, res) {
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

  router.post('/legacy/sprint24b/residency-type-pc', function(req, res) {
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

  router.post('/legacy/sprint24b/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/legacy/sprint24b/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/legacy/sprint24b/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-shared');
      }
    });

    // Care or nursing home PC

      router.post('/legacy/sprint24b/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('care-home-pc-full');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/legacy/sprint24b/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/legacy/sprint24b/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/legacy/sprint24b/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('over80-shared');
          } else {
            res.redirect('full-payment');
          }
        });

        // Living with (over 80?)

          router.post('/legacy/sprint24b/over80-shared', function(req, res) {
            if ( req.body['over80'] === 'yes' ) {
              res.redirect('shared-payment-over80');
            } else {
              res.redirect('shared-payment');
            }
          });

      // Shared payment to overpayment find

      router.post('/legacy/sprint24b/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint24b/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/legacy/sprint24b/find-1', (req, res) => {
        res.redirect('/legacy/sprint24b/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/legacy/sprint24b/find-result-1', (req, res) => {
        res.redirect('/legacy/sprint24b/security-1')
      })
      ;

      router.post('/legacy/sprint24b/security-1', (req, res) => {
        res.redirect('/legacy/sprint24b/postcode')
      })
      ;

      router.post('/legacy/sprint24b/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/legacy/sprint24b/poa-1', (req, res) => {
        res.redirect('/legacy/sprint24b/check-1')
      })
      ;

      router.post('/legacy/sprint24b/check-1', (req, res) => {
        res.redirect('/legacy/sprint24b/declaration')
      })
      ;

      // Full payment

      router.post('/legacy/sprint24b/full-payment', (req, res) => {
        res.redirect('/legacy/sprint24b/find')
      })
      ;

      // Find a person

      router.post('/legacy/sprint24b/find', (req, res) => {
        res.redirect('/legacy/sprint24b/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint24b/find-result', (req, res) => {
        res.redirect('/legacy/sprint24b/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint24b/security', (req, res) => {
        res.redirect('/legacy/sprint24b/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint24b/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/legacy/sprint24b/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/legacy/sprint24b/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});
// Current address

router.post('/legacy/sprint24b/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('poa');
  } else {
    res.redirect('postcode');
  }
});


// Power of attorney

router.post('/legacy/sprint24b/poa', (req, res) => {
  res.redirect('/legacy/sprint24b/check')
})
;

// Postcode underpayment

router.post('/legacy/sprint24b/postcode', (req, res) => {
  res.redirect('/legacy/sprint24b/select-address')
})
;

// Postcode overpayment

router.post('/legacy/sprint24b/postcode-1', (req, res) => {
  res.redirect('/legacy/sprint24b/select-address-1')
})
;

// Check

router.post('/legacy/sprint24b/postcode', (req, res) => {
  res.redirect('/legacy/sprint24b/select-address')
})
;

// Select address to move date

router.post('/legacy/sprint24b/select-address', (req, res) => {
  res.redirect('/legacy/sprint24b/move-date')
})
;

// Select address to move date

router.post('/legacy/sprint24b/select-address-1', (req, res) => {
  res.redirect('/legacy/sprint24b/move-date-1')
})
;

// Move date to power of attorney

router.post('/legacy/sprint24b/move-date', (req, res) => {
  res.redirect('/legacy/sprint24b/poa')
})
;

// Move date to power of attorney 2

router.post('/legacy/sprint24b/move-date-1', (req, res) => {
  res.redirect('/legacy/sprint24b/poa-1')
})
;


// Occupants

router.post('/legacy/sprint24b/occupants', (req, res) => {
  res.redirect('/legacy/sprint24b/check')
})
;

// Check to declaration

router.post('/legacy/sprint24b/check', (req, res) => {
  res.redirect('/legacy/sprint24b/declaration')
})
;

// Check to declaration

router.post('/legacy/sprint24b/declaration', (req, res) => {
  res.redirect('/legacy/sprint24b/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
