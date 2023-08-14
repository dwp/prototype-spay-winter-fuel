const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Prototype mode
  router.post('/legacy/sprint41b/mode', (req, res) => {
    res.redirect('/legacy/sprint41b/type-of-application')
  })
  ;


  // Teleclaim or postal claim
  router.post('/legacy/sprint41b/type-of-application', (req, res) => {
    res.redirect('/legacy/sprint41b/find')
  })
  ;


// Benefits to find someone
router.post('/legacy/sprint41b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('no-claim');
  } else {
    res.redirect('find');
  }
});

// Find someone to confirm full name

  router.post('/legacy/sprint41b/find', function(req, res) {
    if (req.session.data['nino'] === 'PX 12 24 32 A') {
      res.redirect('date-of-birth');
    } else if (req.session.data['nino'] === "PX122432A") {
      res.redirect('date-of-birth');
    } else if (req.session.data['nino'] === "px122432A") {
      res.redirect('date-of-birth');
    } else if (req.session.data['nino'] === "px 12 24 32 A") {
      res.redirect('date-of-birth');
    } else {
      res.redirect('find-1');
    }
  });

// Confirm full name to security questions
  router.post('/legacy/sprint41b/find-1', function(req, res) {
      if ( req.session.data['phone-post'] === 'post' ) {
        res.redirect('date-of-birth');
      } else {
        res.redirect('security');
      }
  });

  // DOB (letter) to address or too young
    router.post('/legacy/sprint41b/date-of-birth', function(req, res) {
        if ( req.session.data['dob-year'] === '1959' ) {
          res.redirect('too-young-letter');
        } else {
          res.redirect('address');
        }
    });



// Security questions to house number and postcode
  router.post('/legacy/sprint41b/security', function(req, res) {
      if ( req.session.data['nino'] === 'PX 12 43 56' ) {
        res.redirect('overview');
      } else {
        res.redirect('address');
      }
  });


// Address

router.post('/legacy/sprint41b/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "ne65 0ap") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "ne650ap") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "NE650AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address for letters to address for letters results
  router.post('/legacy/sprint41b/address-carehome', (req, res) => {
    res.redirect('/legacy/sprint41b/carehome-move-date')
  })
  ;

  // Carehome move date to contact
    router.post('/legacy/sprint41b/carehome-move-date', (req, res) => {
      res.redirect('/legacy/sprint41b/contact')
    })
    ;

  // No permanent address to address for letters
  router.post('/legacy/sprint41b/no-permanent-address', function(req, res) {
    if ( req.body['address-for-letters'] === 'yes' ) {
      res.redirect('/legacy/sprint41b/address-for-letters');
    } else {
      res.redirect('no-address-for-letters');
    }
  });

  // Address for letters to address for letters results
    router.post('/legacy/sprint41b/address-for-letters', (req, res) => {
      res.redirect('/legacy/sprint41b/address-for-letters-1')
    })
    ;

    // Address look up to confirm the first line of the address
      router.post('/legacy/sprint41b/address-for-letters-1', (req, res) => {
        res.redirect('/legacy/sprint41b/contact')
      })
      ;

// Confirm first line of address to move date
  router.post('/legacy/sprint41b/address-1', (req, res) => {
    res.redirect('/legacy/sprint41b/move-date')
  })
  ;

// Move date to living with
  router.post('/legacy/sprint41b/move-date', (req, res) => {
    res.redirect('/legacy/sprint41b/living-with')
  })
  ;


  //
  router.post('/legacy/sprint41b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('contact');
    }
  });

  // Confirm first line of address to move date
    router.post('/legacy/sprint41b/living-with-age', (req, res) => {
      res.redirect('/legacy/sprint41b/contact')
    })
    ;


    // Care home date to contact details
      router.post('/legacy/sprint41b/carehome', (req, res) => {
        res.redirect('/legacy/sprint41b/contact')
      })
      ;


    // Prison date to contact details
      router.post('/legacy/sprint41b/prison', (req, res) => {
        res.redirect('/legacy/sprint41b/contact')
      })
      ;


      // Hospital date to contact details
        router.post('/legacy/sprint41b/hospital', (req, res) => {
          res.redirect('/legacy/sprint41b/contact')
        })
        ;

// Phone number & email to contact requirements
  router.post('/legacy/sprint41b/contact', (req, res) => {
    res.redirect('/legacy/sprint41b/bank-details')
  })
  ;


  // Bank details to declaration
    router.post('/legacy/sprint41b/bank-details', (req, res) => {
      res.redirect('/legacy/sprint41b/declaration')
    })
    ;

  // Declaration to completion
  router.post('/legacy/sprint41b/declaration', function(req, res) {
      if ( req.session.data['address-change'] === 'Dolphin View, Harbour Road, Amble, NE65 0AP' ) {
        res.redirect('complete-carehome-successful-pre');
      } else {
        res.redirect('complete-pre');
      }
  });

  // Start again back to beginning
  router.post('/legacy/sprint41b/start-again', (req, res) => {
    res.redirect('/legacy/sprint41b/type-of-application')
  })
  ;

  // Start again back to beginning
  router.post('/legacy/sprint41b/too-young-letter', (req, res) => {
    res.redirect('/legacy/sprint41b/type-of-application-letter-sent')
  })
  ;

  // Start new claim button on confirmation page back to beginning
router.post('/legacy/sprint41b/complete-pre', (req, res) => {
  res.redirect('/legacy/sprint41b/type-of-application')
});


  module.exports = router;
