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


// Referral to get next
router.post('/legacy/sprint64/task-lists', (req, res) => {
  res.redirect('/legacy/sprint64/commercial-address')
})
;

router.post('/legacy/sprint64/commercial-address', function(req, res) {
  if ( req.body['approve-commercial'] === 'no-update' ) {
    res.redirect('address');
  } else {
    res.redirect('next-task');
  }
  });
  ;

  router.post('/legacy/sprint64/commercial-address-hint', function(req, res) {
    if ( req.body['approve-commercial'] === 'no-update' ) {
      res.redirect('address');
    } else {
      res.redirect('next-task');
    }
    });
    ;


  router.post('/legacy/sprint64/address', (req, res) => {
    res.redirect('address-1')
  });

  router.post('/legacy/sprint64/address-1', (req, res) => {
    res.redirect('move-date')
  });

  router.post('/legacy/sprint64/move-date', (req, res) => {
    res.redirect('living-with')
  });

  router.post('/legacy/sprint64/living-with', (req, res) => {
    res.redirect('homephone-address')
  });

  router.post('/legacy/sprint64/homephone-address', (req, res) => {
    res.redirect('poa')
  });

  router.post('/legacy/sprint64/poa', (req, res) => {
    res.redirect('declaration')
  });

  router.post('/legacy/sprint64/declaration', (req, res) => {
    res.redirect('next-task')
  });

  module.exports = router;
