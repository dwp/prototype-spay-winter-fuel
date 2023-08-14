const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint63f/comparison-filter', function(req, res) {
  if ( req.body['filter-by'] === 'file-type' ) {
    res.redirect('comparison-filter-file');
  } else {
    res.redirect('comparison-filter-eligibility');
  }
  });
  ;

  router.post('/legacy/sprint63f/comparison-filter-eligibility', function(req, res) {
  if ( req.body['eligibility'] === 'eligible' ) {
    res.redirect('comparison-filter-eligible');
  } else {
    res.redirect('comparison-filter-ineligible');
  }
  });
  ;

  router.post('/legacy/sprint63f/comparison-filter-eligible', (req, res) => {
    res.redirect('/legacy/sprint63f/results-eligible')
  })
  ;


//
  router.post('/legacy/sprint63f/comparison-filter-ineligible', (req, res) => {
    res.redirect('/legacy/sprint63f/results-ineligible')
  })
  ;


// Scenario 1

  router.post('/legacy/sprint63f/verify-address', (req, res) => {
    res.redirect('/legacy/sprint63f/address-1')
  })
  ;

  router.post('/legacy/sprint63f/address-1', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/legacy/sprint63f/verify-address-manual-1');
  } else {
    res.redirect('/legacy/sprint63f/verify-address-fixed');
  }
  });
  ;

  router.post('/legacy/sprint63f/verify-address-manual-1', (req, res) => {
    res.redirect('/legacy/sprint63f/address-1b')
  })
  ;

  router.post('/legacy/sprint63f/address-1b', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/legacy/sprint63f/verify-address-not-fixed');
  } else {
    res.redirect('/legacy/sprint63f/verify-address-fixed');
  }
  });
  ;


  router.post('/legacy/sprint63f/return-queue', (req, res) => {
    res.redirect('/legacy/sprint63f/verify-address')
  })
  ;


// Scenario 2

    router.post('/legacy/sprint63f/verify-address-fixed', (req, res) => {
      res.redirect('/legacy/sprint63f/address-2')
    })
    ;

    router.post('/legacy/sprint63f/verify-address-not-fixed', (req, res) => {
      res.redirect('/legacy/sprint63f/address-2')
    })
    ;


    router.post('/legacy/sprint63f/address-2', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/legacy/sprint63f/verify-address-manual-2');
    } else {
      res.redirect('/legacy/sprint63f/verify-address-fixed-2');
    }
    });
    ;

    router.post('/legacy/sprint63f/verify-address-manual-2', (req, res) => {
      res.redirect('/legacy/sprint63f/address-2b')
    })
    ;

    router.post('/legacy/sprint63f/address-2b', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/legacy/sprint63f/verify-address-not-fixed-2');
    } else {
      res.redirect('/legacy/sprint63f/verify-address-fixed-2');
    }
    });
    ;


// Scenario 3

router.post('/legacy/sprint63f/verify-address-fixed-2', (req, res) => {
  res.redirect('/legacy/sprint63f/address-3')
})
;

router.post('/legacy/sprint63f/verify-address-not-fixed-2', (req, res) => {
  res.redirect('/legacy/sprint63f/address-3')
})
;


router.post('/legacy/sprint63f/address-3', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/legacy/sprint63f/verify-address-manual-3');
} else {
  res.redirect('/legacy/sprint63f/verify-address-fixed-3');
}
});
;

router.post('/legacy/sprint63f/verify-address-manual-3', (req, res) => {
  res.redirect('/legacy/sprint63f/address-3b')
})
;

router.post('/legacy/sprint63f/address-3b', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/legacy/sprint63f/verify-address-not-fixed-3');
} else {
  res.redirect('/legacy/sprint63f/verify-address-fixed-3');
}
});
;

// Scenario 4
    router.post('/legacy/sprint63f/verify-address-fixed-3', (req, res) => {
      res.redirect('/legacy/sprint63f/address-4')
    })
    ;

    router.post('/legacy/sprint63f/verify-address-not-fixed-3', (req, res) => {
      res.redirect('/legacy/sprint63f/address-4')
    })
    ;

    router.post('/legacy/sprint63f/address-4', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/legacy/sprint63f/verify-address-manual-4');
    } else {
      res.redirect('/legacy/sprint63f/verify-address-fixed-4');
    }
    });
    ;

    router.post('/legacy/sprint63f/verify-address-manual-4', (req, res) => {
      res.redirect('/legacy/sprint63f/address-4b')
    })
    ;

    router.post('/legacy/sprint63f/address-4b', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/legacy/sprint63f/verify-address-not-fixed-4');
    } else {
      res.redirect('/legacy/sprint63f/verify-address-fixed-4');
    }
    });
    ;

  // See cases, eligible or ineligible

  router.post('/legacy/sprint63f/comparison-filter-eligibility', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/legacy/sprint63f/comparison-filter-eligible')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/legacy/sprint63f/comparison-filter-ineligible');
    } else {
      res.redirect('/legacy/sprint23/deferral')
    }
  })

  // GySP filter

  router.post('/legacy/sprint63f/gysp-filter', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/legacy/sprint63f/gysp-eligible-filter')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/legacy/sprint63f/gysp-ineligible-filter');
    } else {
      res.redirect('/legacy/sprint23/deferral')
    }
  })


  // GySP filter to results
  router.post('/legacy/sprint63f/gysp-eligible-filter', (req, res) => {
    res.redirect('/legacy/sprint63f/gysp-results')
  })
  ;

  // Find case to find result
  router.post('/legacy/sprint63f/find-case', (req, res) => {
    res.redirect('/legacy/sprint63f/overview')
  })
  ;



    // Payments to stop payments
    router.post('/legacy/sprint63f/payments', (req, res) => {
      res.redirect('/legacy/sprint63f/stop-payments')
    })
    ;

// Letters to stop letters
router.post('/legacy/sprint63f/letters', (req, res) => {
  res.redirect('/legacy/sprint63f/stop-letters')
})
;


  module.exports = router;
