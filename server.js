const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    password: 'VnnmgHd3rHFDgF',
    database: 'employee_db'
  },
  console.log(`Connected to THE database.`)
);

const menu = [
  {
    type: 'list',
    name: 'role',
    message: 'Welcome to the Emplyee Database. Please select an option',
    choices: [
      'view all departments', 
      'view all roles', 
      'view all employees', 
      'add a department', 
      'add a role', 
      'add an employee',
      'update an employee role']
  },
]

// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });

// functions
function init() {

  inquirer.prompt(menu)
    .then(answer => {
      switch (answer) {
        case "view all departments":
          // function
          break;

        case "view all roles":
          // function 
          break;

          case "view all employees":
          // function
          break;

          case "add a department":
          // function
          break;

          case "add a role":
          // function
          break;

          case "add an employee":
          // function
          break;

          case "update an employee role":
          // function
          break;
       
      }

    })

    .catch((err) => console.error(err));
}

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
