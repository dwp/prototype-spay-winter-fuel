const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// Reissue to same bank account or enter new details
router.post('/legacy/sprint52f/reissue-account', function(req, res) {
  if (req.body['reissue-account'] === 'yes') {
    res.redirect('reissue-payment');
  } else {
    res.redirect('account-details-origin');
  }
});


// Account details origin to new bank details
router.post('/legacy/sprint52f/account-details-origin', (req, res) => {
  res.redirect('/legacy/sprint52f/reissue-bank-details')
});

// New bank details to reissue payment
router.post('/legacy/sprint52f/reissue-bank-details', (req, res) => {
  res.redirect('/legacy/sprint52f/reissue-payment')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint52f/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint52f/payment-reissued-banner')
});



module.exports = router;
