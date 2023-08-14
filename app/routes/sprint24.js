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

  router.post('/legacy/sprint24/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint24/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint24/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint24/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });

  // Benefits SP or PC?

  router.post('/legacy/sprint24/receiving-sp', function(req, res) {
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

router.post('/legacy/sprint24/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/legacy/sprint24/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type SP

  router.post('/legacy/sprint24/residency-type', function(req, res) {
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

  router.post('/legacy/sprint24/residency-type-pc', function(req, res) {
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

  router.post('/legacy/sprint24/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/legacy/sprint24/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/legacy/sprint24/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('care-home-full');
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/legacy/sprint24/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('who-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/legacy/sprint24/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/legacy/sprint24/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/legacy/sprint24/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('shared-payment');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/legacy/sprint24/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint24/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/legacy/sprint24/find-1', (req, res) => {
        res.redirect('/legacy/sprint24/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/legacy/sprint24/find-result-1', (req, res) => {
        res.redirect('/legacy/sprint24/security-1')
      })
      ;

      router.post('/legacy/sprint24/security-1', (req, res) => {
        res.redirect('/legacy/sprint24/postcode')
      })
      ;

      router.post('/legacy/sprint24/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/legacy/sprint24/poa-1', (req, res) => {
        res.redirect('/legacy/sprint24/check-1')
      })
      ;

      router.post('/legacy/sprint24/check-1', (req, res) => {
        res.redirect('/legacy/sprint24/declaration')
      })
      ;

      // Full payment

      router.post('/legacy/sprint24/full-payment', (req, res) => {
        res.redirect('/legacy/sprint24/find')
      })
      ;

      // Find a person

      router.post('/legacy/sprint24/find', (req, res) => {
        res.redirect('/legacy/sprint24/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint24/find-result', (req, res) => {
        res.redirect('/legacy/sprint24/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint24/security', (req, res) => {
        res.redirect('/legacy/sprint24/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint24/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/legacy/sprint24/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/legacy/sprint24/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/legacy/sprint24/poa', (req, res) => {
  res.redirect('/legacy/sprint24/check')
})
;

// Postcode underpayment

router.post('/legacy/sprint24/postcode', (req, res) => {
  res.redirect('/legacy/sprint24/select-address')
})
;

// Postcode overpayment

router.post('/legacy/sprint24/postcode-1', (req, res) => {
  res.redirect('/legacy/sprint24/select-address-1')
})
;

// Check

router.post('/legacy/sprint24/postcode', (req, res) => {
  res.redirect('/legacy/sprint24/select-address')
})
;

// Select address to move date

router.post('/legacy/sprint24/select-address', (req, res) => {
  res.redirect('/legacy/sprint24/move-date')
})
;

// Select address to move date

router.post('/legacy/sprint24/select-address-1', (req, res) => {
  res.redirect('/legacy/sprint24/move-date-1')
})
;

// Move date to power of attorney

router.post('/legacy/sprint24/move-date', (req, res) => {
  res.redirect('/legacy/sprint24/poa')
})
;

// Move date to power of attorney 2

router.post('/legacy/sprint24/move-date-1', (req, res) => {
  res.redirect('/legacy/sprint24/poa-1')
})
;


// Occupants

router.post('/legacy/sprint24/occupants', (req, res) => {
  res.redirect('/legacy/sprint24/check')
})
;

// Check to declaration

router.post('/legacy/sprint24/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/legacy/sprint24/declaration', (req, res) => {
  res.redirect('/legacy/sprint24/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
