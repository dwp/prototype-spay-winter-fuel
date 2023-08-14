const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint52/not-care-home', function(req, res) {
  if (req.body['care-home'] === 'yes') {
    res.redirect('overview');
  } else {
    res.redirect('overview-not-care-home');
  }
});




module.exports = router;
