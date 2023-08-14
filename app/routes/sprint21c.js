const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Date of birth

  router.post('/legacy/sprint21c/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint21c/too-young')
  })
  ;


  //    } else if (something === something) {


  module.exports = router;
