const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'Yaku',
    password : 'YakuvsSeth',
    database : 'Odyssey-React'
});

module.exports  =  connection;
