const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Address to address select
  router.post('/legacy/sprint33d/address', (req, res) => {
    res.redirect('/legacy/sprint33d/address-1')
  })
  ;


  module.exports = router;
