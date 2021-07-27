const startPrompt = [
    {
        type: 'list',
        name: 'startPrompt',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a roll', 'add an employee', 'update an employee role']
    }
]

module.exports = startPrompt