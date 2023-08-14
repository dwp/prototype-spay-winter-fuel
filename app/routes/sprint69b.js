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
router.post('/legacy/sprint69b/task-lists', (req, res) => {
  res.redirect('/legacy/sprint69b/alternative-format')
})
;

// Referral to get next
router.post('/legacy/sprint69b/alternative-format', (req, res) => {
  res.redirect('/legacy/sprint69b/next-task')
})
;


  // Referral to get next
  router.post('/legacy/sprint69b/alternative-format-radio-paper', (req, res) => {
    res.redirect('/legacy/sprint69b/next-task')
  })
  ;



// confirm remove from queue
router.post('/legacy/sprint69b/confirm-remove', function(req, res) {
  if (req.body['delete'] === 'No') {
    res.redirect('alternative-format-radio-paper');
  } else {
    res.redirect('next-task-deleted');
  }
});


  module.exports = router;
