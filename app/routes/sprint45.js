const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/legacy/sprint45/verify-dob', (req, res) => {
  res.redirect('/legacy/sprint45/verify-dob-confirm')
});


router.post('/legacy/sprint45/dob-nv-request', (req, res) => {
  res.redirect('/legacy/sprint41b/type-of-application')
});



module.exports = router;
