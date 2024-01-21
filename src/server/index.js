const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
const port = 3001;

// Replace the following MySQL database configuration with your own
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Meraxes@10AC",
  database: "dbms_project",
});


app.use(cors());
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint for customer registration
app.post("/customerRegister", (req, res) => {
  const { fullName, email, password } = req.body;

  // Insert the new user into the customers table
  const insertQuery =
    "INSERT INTO customer_users (fullName, email, password) VALUES (?, ?, ?)";
  db.query(insertQuery, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("Error registering customer:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    } else {
      console.log("Customer registered:", result);
      res.json({ message: "Customer registered successfully" });
    }
  });
});

/*app.post("/customerRegister", (req, res) => {
  const { fullName, email, password } = req.body;

  // Step 1: Insert into customer_users table
  const insertCustomerQuery =
    "INSERT INTO customer_users (fullName, email, password) VALUES (?, ?, ?)";
  db.query(insertCustomerQuery, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("Error registering customer:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    } else {
      // Step 2: Retrieve the user_id from the user table
      const selectUserQuery = "SELECT user_id FROM user WHERE email = ?";
      db.query(selectUserQuery, [email], (err, userResult) => {
        if (err) {
          console.error("Error retrieving user_id:", err);
          res
            .status(500)
            .json({ error: "Internal Server Error", details: err.message });
        } else {
          const user_id = userResult[0].user_id;

          // Step 3: Insert into user table
          const insertUserQuery =
            "INSERT INTO users (user_id, user_type) VALUES (?, 'customer')";
          db.query(insertUserQuery, [user_id], (err, userInsertResult) => {
            if (err) {
              console.error("Error inserting into user table:", err);
              res
                .status(500)
                .json({ error: "Internal Server Error", details: err.message });
            } else {
              console.log("Customer registered:", result);
              res.json({ message: "Customer registered successfully" });
            }
          });
        }
      });
    }
  });
});*/


app.post("/customerLogin", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM customer_users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        // User found, authentication successful
        res.json({ message: "Authentication successful" });
      } else {
        // User not found or invalid credentials
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
});

app.post("/employeeLogin", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM employee_users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        // User found, authentication successful
        res.json({ message: "Authentication successful" });
      } else {
        // User not found or invalid credentials
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
});

app.post("/forgotPassword", async (req, res) => {
  const { email, password } = req.body;

  // Check if the email exists in the database
  const checkEmailQuery = "SELECT * FROM customer_users WHERE email = ?";
  db.query(checkEmailQuery, [email], (error, results) => {
    if (error) {
      console.error("Error checking email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      // Email not found
      return res.status(404).json({ error: "Email not found" });
    }
    
    res.status(200).json({ success: "Email found" });
   
    // Update the password for the found email
    const updatePasswordQuery = "UPDATE customer_users SET password = ? WHERE email = ?";
    db.query(updatePasswordQuery, [password, email], (updateError) => {
      if (updateError) {
        console.error("Error updating password:", updateError);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Password updated successfully
      res.status(200).json({ success: "Password updated successfully" });
    });
  });
});

app.get("/products", (req, res) => {
  // Example SQL query to select all products from a 'products' table
  const query = "SELECT * FROM product";

  // Execute the query
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Endpoint to get product by ID
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM product WHERE ProductID = ?';

  db.query(query, [productId], (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      const product = results[0];
      res.json(product);
    }
  });
});

app.post('/cart/add', async (req, res) => {
  try {
    const { cartId, cartCount, cartSession, productId } = req.body;

    const [results] = await connection.execute(
      'INSERT INTO shopping_cart (cart_id, cart_count, cart_session, product_id) VALUES (?, ?, ?, ?)',
      [cartId, cartCount, cartSession, productId]
    );

    res.json({ success: true, message: 'Item added to the cart', results });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Delete item from cart
app.delete('/cart/delete/:cartId/:productId', async (req, res) => {
  try {
    const { cartId, productId } = req.params;

    const [results] = await connection.execute(
      'DELETE FROM shopping_cart WHERE cart_id = ? AND product_id = ?',
      [cartId, productId]
    );

    res.json({ success: true, message: 'Item deleted from the cart', results });
  } catch (error) {
    console.error('Error deleting item from cart:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
