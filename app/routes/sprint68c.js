const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/legacy/sprint68c/tasks', (req, res) => {
  res.redirect('/legacy/sprint32c/address-1')
});

// GSL return to queue

router.post('/legacy/sprint68c/return-queue', (req, res) => {
  res.redirect('/legacy/sprint68c/tasks-3-returned')
});

// GSL TASK TWOOOOOOOO
router.post('/legacy/sprint68c/tasks-2', (req, res) => {
  res.redirect('/legacy/sprint56/bank-task')
});

// GSL TASK ONEEEE


router.post('/legacy/sprint68c/tasks-3', (req, res) => {
  res.redirect('/legacy/sprint66/gsl-task')
});

router.post('/legacy/sprint68c/tasks-4', (req, res) => {
  res.redirect('/legacy/sprint47b/overpayment-referral')
});


router.post('/legacy/sprint68c/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved');
  } else {
    res.redirect('tasks-3-not-approved');
  }
});


// GSL TASK TWOOOOOO

router.post('/legacy/sprint68c/tasks-3-approved', (req, res) => {
  res.redirect('/legacy/sprint68c/gsl-task-2')
});

router.post('/legacy/sprint68c/tasks-3-not-approved', (req, res) => {
  res.redirect('/legacy/sprint68c/gsl-task-2')
});

router.post('/legacy/sprint68c/gsl-task-2', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved-2');
  } else {
    res.redirect('tasks-3-not-approved-2');
  }
});


// GSL TASK THREEEEEE

router.post('/legacy/sprint68c/tasks-3-approved-2', (req, res) => {
  res.redirect('/legacy/sprint68c/gsl-task-3')
});

router.post('/legacy/sprint68c/tasks-3-not-approved-2', (req, res) => {
  res.redirect('/legacy/sprint68c/gsl-task-3')
});

router.post('/legacy/sprint68c/gsl-task-3', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('/legacy/sprint45b/overview-gsl-approved-pre');
  } else {
    res.redirect('/legacy/sprint45b/overview-gsl-not-approved');
  }
});

// TASK 5 - DEATH ARREARS

router.post('/legacy/sprint68c/tasks-5', (req, res) => {
  res.redirect('/legacy/sprint50/death-arrears-task-1')
});

// TASK 6 - 13 week care home

router.post('/legacy/sprint68c/tasks-6', (req, res) => {
  res.redirect('/legacy/sprint68c/13-week')
});

router.post('/legacy/sprint68c/address', (req, res) => {
  res.redirect('/legacy/sprint68c/address-search-result')
});

router.post('/legacy/sprint68c/13-week', function(req, res) {
  if (req.session.data["13-week"] === "yes") {
    res.redirect('/legacy/sprint68c/13-week-yes');
  } else {
    res.redirect('/legacy/sprint68c/tasks-6-no');
  }
});

router.post('/legacy/sprint68c/correspondence', function(req, res) {
  if (req.session.data["13-week2"] === "yes") {
    res.redirect('/legacy/sprint68c/tasks-6-yes');
  } else {
    res.redirect('/legacy/sprint68c/address2');
  }
});

router.post('/legacy/sprint68c/13-week-no', (req, res) => {
  res.redirect('/legacy/sprint68c/tasks-6-no')
});

router.post('/legacy/sprint68c/13-week-yes', (req, res) => {
  res.redirect('/legacy/sprint68c/address-1')
});

// Address select, yes or search address
router.post('/legacy/sprint68c/address-1', function(req, res) {
  if (req.body['address-change'] === '35 St Albans Close, Ashington, NE63 9RU') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint68c/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint68c/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});



router.post('/legacy/sprint68c/address2', (req, res) => {
  res.redirect('/legacy/sprint68c/address-1-2')
});

// Address select, yes or search address
router.post('/legacy/sprint68c/address-1-2', function(req, res) {
  if (req.body['address-change'] === '67 Station Road, NAILSEA, BS48 2LL') {
    res.redirect('tasks-6-yes');
  } else {
    res.redirect('address-search-2');
  }
});

// Address search
router.post('/legacy/sprint68c/address-search-2', function(req, res) {
  if (req.body['address-search-postcode'] === 'BS48 2LL') {
    res.redirect('address-search-no-result-2');
  } else {
    res.redirect('address-search-result-2');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint68c/address-search-result-2', function(req, res) {
  if (req.body['address-search-change'] === '67 Station Road, NAILSEA, BS48 2LL') {
    res.redirect('tasks-6-yes');
  } else {
    res.redirect('TBC');
  }
});

// Move date
router.post('/legacy/sprint68c/move-date-2', (req, res) => {
  res.redirect('/legacy/sprint68c/tasks-6-yes')
});





// Move date
router.post('/legacy/sprint68c/move-date', (req, res) => {
  if (req.session.data['change-address'] === 'yes') {
    res.redirect('tasks-6-yes');
  } else {
    res.redirect('correspondence');
  }
});

router.post('/legacy/sprint68c/tasks-6-no', (req, res) => {
  res.redirect('/legacy/sprint68c/13-week')
});

router.post('/legacy/sprint68c/tasks-6-yes', (req, res) => {
  res.redirect('/legacy/sprint68c/13-week')
});

module.exports = router;
