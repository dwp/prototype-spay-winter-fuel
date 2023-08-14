const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

// Scenario 1

  router.post('/legacy/sprint35/verify-address', (req, res) => {
    res.redirect('/legacy/sprint35/address-1')
  })
  ;

  router.post('/legacy/sprint35/address-1', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/legacy/sprint35/verify-address-manual-1');
  } else {
    res.redirect('/legacy/sprint35/verify-address-fixed');
  }
  });
  ;

  router.post('/legacy/sprint35/verify-address-manual-1', (req, res) => {
    res.redirect('/legacy/sprint35/address-1b')
  })
  ;

  router.post('/legacy/sprint35/address-1b', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/legacy/sprint35/verify-address-manual-1');
  } else {
    res.redirect('/legacy/sprint35/verify-address-fixed');
  }
  });
  ;

  router.post('/legacy/sprint35/cannot-verify-1', (req, res) => {
    res.redirect('/legacy/sprint35/verify-address-not-fixed')
  })
  ;


  router.post('/legacy/sprint35/return-queue', (req, res) => {
    res.redirect('/legacy/sprint35/verify-address')
  })
  ;


// Scenario 2

    router.post('/legacy/sprint35/verify-address-fixed', (req, res) => {
      res.redirect('/legacy/sprint35/address-2')
    })
    ;

    router.post('/legacy/sprint35/verify-address-not-fixed', (req, res) => {
      res.redirect('/legacy/sprint35/address-2')
    })
    ;


    router.post('/legacy/sprint35/address-2', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/legacy/sprint35/verify-address-manual-2');
    } else {
      res.redirect('/legacy/sprint35/verify-address-fixed-2');
    }
    });
    ;

    router.post('/legacy/sprint35/verify-address-manual-2', (req, res) => {
      res.redirect('/legacy/sprint35/address-2b')
    })
    ;

    router.post('/legacy/sprint35/address-2b', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/legacy/sprint35/verify-address-manual-2');
    } else {
      res.redirect('/legacy/sprint35/verify-address-fixed-2');
    }
    });
    ;

    router.post('/legacy/sprint35/cannot-verify-2', (req, res) => {
      res.redirect('/legacy/sprint35/verify-address-not-fixed-2')
    })
    ;


// Scenario 3

router.post('/legacy/sprint35/verify-address-fixed-2', (req, res) => {
  res.redirect('/legacy/sprint35/address-3')
})
;

router.post('/legacy/sprint35/verify-address-not-fixed-2', (req, res) => {
  res.redirect('/legacy/sprint35/address-3')
})
;


router.post('/legacy/sprint35/address-3', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/legacy/sprint35/verify-address-manual-3');
} else {
  res.redirect('/legacy/sprint35/verify-address-fixed-3');
}
});
;

router.post('/legacy/sprint35/verify-address-manual-3', (req, res) => {
  res.redirect('/legacy/sprint35/address-3b')
})
;

router.post('/legacy/sprint35/address-3b', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/legacy/sprint35/verify-address-manual-3');
} else {
  res.redirect('/legacy/sprint35/verify-address-fixed-3');
}
});
;

router.post('/legacy/sprint35/cannot-verify-3', (req, res) => {
  res.redirect('/legacy/sprint35/verify-address-not-fixed-3')
})
;

// Scenario 4
    router.post('/legacy/sprint35/verify-address-fixed-3', (req, res) => {
      res.redirect('/legacy/sprint35/address-4')
    })
    ;

    router.post('/legacy/sprint35/verify-address-not-fixed-3', (req, res) => {
      res.redirect('/legacy/sprint35/address-4')
    })
    ;

    router.post('/legacy/sprint35/address-4', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/legacy/sprint35/verify-address-manual-4');
    } else {
      res.redirect('/legacy/sprint35/verify-address-fixed-4');
    }
    });
    ;

    router.post('/legacy/sprint35/verify-address-manual-4', (req, res) => {
      res.redirect('/legacy/sprint35/address-4b')
    })
    ;

    router.post('/legacy/sprint35/address-4b', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/legacy/sprint35/verify-address-manual-4');
    } else {
      res.redirect('/legacy/sprint35/verify-address-fixed-4');
    }
    });
    ;

    router.post('/legacy/sprint35/cannot-verify-4', (req, res) => {
      res.redirect('/legacy/sprint35/verify-address-not-fixed-4')
    })
    ;

  module.exports = router;
