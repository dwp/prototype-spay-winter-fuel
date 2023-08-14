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

  router.post('/legacy/sprint32d/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint32d/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint32d/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint32d/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });

  // Benefits SP or PC?

  router.post('/legacy/sprint32d/receiving-sp', function(req, res) {
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

router.post('/legacy/sprint32d/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/legacy/sprint32d/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type SP

  router.post('/legacy/sprint32d/residency-type', function(req, res) {
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

  router.post('/legacy/sprint32d/residency-type-pc', function(req, res) {
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

  router.post('/legacy/sprint32d/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/legacy/sprint32d/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/legacy/sprint32d/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('care-home-full');
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/legacy/sprint32d/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('who-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/legacy/sprint32d/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/legacy/sprint32d/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/legacy/sprint32d/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('shared-payment');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/legacy/sprint32d/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint32d/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/legacy/sprint32d/find-1', (req, res) => {
        res.redirect('/legacy/sprint32d/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/legacy/sprint32d/find-result-1', (req, res) => {
        res.redirect('/legacy/sprint32d/security-1')
      })
      ;

      router.post('/legacy/sprint32d/security-1', (req, res) => {
        res.redirect('/legacy/sprint32d/postcode')
      })
      ;

      router.post('/legacy/sprint32d/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/legacy/sprint32d/poa-1', (req, res) => {
        res.redirect('/legacy/sprint32d/check-1')
      })
      ;

      router.post('/legacy/sprint32d/check-1', (req, res) => {
        res.redirect('/legacy/sprint32d/declaration')
      })
      ;

      // Full payment

      router.post('/legacy/sprint32d/full-payment', (req, res) => {
        res.redirect('/legacy/sprint32d/find')
      })
      ;

      // Find a person

      router.post('/legacy/sprint32d/find', (req, res) => {
        res.redirect('/legacy/sprint32d/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint32d/find-result', (req, res) => {
        res.redirect('/legacy/sprint32d/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint32d/security', (req, res) => {
        res.redirect('/legacy/sprint32d/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint32d/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/legacy/sprint32d/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/legacy/sprint32d/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/legacy/sprint32d/poa', (req, res) => {
  res.redirect('/legacy/sprint32d/check')
})
;

// Postcode underpayment

router.post('/legacy/sprint32d/postcode', (req, res) => {
  res.redirect('/legacy/sprint32d/select-address')
})
;

// Postcode overpayment

router.post('/legacy/sprint32d/postcode-1', (req, res) => {
  res.redirect('/legacy/sprint32d/select-address-1')
})
;

// Check

router.post('/legacy/sprint32d/postcode', (req, res) => {
  res.redirect('/legacy/sprint32d/select-address')
})
;

// Select address to move date

router.post('/legacy/sprint32d/select-address', (req, res) => {
  res.redirect('/legacy/sprint32d/move-date')
})
;

// Select address to move date

router.post('/legacy/sprint32d/select-address-1', (req, res) => {
  res.redirect('/legacy/sprint32d/move-date-1')
})
;

// Move date to power of attorney

router.post('/legacy/sprint32d/move-date', (req, res) => {
  res.redirect('/legacy/sprint32d/poa')
})
;

// Move date to power of attorney 2

router.post('/legacy/sprint32d/move-date-1', (req, res) => {
  res.redirect('/legacy/sprint32d/poa-1')
})
;


// Occupants

router.post('/legacy/sprint32d/occupants', (req, res) => {
  res.redirect('/legacy/sprint32d/check')
})
;

// Check to declaration

router.post('/legacy/sprint32d/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/legacy/sprint32d/declaration', (req, res) => {
  res.redirect('/legacy/sprint32d/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
