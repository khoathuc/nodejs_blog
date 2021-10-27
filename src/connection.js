const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ledinhkhoa187817788',
    database:'hotel_manage'
});