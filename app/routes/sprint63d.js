const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// alt format to contact
  router.post('/legacy/sprint63d/alt', function(req, res) {
    if (req.body['alternative-format'] === 'Welsh language') {
      res.redirect('large');
    } else if (req.body['alternative-format'] === 'Large print (custom size)') {
      res.redirect('large-print');
    } else if (req.body['alternative-format'] === 'Large print (default - size 16)') {
      res.redirect('bold');
    } else if (req.body['alternative-format'] === 'Web accessible PDF') {
      res.redirect('email2');
    } else {
      res.redirect('contact');
    }
  });

  // email capture to contact
  router.post('/legacy/sprint63d/email2', (req, res) => {
    res.redirect('contact')
  });
  

// large YES to size, NO to bold
router.post('/legacy/sprint63d/large', function(req, res) {
  if (req.body['large-2'] === 'Large print (custom size)') {
    res.redirect('large-print');
  } else {
    res.redirect('bold');
  }
});



// large print to bold
router.post('/legacy/sprint63d/large-print', (req, res) => {
  res.redirect('bold')
});

// Bold to contact
router.post('/legacy/sprint63d/bold', (req, res) => {
  res.redirect('contact')
});

  module.exports = router;