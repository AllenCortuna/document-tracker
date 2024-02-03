const mysql = require('mysql')
const db = mysql.createConnection({
host: "test",
user: "root",
password: "",
database:"documents" 
})

module.exports = db;``