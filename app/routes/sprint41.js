const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/legacy/sprint41/new-claims', (req, res) => {
    res.redirect('/legacy/sprint41/type-of-application')
  })
  ;


  module.exports = router;
