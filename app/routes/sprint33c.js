const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Find someone to find result
  router.post('/legacy/sprint33c/address', (req, res) => {
    res.redirect('/legacy/sprint33c/address-1')
  })
  ;

// Verifying the address
router.post('/legacy/sprint33c/address-1', function(req, res) {
if ( req.body['address-fix-1'] === 'search address' ) {
  res.redirect('/legacy/sprint33c/verify-address-manual-1');
} else {
  res.redirect('/legacy/sprint33c/overview');
}
});
;




  module.exports = router;
