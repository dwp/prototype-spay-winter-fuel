const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})




router.post('/record-view/overview-tab/update-details/update-details-options', function(req, res) {
  if (req.session.data["update-details-options"] === "current-details") {
    res.redirect('current-details');
  } else if (req.session.data["update-details-options"] === "dead") {
    res.redirect('date-of-death');
  }
    else if (req.session.data["update-details-options"] === "opt-out") {
  res.redirect('stop-payments-reason');
  }
    else if (req.session.data["update-details-options"] === "dlo") {
  res.redirect('overview');
}
});

router.post('/record-view/overview-tab/update-details/update-details-options-dlo', function(req, res) {
  if (req.session.data["update-details-options"] === "remove-dlo") {
  res.redirect('address');
}
});



// Address -------------------------------------------------------------------
router.post('/record-view/overview-tab/update-details/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 3HD") {
    res.redirect('/legacy/sprint52c/address-carehome');
  } else {
    res.redirect('address-search-results');
  }
});

// Address select, yes or search address
router.post('/record-view/overview-tab/update-details/address-search-results', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-manual-search');
  }
});

// Address search
router.post('/record-view/overview-tab/update-details/address-manual-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-manual-search-result');
  }
});


// Care home address select, yes or search address
router.post('/record-view/overview-tab/update-details/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-manual-search');
  }
});

// Address search
router.post('/record-view/overview-tab/update-details/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-manual-search-result');
  }
});

// Address search select, yes or search address
router.post('/record-view/overview-tab/update-details/address-manual-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});

// Move date
router.post('/record-view/overview-tab/update-details/overseas-address', (req, res) => {
  res.redirect('move-date')
});

// Move date
router.post('/record-view/overview-tab/update-details/move-date', (req, res) => {
  res.redirect('living-with')
});

// Living with anyone at address change
router.post('/record-view/overview-tab/update-details/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});



router.post('/record-view/overview-tab/update-details/living-with-age', (req, res) => {
  if (req.body['before-1954'] === 'Yes') {
    res.redirect('living-with-over-80');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/record-view/overview-tab/update-details/living-with-over-80', (req, res) => {
  res.redirect('living-with-date')
});

router.post('/record-view/overview-tab/update-details/living-with-date', (req, res) => {
  res.redirect('update-anything-else')
});


// Living with anyone at address change
router.post('/record-view/overview-tab/update-details/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/record-view/overview-tab/update-details/homephone', (req, res) => {
  res.redirect('update-anything-else')
});

// Home phone number removal
router.post('/record-view/overview-tab/update-details/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('update-anything-else');
  } else {
    res.redirect('current-details');
  }
});

// Power of attourney
router.post('/record-view/overview-tab/update-details/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('update-anything-else');
  }
});

router.post('/record-view/overview-tab/update-details/poa-people', (req, res) => {
  res.redirect('update-anything-else')
});

router.post('/record-view/overview-tab/update-details/update-anything-else', (req, res) => {
  if (req.body['update-anything-else'] === 'no') {
   res.redirect('declaration')
  } else if (req.body['update-details-options'] === 'address') {
    res.redirect('address');
  } else if (req.body['update-details-options'] === 'occupancy') {
    res.redirect('living-with');
  } else if (req.body['update-details-options'] === 'home-phone') {
    res.redirect('homephone');
  } else if (req.body['update-details-options'] === 'mobile-phone') {
    res.redirect('mobilephone');
  } else if (req.body['update-details-options'] === 'work-phone') {
    res.redirect('workphone');
  } else if (req.body['update-details-options'] === 'email') {
    res.redirect('email');
  } else if (req.body['update-details-options'] === 'correspondence-address') {
    res.redirect('correspondence-address');
  } 
});



router.post('/record-view/overview-tab/update-details/declaration', function(req, res) {
  if (req.session.data['movemonth'] === "07") {
    res.redirect('over-payment');
  } else if (req.session.data['movemonth'] === "7") {
    res.redirect('over-payment');
  } else if (req.session.data['living-with-month'] === "07") {
    res.redirect('over-payment');
  } else if (req.session.data['living-with-month'] === "7") {
    res.redirect('over-payment');
  } else if (req.session.data['movemonth'] === "08") {
    res.redirect('make-payment');
  } else if (req.session.data['movemonth'] === "8") {
    res.redirect('make-payment');
  } else if (req.session.data['living-with-month'] === "08") {
    res.redirect('make-payment');
  } else if (req.session.data['living-with-month'] === "8") {
    res.redirect('make-payment');
  } else {
    res.redirect('/record-view/overview-tab/overview');
  }
});

// Make payment to contact
router.post('/record-view/overview-tab/update-details/make-payment', (req, res) => {
  res.redirect('/record-view/overview-tab/update-details/overview-topup')
});

// Mobile phone number change back to contact
router.post('/record-view/overview-tab/update-details/mobilephone', (req, res) => {
  res.redirect('update-anything-else')
});

// Mobile phone number removal
router.post('/record-view/overview-tab/update-details/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('update-anything-else');
  } else {
    res.redirect('/record-view/overview-tab/update-details/current-details');
  }
});

router.post('/record-view/overview-tab/update-details/update-details-changed', (req, res) => {
  res.redirect('overview')
});

router.post('/record-view/overview-tab/update-details/over-payment', (req, res) => {
  res.redirect('/record-view/overview-tab/overview')
});

router.post('/record-view/overview-tab/update-details/current-details', (req, res) => {
  res.redirect('/record-view/overview-tab/overview')
});


router.post('/record-view/overview-tab/update-details/date-of-death', (req, res) => {
  res.redirect('/record-view/overview-tab/overview')
});

router.post('/record-view/overview-tab/update-details/stop-payments-reason', (req, res) => {
  res.redirect('/record-view/overview-tab/overview')
});

module.exports = router;
