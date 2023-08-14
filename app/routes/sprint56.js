const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint56/bank-task', function(req, res) {
  if (req.body['bank-details'] === 'add') {
    res.redirect('bank-details');}
    else if (req.body['bank-details'] === 'return') {
      res.redirect('case-returned');}    
    else if (req.body['bank-details'] === 'remove') {
      res.redirect('confirm-remove');}
    else if (req.body['bank-details'] === 'ineligible') {
        res.redirect('confirm-remove');}
   else {
    res.redirect('bank-task');
  }
});


// Find result to security
router.post('/legacy/sprint56/bank-details', (req, res) => {
  res.redirect('/legacy/sprint56/get-next-task-account-added')
});

// get next account details case to case page
router.post('/legacy/sprint56/get-next-task', (req, res) => {
  res.redirect('/legacy/sprint56/bank-task')
});

// confirm reove from queue
router.post('/legacy/sprint56/confirm-remove', function(req, res) {
  if (req.body['delete'] === 'No') {
    res.redirect('bank-task');
  } else {
    res.redirect('get-next-task');
  }
});



module.exports = router;
