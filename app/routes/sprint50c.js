const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Get next task to the task

router.post('/legacy/sprint50c/debt-management-task', (req, res) => {
  res.redirect('/legacy/sprint50c/debt-management-task-1')
})
;

router.post('/legacy/sprint50c/debt-management-task-1', function(req, res) {
  if (req.body['task'] === 'complete') {
    res.redirect('get-debt-management-task-2-complete');
  } else {
    res.redirect('get-debt-management-task-2-incomplete');
  }
});


module.exports = router;
