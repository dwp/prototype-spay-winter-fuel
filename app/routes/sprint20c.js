const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Date of birth

  router.post('/legacy/sprint20c/date-of-birth', (req, res) => {
    res.redirect('/legacy/sprint20c/too-young')
  })
  ;


  //    } else if (something === something) {


  module.exports = router;
