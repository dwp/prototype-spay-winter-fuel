
const express = require('express');
const router = express.Router()

router.get('/legacy/sprint17/', function(req, res) {
    res.render('./sprint17/whattodo')
  })
  
  router.post('/legacy/sprint15/international/declaration', function(req, res) {
    res.redirect('/legacy/sprint15/international/applicationcomplete')
  }) 

module.exports = router;