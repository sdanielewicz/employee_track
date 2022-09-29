const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'VnnmgHd3rHFDgF',
    database: 'employee_db'
  },
  console.log(`Connected to THE database.`)
);

const menu = [
  {
    type: 'list',
    name: 'menu',
    choices: [
      'view all departments',
      'view all roles',
      'view all employees',
      'add a department',
      'add a role',
      'add an employee',
      'update an employee role']
  }
]

const addDeptPrompt = [
  {
    type: 'input',
    name: 'dept',
    message: 'What is the name of the department'
  }
];

const addRolePrompt = [
  {
    type: 'input',
    name: 'role',
    message: 'What is the name of the role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is salary?'
  },
  {
    type: 'input',
    name: 'dept_id',
    message: 'What is the department id?',
  }
];

const addEmp = [
  {
    type: 'input',
    name: 'fn',
    message: 'What is the employee first name?'
  },
  {
    type: 'input',
    name: 'ln',
    message: 'What is the employee last name?'
  },
  {
    type: 'input',
    name: 'mgmt_id',
    message: 'What is the employee mangager id?',
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the employee role id?',
  }
];

const selectEmp = [
  {
    type: 'input',
    name: 'emp_id',
    message: 'Select the ID of the employee you want to update'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'Select the role id of the employee you want to update'
  }
];

function viewAllEmp() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log("\n");
    console.table(results);
    init();

  });
}

function viewAllDept() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log("\n");
    console.table(results);
    init();
  });
}

function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log("\n");
    console.table(results);
    init();

  });
}

function addDept(answer){
  db.query(`INSERT INTO department(dept_name) VALUES ("${answer.dept}")`, function (err, results) {
    console.log("\n");
    console.table(results);
});
}

function addRole(answer){
  db.query(`INSERT INTO role(title, salary, department_id) VALUES ("${answer.role}","${answer.salary}","${answer.dept_id}")`, function (err, results) {
    console.log("\n");
   console.table(results);
  });

}

function init() {

  inquirer.prompt(menu)
    .then(answer => {
      switch (answer.menu) {
        case "view all departments":
          viewAllDept();
          break;

        case "view all roles":
          viewAllRoles();
          init();
          break;

        case "view all employees":
          viewAllEmp();
          init();
          break;

        case "add a department":
          inquirer.prompt(addDeptPrompt)
            .then(answer => {
          addDept(answer);
        init();

          })
          break;

        case "add a role":
          inquirer.prompt(addRolePrompt)
            .then(answer => {
              addRole(answer);
            
            init();
      })
          break;

        case "add an employee":  
        inquirer.prompt(addEmp)
        
            .then(answer => {

              db.query(`INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES ("${answer.fn}","${answer.ln}","${answer.mgmt_id}","${answer.role_id}")`, function (err, results) {
                console.log("\n");
                console.table(results);
              });
              init();
            });
            
          break;

        case "update an employee role":
          inquirer.prompt(selectEmp)
            .then(answer => {
              let empEdit = answer.emp_id;
              let roleEdit = answer.role_id;
              db.query(`UPDATE employee SET role_id = '${roleEdit}' WHERE id = '${empEdit}'`);

            })
          init();
          break;
      }
    })
    .catch((err) => console.error(err));
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init();