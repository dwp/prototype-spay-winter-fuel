const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Address -------------------------------------------------------------------
router.post('/tasks/pay-death-arrears/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 3HD") {
    res.redirect('/legacy/sprint52c/address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/tasks/pay-death-arrears/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/tasks/pay-death-arrears/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/tasks/pay-death-arrears/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/tasks/pay-death-arrears/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/tasks/pay-death-arrears/move-date', (req, res) => {
  res.redirect('living-with')
});

// Living with anyone at address change
router.post('/tasks/pay-death-arrears/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});



router.post('/tasks/pay-death-arrears/living-with-age', (req, res) => {
  if (req.body['before-1954'] === 'Yes') {
    res.redirect('living-with-over-80');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/tasks/pay-death-arrears/living-with-over-80', (req, res) => {
  res.redirect('living-with-date')
});

router.post('/tasks/pay-death-arrears/living-with-date', (req, res) => {
  res.redirect('declaration')
});

router.post('/tasks/pay-death-arrears/declaration', (req, res) => {
  res.redirect('death-arrears-task-1')
});


// Living with anyone at address change
router.post('/tasks/pay-death-arrears/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Task to - DAP details, next of kin details or return to queue

router.post('/tasks/pay-death-arrears/death-arrears-task-1', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else if ( req.body['dap'] === 'cancel' ){
    res.redirect('death-arrears-task-1-cancel-check');
  } else {
    res.redirect('death-arrears-task-1-nok');
  }
});

router.post('/tasks/pay-death-arrears/death-arrears-task-1-cancel-check', function(req, res) {
  if ( req.body['stop-payments'] === 'no' ) {
    res.redirect('death-arrears-task-1');
  } else {
    res.redirect('tasks-5-2');
  }
});


router.post('/tasks/pay-death-arrears/death-arrears-task-1-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100');
  } else {
    res.redirect('tasks-5-2');
  }
});


router.post('/tasks/pay-death-arrears/death-arrears-task-1-dap-type', function(req, res) {
  if ( req.body['type'] === 'person' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else {
    res.redirect('death-arrears-task-1-company-name');
  }
});

router.post('/tasks/pay-death-arrears/send-wfpf100', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-2')
})
;


// Death arrears payee details input

router.post('/tasks/pay-death-arrears/death-arrears-task-1-dap-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-dap-address')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-company-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-company-address')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-dap-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-dap-bank-details')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-company-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-company-bank-details')
})
;

// task view bank type to payment or SOP5
router.post('/tasks/pay-death-arrears/death-arrears-task-1-dap-bank-details', function(req, res) {
  if ( req.body['bank-account-type'] === 'international-bank' ) {
    res.redirect('/tasks/pay-death-arrears/request-sop5');
  } else {
    res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-dap-make-payment');
  }
});

router.post('/tasks/pay-death-arrears/death-arrears-task-1-company-bank-details', function(req, res) {
  if ( req.body['bank-account-type'] === 'international-bank' ) {
    res.redirect('/tasks/pay-death-arrears/request-sop5');
  } else {
    res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-company-make-payment');
  }
});

// record view bank type to payment or SOP5
router.post('/tasks/pay-death-arrears/dap-bank-details', function(req, res) {
  if ( req.body['rec-bank-account-type'] === 'international-bank' ) {
    res.redirect('/tasks/pay-death-arrears/record-view-request-sop5');
  } else {
    res.redirect('/tasks/pay-death-arrears/dap-make-payment');
  }
});

// task view request sop5 to task list
router.post('/tasks/pay-death-arrears/request-sop5', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-2')
})
;

// record view request sop5 to overview
router.post('/tasks/pay-death-arrears/record-view-request-sop5', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/overview-dead-request-sop5')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-dap-make-payment', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-2')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-company-make-payment', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-2')
})
;

// Send WF BR330 to next of kin

router.post('/tasks/pay-death-arrears/death-arrears-task-1-nok-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-nok-address')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-nok-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-nok-address-1')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-nok-address-1', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-1-nok-send-letter')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-1-nok-send-letter', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-2')
})
;


router.post('/tasks/pay-death-arrears/tasks-5-2', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-2')
})
;


// Record view - death arrears

router.post('/tasks/pay-death-arrears/dap-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-address')
})
;

router.post('/tasks/pay-death-arrears/dap-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-bank-details')
})
;

router.post('/tasks/pay-death-arrears/dap-bank-details', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-make-payment')
})
;

router.post('/tasks/pay-death-arrears/dap-make-payment', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/overview-dead-dap-paid')
})
;

// Record view - death arrears IG

router.post('/tasks/pay-death-arrears/dap-name-ig', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-address-ig')
})
;


router.post('/tasks/pay-death-arrears/dap-address-ig', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-bank-details-ig')
})
;

router.post('/tasks/pay-death-arrears/dap-bank-details-ig', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/dap-make-payment-ig')
})
;

router.post('/tasks/pay-death-arrears/dap-make-payment-ig', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/overview-dead-dap-paid-ig')
})
;


// TASK TWO - Nimbus has been sent

router.post('/tasks/pay-death-arrears/death-arrears-task-2', function(req, res) {
  if ( req.body['dap-2'] === 'yes' ) {
    res.redirect('death-arrears-task-2-dap-name');
  } else {
    res.redirect('tasks-5-3');
  }
});

// Death arrears payee details input

router.post('/tasks/pay-death-arrears/death-arrears-task-2-dap-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-2-dap-address')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-2-dap-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-2-dap-bank-details')
})
;


router.post('/tasks/pay-death-arrears/death-arrears-task-2-dap-bank-details', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-2-dap-make-payment')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-2-dap-make-payment', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-3')
})
;

router.post('/tasks/pay-death-arrears/tasks-5-3', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-3')
})
;


// TASK THREE -

router.post('/tasks/pay-death-arrears/tasks-5-3', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-3')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-3', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-3-dap-name');
  } else {
    res.redirect('death-arrears-task-3-nok');
  }
});

router.post('/tasks/pay-death-arrears/death-arrears-task-3-dap-name', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-3-dap-address')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-3-dap-address', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-3-dap-bank-details')
})
;


router.post('/tasks/pay-death-arrears/death-arrears-task-3-dap-bank-details', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-3-dap-make-payment')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-3-dap-make-payment', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-4')
})
;




router.post('/tasks/pay-death-arrears/death-arrears-task-3-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-3');
  } else {
    res.redirect('tasks-5-4');
  }
});

router.post('/tasks/pay-death-arrears/send-wfpf100-3', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/tasks-5-4')
})
;


// TASK FOUR

router.post('/tasks/pay-death-arrears/tasks-5-4', (req, res) => {
  res.redirect('/tasks/pay-death-arrears/death-arrears-task-4')
})
;

router.post('/tasks/pay-death-arrears/death-arrears-task-4', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-4-dap-name');
  } else {
    res.redirect('death-arrears-task-4-nok');
  }
});

router.post('/tasks/pay-death-arrears/death-arrears-task-4-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-4');
  } else {
    res.redirect('tasks-5-5');
  }
});

module.exports = router;
