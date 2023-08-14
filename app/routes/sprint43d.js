const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/legacy/sprint43d/tasks', (req, res) => {
  res.redirect('/legacy/sprint32c/address-1')
});

// GSL return to queue

router.post('/legacy/sprint43d/return-queue', (req, res) => {
  res.redirect('/legacy/sprint43d/tasks-3-returned')
});

// GSL TASK TWOOOOOOOO
router.post('/legacy/sprint43d/tasks-2', (req, res) => {
  res.redirect('/legacy/sprint51b/bank-task')
});

// GSL TASK ONEEEE


router.post('/legacy/sprint43d/tasks-3', (req, res) => {
  res.redirect('/legacy/sprint43b/gsl-task')
});

router.post('/legacy/sprint43d/tasks-4', (req, res) => {
  res.redirect('/legacy/sprint47b/overpayment-referral')
});


router.post('/legacy/sprint43d/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved');
  } else {
    res.redirect('tasks-3-not-approved');
  }
});


// GSL TASK TWOOOOOO

router.post('/legacy/sprint43d/tasks-3-approved', (req, res) => {
  res.redirect('/legacy/sprint43d/gsl-task-2')
});

router.post('/legacy/sprint43d/tasks-3-not-approved', (req, res) => {
  res.redirect('/legacy/sprint43d/gsl-task-2')
});

router.post('/legacy/sprint43d/gsl-task-2', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved-2');
  } else {
    res.redirect('tasks-3-not-approved-2');
  }
});


// GSL TASK THREEEEEE

router.post('/legacy/sprint43d/tasks-3-approved-2', (req, res) => {
  res.redirect('/legacy/sprint43d/gsl-task-3')
});

router.post('/legacy/sprint43d/tasks-3-not-approved-2', (req, res) => {
  res.redirect('/legacy/sprint43d/gsl-task-3')
});

router.post('/legacy/sprint43d/gsl-task-3', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('/legacy/sprint45b/overview-gsl-approved-pre');
  } else {
    res.redirect('/legacy/sprint45b/overview-gsl-not-approved');
  }
});

// TASK 5 - DEATH ARREARS

router.post('/legacy/sprint43d/tasks-5', (req, res) => {
  res.redirect('/legacy/sprint50/death-arrears-task-1')
});






module.exports = router;
