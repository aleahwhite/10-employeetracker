const inquirer = require("inquirer");
const mysql2 = require("mysql2");

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
            'Update an employee role',
            'EXIT'
        ]

    }).then(answer => {

        switch (answer.action) {
            case 'View all departments':
                viewDepartments();
                break;

            case 'View all roles':
                viewRoles();
                break;

            case 'View all employees':
                viewEmployees();
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

            case 'Update an employee role':
                updateRole();
                break;

            case 'EXIT':
                connection.end();
                break;
        }
    });
}