const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const fs = require('fs');

// Create a write stream to log requests
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set up the Morgan middleware to log requests
app.use(morgan('combined', { stream: accessLogStream }));

// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin@1981',
  database: 'mydatabase'
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Server is listening on port 3000`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/login', function(req, res) {
  try {
    const { username, password } = req.body;
    console.log("request received from client side");
    console.log("username =", username);
    console.log("password =", password);

    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        res.json({ message: 'User do not exist' });
      }
      console.log('Results are:', results);

      const user = results[0];
      const storedPassword = user.password;
      console.log("Password is: " + storedPassword);

      if (storedPassword === password) 
      {
        console.log("Password matched");
        console.log('Authentication successful:', username);
        res.json({ message: 'Authentication successful' });
      } else {
        console.log("Password not match.");
        res.json({ message: 'Password not match' });
        return;
      }
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Error occurred during login' });
  }
});


app.get('/users',function(req,res){
connection.query('select * from users' , function(error,rows,fields){
  if(error) console.log(error);
  else{
    console.log(rows);
    res.send(rows);
  }
});
});
