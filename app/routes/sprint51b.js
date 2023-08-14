const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint51b/bank-task', function(req, res) {
  if (req.body['bank-details'] === 'yes') {
    res.redirect('bank-details');
  } else {
    res.redirect('get-next-task');
  }
});


// Find result to security
router.post('/legacy/sprint51b/bank-details', (req, res) => {
  res.redirect('/legacy/sprint51b/get-next-task-account-added')
});

// get next account details case to case page
router.post('/legacy/sprint51b/get-next-task', (req, res) => {
  res.redirect('/legacy/sprint51b/bank-task')
});



module.exports = router;
