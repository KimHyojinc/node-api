var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'kimchair',
    password: 'dmonster',
    database: 'kimchair_db'
});

connection.connect();

module.exports = connection;