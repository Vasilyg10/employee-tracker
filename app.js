const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table');
const startPrompt = require('./models/startPrompt');
const addADepartmentPrompt = require('./models/department');
const addAnEmployeePrompt = require('./models/employee');
const addARolePrompt = require('./models/role');

const db = mysql.createConnection(
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

const addADepartment = () => {
    inquirer.prompt(addADepartmentPrompt)
        .then(answer => {
            const params = answer.departmentName;
            const addDepartments = `
            INSERT INTO departments (name)
            VALUES (?)
            `;

            db.query(addDepartments, params, (err, result) => {
                if (err) throw err;
                console.log('You have successfuly added a Department!');
                start();
            });
        });
}

const addAnEmployee = () => {
    const managerId = `
    SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name)
    AS name, departments.name AS department
    FROM employee
    JOIN role ON role.id = employee.role_id
    JOIN departments ON departments.id = role.department_id
    WHERE employee.manager_id IS null
    `;

    const roleId = `
    SELECT role.id, role.title FROM role
    `;

    db.query(roleId, (err, result) => {
        if (err) throw err;

        console.table('\n', result);
    })
    db.query(managerId, (err, result) => {
        if (err) throw err;
        console.table('\n', result);
    })
    inquirer.prompt(addAnEmployeePrompt)
        .then(answers => {
            const params = [answers.firstName, answers.lastName, answers.roldId, answers.managerId];
            const addEmployees = `
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (?,?,?,?)
            `;

            db.query(addEmployees, params, (err, result) => {
                if (err) throw err;
                console.log('You have successfully added and employe!');
                start();
            });
        });
}

const addARole = () => {
    const addRole = `
    SELECT * FROM departments
    `;

    db.query(addRole, (err, result) => {
        if (err) throw err;
        console.table('\n', result);
    })
    inquirer.prompt(addARolePrompt)
        .then(answers => {
            const params = [answers.roleTitleInput, answers.salaryInput, answers.departmentId];
            const addRole = `
            INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)
            `;
            db.query(addRole, params, (err, result) => {
                if (err) throw err;
                console.log('You have successfully added a Role!');
                start();
            });
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
                case 'add a department':
                    addADepartment();
                    break;
                case 'add an employee':
                    addAnEmployee();
                    break;
                case 'add a role':
                    addARole();
                    break;
            }
        });
}

start();