import mysql from 'mysql';
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"documentTracker" 
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
    } else {
      console.log('Connected to database');
    }
  });
export default db;