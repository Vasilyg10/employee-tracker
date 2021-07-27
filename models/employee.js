const addAnEmployeePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        validate: name => {
            if (name) {
                return true;
            }
            console.log('You have to enter a first name!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?",
        validate: name => {
            if (name) {
                return true;
            }
            console.log('You have to enter a last name!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'roleId',
        message: "What is the employee's role id?",
        validate: roleId => {
            if (roleId) {
                return true;
            }
            console.log('You have to enter a role id!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's id?"
    }
]

module.exports = addAnEmployeePrompt;