const express = require('express');
const router = express.Router();
console.log(express);

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup');
});

module.exports = router;
