const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table');
const startPrompt = require('./lib/startPrompt');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootpwd',
        database: 'employee_tracker_db'
    },
    console.log('Connected to the employee tracker database')
);

const viewAllDepartments = () => {
    let viewDepartments = `SELECT * FROM departments`
    db.query(viewDepartments, (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
}

const viewAllRoles = () => {
    let viewRoles = `
    SELECT role.id, role.title, role.salary, departments.name AS department
    FROM role
    JOIN departments ON role.department_id = departments.id
    `;

    db.query(viewRoles, (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
}

const viewAllEmployees = () => {
    const viewEmployees = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, departments.name AS department, role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name, ' ') AS manager
    FROM employee
    JOIN role ON role.id = employee.role_id
    JOIN departments ON departments.id = role.department_id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    `;

    db.query(viewEmployees, (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
}


const start = () => {
    inquirer.prompt(startPrompt)
        .then(answer => {
            switch (answer.startPrompt) {
                case 'view all departments':
                    viewAllDepartments();
                    break;
                case 'view all roles':
                    viewAllRoles();
                    break;
                case 'view all employees':
                    viewAllEmployees();
                    break;
            }
        })
}

start();