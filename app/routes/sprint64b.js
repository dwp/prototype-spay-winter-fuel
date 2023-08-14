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
router.post('/legacy/sprint64b/task-lists', (req, res) => {
  res.redirect('/legacy/sprint64b/alternative-format')
})
;


  // Referral to get next
  router.post('/legacy/sprint64b/alternative-format-radio-audio', (req, res) => {
    res.redirect('/legacy/sprint64b/next-task')
  })
  ;



// confirm reove from queue
router.post('/legacy/sprint64b/confirm-remove', function(req, res) {
  if (req.body['delete'] === 'No') {
    res.redirect('alternative-format-radio-audio');
  } else {
    res.redirect('next-task-deleted');
  }
});


  module.exports = router;
