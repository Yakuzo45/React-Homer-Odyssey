const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');


router.post('/signup', function(req, res, next) {
    var user = [req.body.email, req.body.password, req.body.firstName, req.body.lastName];
    connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?, ?, ?, ?)', user , function (error, results, fields) {
        if(error) {
            res.status(500).json({ flash: error.message });
        } else {
            res.status(200).json({ flash: "User has been signed up !" });
        }

    });
});

module.exports = router;
