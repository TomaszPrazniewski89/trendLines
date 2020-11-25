const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '1.1.1.1',
  user: 'xyz',
  password: 'xyz',
  database: 'xyz'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection



