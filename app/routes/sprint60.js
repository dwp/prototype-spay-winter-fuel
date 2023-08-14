const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Task to - DAP details, next of kin details or return to queue

router.post('/legacy/sprint60/death-arrears-task-1', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else {
    res.redirect('death-arrears-task-1-nok');
  }
});


router.post('/legacy/sprint60/death-arrears-task-1-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100');
  } else {
    res.redirect('tasks-5-2');
  }
});

router.post('/legacy/sprint60/send-wfpf100', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-2')
})
;


// Death arrears payee details input

router.post('/legacy/sprint60/death-arrears-task-1-dap-name', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-1-dap-address')
})
;

router.post('/legacy/sprint60/death-arrears-task-1-dap-address', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-1-dap-bank-details')
})
;

// task view bank type to payment or SOP5
router.post('/legacy/sprint60/death-arrears-task-1-dap-bank-details', function(req, res) {
  if ( req.body['bank-account-type'] === 'international-bank' ) {
    res.redirect('/legacy/sprint60/request-sop5');
  } else {
    res.redirect('/legacy/sprint60/death-arrears-task-1-dap-make-payment');
  }
}); 


// record view bank type to payment or SOP5
router.post('/legacy/sprint60/dap-bank-details', function(req, res) {
  if ( req.body['rec-bank-account-type'] === 'international-bank' ) {
    res.redirect('/legacy/sprint60/record-view-request-sop5');
  } else {
    res.redirect('/legacy/sprint60/dap-make-payment');
  }
}); 

// task view request sop5 to task list
router.post('/legacy/sprint60/request-sop5', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-2')
})
;

// record view request sop5 to overview
router.post('/legacy/sprint60/record-view-request-sop5', (req, res) => {
  res.redirect('/legacy/sprint60/overview-dead-request-sop5')
})
;

router.post('/legacy/sprint60/death-arrears-task-1-dap-make-payment', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-2')
})
;

// Cancel payment to updated overview

router.post('/legacy/sprint60/cancel-payment-name', (req, res) => {
  res.redirect('/legacy/sprint60/overview-dead-cancelled')
})
;

// Send WF BR330 to next of kin

router.post('/legacy/sprint60/death-arrears-task-1-nok-name', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-1-nok-address')
})
;

router.post('/legacy/sprint60/death-arrears-task-1-nok-address', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-1-nok-address-1')
})
;

router.post('/legacy/sprint60/death-arrears-task-1-nok-address-1', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-1-nok-send-letter')
})
;

router.post('/legacy/sprint60/death-arrears-task-1-nok-send-letter', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-2')
})
;


router.post('/legacy/sprint60/tasks-5-2', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-2')
})
;


// Record view - death arrears

router.post('/legacy/sprint60/dap-name', (req, res) => {
  res.redirect('/legacy/sprint60/dap-address')
})
;

router.post('/legacy/sprint60/dap-address', (req, res) => {
  res.redirect('/legacy/sprint60/dap-bank-details')
})
;

router.post('/legacy/sprint60/dap-bank-details', (req, res) => {
  res.redirect('/legacy/sprint60/dap-make-payment')
})
;

router.post('/legacy/sprint60/dap-make-payment', (req, res) => {
  res.redirect('/legacy/sprint60/overview-dead-dap-paid')
})
;

// Record view - death arrears IG

router.post('/legacy/sprint60/dap-name-ig', (req, res) => {
  res.redirect('/legacy/sprint60/dap-address-ig')
})
;


router.post('/legacy/sprint60/dap-address-ig', (req, res) => {
  res.redirect('/legacy/sprint60/dap-bank-details-ig')
})
;

router.post('/legacy/sprint60/dap-bank-details-ig', (req, res) => {
  res.redirect('/legacy/sprint60/dap-make-payment-ig')
})
;

router.post('/legacy/sprint60/dap-make-payment-ig', (req, res) => {
  res.redirect('/legacy/sprint60/overview-dead-dap-paid-ig')
})
;


// TASK TWO - Nimbus has been sent

router.post('/legacy/sprint60/death-arrears-task-2', function(req, res) {
  if ( req.body['dap-2'] === 'yes' ) {
    res.redirect('death-arrears-task-2-dap-name');
  } else {
    res.redirect('tasks-5-3');
  }
});

// Death arrears payee details input

router.post('/legacy/sprint60/death-arrears-task-2-dap-name', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-2-dap-address')
})
;

router.post('/legacy/sprint60/death-arrears-task-2-dap-address', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-2-dap-bank-details')
})
;


router.post('/legacy/sprint60/death-arrears-task-2-dap-bank-details', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-2-dap-make-payment')
})
;

router.post('/legacy/sprint60/death-arrears-task-2-dap-make-payment', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-3')
})
;

router.post('/legacy/sprint60/tasks-5-3', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-3')
})
;


// TASK THREE -

router.post('/legacy/sprint60/tasks-5-3', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-3')
})
;

router.post('/legacy/sprint60/death-arrears-task-3', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-3-dap-name');
  } else {
    res.redirect('death-arrears-task-3-nok');
  }
});

router.post('/legacy/sprint60/death-arrears-task-3-dap-name', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-3-dap-address')
})
;

router.post('/legacy/sprint60/death-arrears-task-3-dap-address', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-3-dap-bank-details')
})
;


router.post('/legacy/sprint60/death-arrears-task-3-dap-bank-details', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-3-dap-make-payment')
})
;

router.post('/legacy/sprint60/death-arrears-task-3-dap-make-payment', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-4')
})
;




router.post('/legacy/sprint60/death-arrears-task-3-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-3');
  } else {
    res.redirect('tasks-5-4');
  }
});

router.post('/legacy/sprint60/send-wfpf100-3', (req, res) => {
  res.redirect('/legacy/sprint60/tasks-5-4')
})
;


// TASK FOUR

router.post('/legacy/sprint60/tasks-5-4', (req, res) => {
  res.redirect('/legacy/sprint60/death-arrears-task-4')
})
;

router.post('/legacy/sprint60/death-arrears-task-4', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-4-dap-name');
  } else {
    res.redirect('death-arrears-task-4-nok');
  }
});

router.post('/legacy/sprint60/death-arrears-task-4-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-4');
  } else {
    res.redirect('tasks-5-5');
  }
});

module.exports = router;
