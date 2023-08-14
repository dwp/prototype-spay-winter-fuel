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

// Start screen

router.post('/legacy/sprint49b/check-eligibility', (req, res) => {
  res.redirect('/legacy/sprint49b/date-of-birth')
})
;

  // Date of birth

  router.post('/legacy/sprint49b/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint49b/residency')
  })
  ;

  // Date of birth

  router.post('/legacy/sprint49b/too-young', (req, res) => {
    res.redirect('/legacy/sprint49b/check-eligibility')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/legacy/sprint49b/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/legacy/sprint49b/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-pc');
    } else {
      res.redirect('overseas');
    }
  });

  // living overseas

  router.post('/legacy/sprint49b/overseas', (req, res) => {
    res.redirect('/legacy/sprint49b/check-eligibility')
  })
  ;


  // Benefits PC?

  router.post('/legacy/sprint49b/receiving-pc', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['pension-credit'] === 'no' ) {
      res.redirect('receiving-sp');
    }
  });

  // Benefits SP?

  router.post('/legacy/sprint49b/receiving-sp', (req, res) =>  {
      res.redirect('residency-type')
  });


// Query

router.post('/legacy/sprint49b/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type SP

  router.post('/legacy/sprint49b/residency-type', function(req, res) {
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

  router.post('/legacy/sprint49b/residency-type-pc', function(req, res) {
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

  router.post('/legacy/sprint49b/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/legacy/sprint49b/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/legacy/sprint49b/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('care-home-full');
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/legacy/sprint49b/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('shared-payment-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/legacy/sprint49b/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/legacy/sprint49b/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/legacy/sprint49b/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('shared-payment');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/legacy/sprint49b/shared-payment', (req, res) => {
        res.redirect('/legacy/sprint49b/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/legacy/sprint49b/find-1', (req, res) => {
        res.redirect('/legacy/sprint49b/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/legacy/sprint49b/find-result-1', (req, res) => {
        res.redirect('/legacy/sprint49b/security-1')
      })
      ;

      router.post('/legacy/sprint49b/security-1', (req, res) => {
        res.redirect('/legacy/sprint49b/postcode')
      })
      ;

      router.post('/legacy/sprint49b/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/legacy/sprint49b/poa-1', (req, res) => {
        res.redirect('/legacy/sprint49b/check-1')
      })
      ;

      router.post('/legacy/sprint49b/check-1', (req, res) => {
        res.redirect('/legacy/sprint49b/declaration')
      })
      ;

      // Full payment

      router.post('/legacy/sprint49b/full-payment', (req, res) => {
        res.redirect('/legacy/sprint49b/check-eligibility')
      })
      ;

      // Find a person

      router.post('/legacy/sprint49b/find', (req, res) => {
        res.redirect('/legacy/sprint49b/find-result')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint49b/find-result', (req, res) => {
        res.redirect('/legacy/sprint49b/security')
      })
      ;

      // Found person to security

      router.post('/legacy/sprint49b/security', (req, res) => {
        res.redirect('/legacy/sprint49b/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/legacy/sprint49b/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/legacy/sprint49b/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/legacy/sprint49b/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/legacy/sprint49b/poa', (req, res) => {
  res.redirect('/legacy/sprint49b/check')
})
;

// Postcode underpayment

router.post('/legacy/sprint49b/postcode', (req, res) => {
  res.redirect('/legacy/sprint49b/select-address')
})
;

// Postcode overpayment

router.post('/legacy/sprint49b/postcode-1', (req, res) => {
  res.redirect('/legacy/sprint49b/select-address-1')
})
;

// Check

router.post('/legacy/sprint49b/postcode', (req, res) => {
  res.redirect('/legacy/sprint49b/select-address')
})
;

// Select address to move date

router.post('/legacy/sprint49b/select-address', (req, res) => {
  res.redirect('/legacy/sprint49b/move-date')
})
;

// Select address to move date

router.post('/legacy/sprint49b/select-address-1', (req, res) => {
  res.redirect('/legacy/sprint49b/move-date-1')
})
;

// Move date to power of attorney

router.post('/legacy/sprint49b/move-date', (req, res) => {
  res.redirect('/legacy/sprint49b/poa')
})
;

// Move date to power of attorney 2

router.post('/legacy/sprint49b/move-date-1', (req, res) => {
  res.redirect('/legacy/sprint49b/poa-1')
})
;


// Occupants

router.post('/legacy/sprint49b/occupants', (req, res) => {
  res.redirect('/legacy/sprint49b/check')
})
;

// Check to declaration

router.post('/legacy/sprint49b/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/legacy/sprint49b/declaration', (req, res) => {
  res.redirect('/legacy/sprint49b/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
