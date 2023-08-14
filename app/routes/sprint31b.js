const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/legacy/sprint31b/find', (req, res) => {
    res.redirect('/legacy/sprint31b/find-1')
  })
  ;

  // Find result to security
  router.post('/legacy/sprint31b/find-1', (req, res) => {
    res.redirect('/legacy/sprint31b/security')
  })
  ;

  // Security into record with se curity confirmation box
  router.post('/legacy/sprint31b/security', (req, res) => {
    res.redirect('/legacy/sprint31b/overview-security-topup')
  })
  ;



  module.exports = router;
