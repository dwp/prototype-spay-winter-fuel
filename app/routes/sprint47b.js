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
  router.post('/legacy/sprint47b/overpayment-referral', (req, res) => {
    res.redirect('/print47b/overpayment-referral-2')
  })
  ;

  router.post('/legacy/sprint47b/next-task', (req, res) => {
    res.redirect('/legacy/sprint47b/overpayment-referral-2')
  })
  ;

  router.post('/legacy/sprint47b/overpayment-referral-2', (req, res) => {
    res.redirect('/legacy/sprint47b/overpayment-referral-2')
  })
  ;

  // Referral to get next
  router.post('/legacy/sprint47b/next-task-2', (req, res) => {
    res.redirect('/legacy/sprint47b/overpayment-referral-3')
  })
  ;


  module.exports = router;
