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

router.post('/current/eligibility-checker-expect/start-page', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/warning-page')
})
;

router.post('/current/eligibility-checker-expect/warning-page', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/date-of-birth')
})
;



  // Date of birth

  router.post('/current/eligibility-checker-expect/date-of-birth', function(req, res) {
    if ( req.body['dob-year'] > 1954) {
      res.redirect('too-young');
    } else {
      res.redirect('residency');
    }
  });

  // Date of birth

  router.post('/current/eligibility-checker-expect/too-young', (req, res) => {
    res.redirect('/current/eligibility-checker-expect/check-eligibility')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/current/eligibility-checker-expect/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/current/eligibility-checker-expect/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-pc');
    } else {
      res.redirect('overseas');
    }
  });

  // living overseas

  router.post('/current/eligibility-checker-expect/overseas', (req, res) => {
    res.redirect('/current/eligibility-checker-expect/check-eligibility')
  })
  ;


  // Benefits PC?

  router.post('/current/eligibility-checker-expect/receiving-pc', function(req, res) {
    if ( req.body['pension-credit'] === 'yes' ) {
      res.redirect('residency-type');
    } else if ( req.body['pension-credit'] === 'no' ) {
      res.redirect('receiving-sp');
    }
  });

  // Benefits SP?

  router.post('/current/eligibility-checker-expect/receiving-sp', function(req, res)  {
    if ( req.body['benefit'] === 'no' ) {
      res.redirect('immigration-control');
    } else {
      res.redirect('residency-type');
    }
  });

// immigration control?

router.post('/current/eligibility-checker-expect/immigration-control', function(req, res) {
  if ( req.body['immigration-control'] === 'yes' ) {
    res.redirect('not-qualify-immig-control');
  } else {
    res.redirect('had-winter-fuel-before');
  }
  });

router.post('/current/eligibility-checker-expect/had-winter-fuel-before', function(req, res) {
  if ( req.body['had-winter-fuel-before'] === 'yes' ) {
    res.redirect('deferred-sp');
  } else {
    res.redirect('residency-type');
  }
  });

router.post('/current/eligibility-checker-expect/deferred-sp', function(req, res) {
  if ( req.body['deferred-sp'] === 'yes' ) {
    res.redirect('claimed-since-deferred');
  } else {
    res.redirect('residency-type');
  }
  });

router.post('/current/eligibility-checker-expect/claimed-since-deferred', function(req, res) {
  res.redirect('/current/eligibility-checker-expect/residency-type')
})
;

// Query

router.post('/current/eligibility-checker-expect/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/legacy/sprint29b/find');
}
});



  // Residency type

  router.post('/current/eligibility-checker-expect/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-fixed-address');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      if ( req.session.data['pension-credit'] === 'yes' ) {
        res.redirect('other-person-gets-pc');
      } else {
        res.redirect('who');
      }
    }
  });

 

  // If lives at home, check if anyone else gets PC

  router.post('/current/eligibility-checker-expect/other-person-gets-pc', function(req, res) {
    if ( req.body['other-person-pension-credit'] === 'yes' ) {
      res.redirect('pension-credit-other-person');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Hospital

  router.post('/current/eligibility-checker-expect/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'no' ) {
      if ( req.session.data['pension-credit'] === 'yes' ) {
        res.redirect('pension-credit');
      } else {
        res.redirect('who');
      }}
    else {
      res.redirect('hospital-over-year');
    }
  });

  

    // Care or nursing home 13 weeks

    router.post('/current/eligibility-checker-expect/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'no' ) {
        if ( req.session.data['pension-credit'] === 'yes' ) {
          res.redirect('care-home-shared');
        } else {
          res.redirect('care-home-full');
        }}
      else {
        res.redirect('care-home-over-pc');
      }
    
    });


    // Care or nursing home PC 13 weeks

      router.post('/current/eligibility-checker-expect/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('shared-payment-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/current/eligibility-checker-expect/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with-over-80');
        } else {
          res.redirect('full-payment');
        }
      });

     

      router.post('/current/eligibility-checker-expect/living-with-over-80', function(req, res) {
          if ( req.body['live-with-age-over-80'] === 'yes' ) {
            res.redirect('shared-with-over-80');
          } else {
            res.redirect('shared-with-under-80');
          }
        });

     

      // Who (Living with)

        router.post('/current/eligibility-checker-expect/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/current/eligibility-checker-expect/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('living-with-over-80');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/current/eligibility-checker-expect/shared-payment', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/current/eligibility-checker-expect/find-1', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/current/eligibility-checker-expect/find-result-1', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/security-1')
      })
      ;

      router.post('/current/eligibility-checker-expect/security-1', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/postcode')
      })
      ;

      router.post('/current/eligibility-checker-expect/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/current/eligibility-checker-expect/poa-1', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/check-1')
      })
      ;

      router.post('/current/eligibility-checker-expect/check-1', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/declaration')
      })
      ;

      // Full payment

      router.post('/current/eligibility-checker-expect/full-payment', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/check-eligibility')
      })
      ;

      // Find a person

      router.post('/current/eligibility-checker-expect/find', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/find-result')
      })
      ;

      // Found person to security

      router.post('/current/eligibility-checker-expect/find-result', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/security')
      })
      ;

      // Found person to security

      router.post('/current/eligibility-checker-expect/security', (req, res) => {
        res.redirect('/current/eligibility-checker-expect/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/current/eligibility-checker-expect/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/current/eligibility-checker-expect/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/current/eligibility-checker-expect/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/current/eligibility-checker-expect/poa', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/check')
})
;

// Postcode underpayment

router.post('/current/eligibility-checker-expect/postcode', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/select-address')
})
;

// Postcode overpayment

router.post('/current/eligibility-checker-expect/postcode-1', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/select-address-1')
})
;

// Check

router.post('/current/eligibility-checker-expect/postcode', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/select-address')
})
;

// Select address to move date

router.post('/current/eligibility-checker-expect/select-address', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/move-date')
})
;

// Select address to move date

router.post('/current/eligibility-checker-expect/select-address-1', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/move-date-1')
})
;

// Move date to power of attorney

router.post('/current/eligibility-checker-expect/move-date', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/poa')
})
;

// Move date to power of attorney 2

router.post('/current/eligibility-checker-expect/move-date-1', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/poa-1')
})
;


// Occupants

router.post('/current/eligibility-checker-expect/occupants', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/check')
})
;

// Check to declaration

router.post('/current/eligibility-checker-expect/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/current/eligibility-checker-expect/declaration', (req, res) => {
  res.redirect('/current/eligibility-checker-expect/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;
