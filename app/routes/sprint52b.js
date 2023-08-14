const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// Reissueto same bank account?
router.post('/legacy/sprint52b/reissue-account', function(req, res) {
  if (req.body['reissue-account'] === 'yes') {
    res.redirect('reissue-payment');
  } else {
    res.redirect('reissue-bank-details');
  }
});


// New bank details to account details origin
router.post('/legacy/sprint52b/reissue-bank-details', (req, res) => {
  res.redirect('/legacy/sprint52b/account-details-origin')
});

// Account details origin to reissue payment
router.post('/legacy/sprint52b/account-details-origin', (req, res) => {
  res.redirect('/legacy/sprint52b/reissue-payment')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint52b/reissue-payment', (req, res) => {
  res.redirect('/legacy/sprint52b/payment-reissued-banner')
});



module.exports = router;
