const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// Living with age back to contact
router.post('/legacy/sprint65c/living-with-over-80', (req, res) => {
  res.redirect('/legacy/sprint49/living-with-date')
});



module.exports = router;
