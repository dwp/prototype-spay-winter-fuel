const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/legacy/sprint57b/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/legacy/sprint57b/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/legacy/sprint57b/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/legacy/sprint57b/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/legacy/sprint57b/find-2');
  } else {
    res.redirect('/legacy/sprint57b/find-1');
  }
});


// Find result to security
router.post('/legacy/sprint57b/find-1', (req, res) => {
  res.redirect('/legacy/sprint57b/security')
});
// Find result to security
router.post('/legacy/sprint57b/find-2', (req, res) => {
  res.redirect('/legacy/sprint57b/security-2')
});


router.post('/legacy/sprint57b/security', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-returned')
});

router.post('/legacy/sprint57b/security-2', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/legacy/sprint57b/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint57b/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/legacy/sprint57b/correspondence-address', (req, res) => {
  res.redirect('/legacy/sprint57b/correspondence-address-1')
});

// Correspondence address to address found
router.post('/legacy/sprint57b/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/legacy/sprint57b/correspondence-address-search', (req, res) => {
  res.redirect('/legacy/sprint57b/correspondence-address-search-result')
});

router.post('/legacy/sprint57b/correspondence-address-search-result', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Home phone number change back to contact
router.post('/legacy/sprint57b/homephone', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Home phone number removal
router.post('/legacy/sprint57b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/legacy/sprint57b/workphone', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Work phone number removal
router.post('/legacy/sprint57b/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/legacy/sprint57b/mobilephone', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Mobile phone number removal
router.post('/legacy/sprint57b/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/legacy/sprint57b/email', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Email removal
router.post('/legacy/sprint57b/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/legacy/sprint57b/contact-preferences', (req, res) => {
  res.redirect('/legacy/sprint57b/contact')
});

// Address -------------------------------------------------------------------
router.post('/legacy/sprint57b/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/legacy/sprint57b/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/legacy/sprint57b/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/legacy/sprint57b/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/legacy/sprint57b/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/legacy/sprint57b/move-date', (req, res) => {
  res.redirect('/legacy/sprint57b/living-with')
});

// Care home move date
router.post('/legacy/sprint57b/carehome-move-date', (req, res) => {
  res.redirect('/legacy/sprint57b/declaration')
});


router.post('/legacy/sprint57b/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    }
    else if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('poa');
    }
});


router.post('/legacy/sprint57b/homephone-address-change', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('living-with-q-week');
    } else {
      res.redirect('poa');
    }
});



// Living with anyone at address change
router.post('/legacy/sprint57b/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/legacy/sprint57b/living-with-date', (req, res) => {
  res.redirect('/legacy/sprint57b/homephone-address')
});


// Living with anyone at address change
router.post('/legacy/sprint57b/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/legacy/sprint57b/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/legacy/sprint57b/poa-people', (req, res) => {
  res.redirect('/legacy/sprint57b/declaration')
});

// Declaration

router.post('/legacy/sprint57b/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "8") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "10") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "05") {
      res.redirect('over-payment-2');
    } else if (req.session.data["movemonth"] === "5") {
      res.redirect('over-payment-2');
    } else {
      res.redirect('overview-changed');
    }
});


// Overpayment recoverable?
router.post('/legacy/sprint57b/over-payment', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-changed')
})
;

// Overpayment recoverable?
router.post('/legacy/sprint57b/over-payment-2', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-changed')
})
;

// Check to payments
router.post('/legacy/sprint57b/recoverable-payment', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-recoverable')
});

// Check to payments
router.post('/legacy/sprint57b/check', (req, res) => {
  res.redirect('/legacy/sprint57b/make-payment')
});

// Make payment to contact
router.post('/legacy/sprint57b/make-payment', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-topup-1')
});



// Living with age back to contact
router.post('/legacy/sprint57b/living-with-age', (req, res) => {
  res.redirect('/legacy/sprint57b/living-with-date')
});

// Living with age back to contact
router.post('/legacy/sprint57b/living-with-age-q-week', (req, res) => {
  res.redirect('/legacy/sprint57b/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/legacy/sprint57b/bankdetails', (req, res) => {
  res.redirect('/legacy/sprint57b/confirm-bank')
});

// Bank confirm to payment
router.post('/legacy/sprint57b/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});


// Bank type to input
router.post('/legacy/sprint57b/reissue-bank-type', function(req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('reissue-bank-uk');
  } else {
    res.redirect('reissue-bank-ig');
  }
});

// Bank details to reissue
router.post('/legacy/sprint57b/reissue-bank-uk', (req, res) => {
  res.redirect('/legacy/sprint57b/reissue-payment-uk')
});

router.post('/legacy/sprint57b/reissue-bank-ig', (req, res) => {
  res.redirect('/legacy/sprint57b/reissue-payment-ig')
});

// Reissue payment to payment with confirmation and updated
router.post('/legacy/sprint57b/reissue-payment-uk', (req, res) => {
  res.redirect('/legacy/sprint57b/payment-reissued-1')
});

router.post('/legacy/sprint57b/reissue-payment-ig', (req, res) => {
  res.redirect('/legacy/sprint57b/payment-reissued-1')
});



// RETURNED PAYMENTS ---------------------------------------------------------
router.post('/legacy/sprint57b/change-payment-status', function(req, res) {
  if (req.body['returned'] === 'yes') {
    res.redirect('payment-returned-1');
  } else {
    res.redirect('payment');
  }
});

// STOP PAYMENTS - OPTED OUT ---------------------------------------------------------
router.post('/legacy/sprint57b/stop-payments', function(req, res) {
  if (req.body['stop-payments'] === 'yes') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('payment');
  }
});

// START PAYMENTS - OPTED IN ---------------------------------------------------------
router.post('/legacy/sprint57b/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'yes') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('payment-opted-out');
  }
});

// STOP PAYMENTS - OPT OUT / DEAD ---------------------------------------------------------
router.post('/legacy/sprint57b/stop-payments-reason', function(req, res) {
  if (req.body['stop-payments'] === 'opted-out') {
    res.redirect('payment-opted-out');
  } else {
    res.redirect('date-of-death');
  }
});

router.post('/legacy/sprint57b/date-of-death', function(req, res) {
  if (req.session.data["death-month"] === "10") {
    res.redirect('death-arrears-task-1');
  } else {
    res.redirect('payment-opted-out');
  }
});

// START PAYMENTS - OPT IN / NOT DEAD ---------------------------------------------------------
router.post('/legacy/sprint57b/start-payments-future', function(req, res) {
  if (req.body['start-payments'] === 'opted-in') {
    res.redirect('payment-opted-in');
  } else {
    res.redirect('citizen-not-dead');
  }
});

// Task to - DAP details, next of kin details or return to queue

router.post('/legacy/sprint57b/death-arrears-task-1', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else {
    res.redirect('death-arrears-task-1-nok');
  }
});

router.post('/legacy/sprint57b/death-arrears-task-1-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100');
  } else {
    res.redirect('payments-no-dap-or-nok');
  }
});

router.post('/legacy/sprint57b/send-wfpf100', (req, res) => {
  res.redirect('payments-wfpf100')
})
;


// Death arrears payee details input

router.post('/legacy/sprint57b/death-arrears-task-1-dap-name', (req, res) => {
  res.redirect('/legacy/sprint57b/death-arrears-task-1-dap-address')
})
;

router.post('/legacy/sprint57b/death-arrears-task-1-dap-address', (req, res) => {
  res.redirect('/legacy/sprint57b/death-arrears-task-1-dap-bank-details')
})
;

// task view bank type to payment or SOP5
router.post('/legacy/sprint57b/death-arrears-task-1-dap-bank-details', function(req, res) {
  if ( req.body['bank-account-type'] === 'international-bank' ) {
    res.redirect('/legacy/sprint57b/request-sop5');
  } else {
    res.redirect('/legacy/sprint57b/death-arrears-task-1-dap-make-payment');
  }
}); 


// record view bank type to payment or SOP5
router.post('/legacy/sprint57b/dap-bank-details', function(req, res) {
  if ( req.body['rec-bank-account-type'] === 'international-bank' ) {
    res.redirect('/legacy/sprint57b/record-view-request-sop5');
  } else {
    res.redirect('/legacy/sprint57b/dap-make-payment');
  }
}); 

// task view request sop5 to task list
router.post('/legacy/sprint57b/request-sop5', (req, res) => {
  res.redirect('/legacy/sprint57b/tasks-5-2')
})
;

// record view request sop5 to overview
router.post('/legacy/sprint57b/record-view-request-sop5', (req, res) => {
  res.redirect('/legacy/sprint57b/overview-dead-request-sop5')
})
;

router.post('/legacy/sprint57b/death-arrears-task-1-dap-make-payment', (req, res) => {
  res.redirect('/legacy/sprint57b/payments-dap-paid')
})
;

// Send WF BR330 to next of kin

router.post('/legacy/sprint57b/death-arrears-task-1-nok-name', (req, res) => {
  res.redirect('/legacy/sprint57b/death-arrears-task-1-nok-address')
})
;

router.post('/legacy/sprint57b/death-arrears-task-1-nok-address', (req, res) => {
  res.redirect('/legacy/sprint57b/death-arrears-task-1-nok-address-1')
})
;

router.post('/legacy/sprint57b/death-arrears-task-1-nok-address-1', (req, res) => {
  res.redirect('/legacy/sprint57b/death-arrears-task-1-nok-send-letter')
})
;

router.post('/legacy/sprint57b/death-arrears-task-1-nok-send-letter', (req, res) => {
  res.redirect('/legacy/sprint57b/tasks-5-2')
})
;

module.exports = router;
