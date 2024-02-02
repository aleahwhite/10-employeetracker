import inquirer from "inquirer";
import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jolieroot5',
    database: 'employee_info_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Yay! Connected to the database! ');
    runPrompt();
});

function runPrompt() {
    inquirer.prompt({
        name: 'options',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'EXIT'
        ]

    }).then(answer => {

        switch (answer.options) {
            case 'View all departments':
                viewDepartments();
                break;

            case 'View all roles':
                viewRoles();
                break;

            case 'View all employees':
                viewEmployee();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Add a role':
                addRole();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'EXIT':
                exitApplication();
                break;
        }
    });
}

function viewDepartments() {
    let query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runPrompt();
    });
}

function viewRoles() {
    let query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runPrompt();
    });
}

function viewEmployee() {
    let query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runPrompt();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'departmentName'
        }
    ]).then (answer => {
        let query = 'INSERT INTO department (name) VALUES (?)';
        connection.query(query, [answer.departmentName], (err, res) => {
            if (err) throw err;
            console.log(`Department ${answer.departmentName} added successfully!`);
            runPrompt();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName'
        },
        {
        type: 'input',
        message: 'What is the salary for this role? (in decimal form plz)',
        name: 'yearlySalary'
        },
        {
        type: 'input',
        message: 'What is the department ID number?',
        name: 'departmentID'
        }
    ]).then(answer => {
        let query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        connection.query(query, [answer.roleName, answer.yearlySalary, answer.departmentID], (err, res) => {
            if (err) throw err;
            console.table(res);
            runPrompt();
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is the first name of the employee?',
        name: 'firstName'
        },
        {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'lastName'
        },
        {
        type: 'list',
        message: 'What role does the employee fill?',
        choices: 
        [
        '1: HR Director (130k)', 
        '2: Clerk (30k)', 
        '3: Marketing Manager (100k)', 
        '4: Developer (100k)', 
        '5: Sales Rep (75k)'
        ],
        name: 'role'
        },
        {
        type: 'list',
        message: 'What number manager is your manager? (higher salary 1 - 3 lower salary',
        choices: 
        [
        '1',
        '2',
        '3'
        ],
        name: 'managerID'
        }
    ]).then(answer => {
        let query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)'
        connection.query(query, [answer.firstName, answer.lastName, answer.role, answer.managerID], (err,res) => {
            if (err) throw err;
            console.table(res);
            runPrompt();
        });
    });
}

function exitApplication() {
    connection.end(err => {
        if (err) {
            console.error('Error closing database connection');
        } else {
            console.log('Goodbye!');
            process.exit();
        }
    });
}