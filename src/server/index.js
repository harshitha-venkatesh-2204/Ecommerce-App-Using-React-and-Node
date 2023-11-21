const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Replace the following MySQL database configuration with your own
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Meraxes@10AC',
  database: 'dbms_project',
});

app.use(cors());
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint for customer registration
app.post('/customerRegister', (req, res) => {
  const { fullName, email, password } = req.body;

  // Insert the new user into the customers table
  const insertQuery = 'INSERT INTO customer_users (fullName, email, password) VALUES (?, ?, ?)';
  db.query(insertQuery, [fullName, email, password], (err, result) => {
    if (err) {
      console.error('Error registering customer:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    } else {
      console.log('Customer registered:', result);
      res.json({ message: 'Customer registered successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
