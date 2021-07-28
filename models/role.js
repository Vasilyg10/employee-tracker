const addARolePrompt = [
    {
        type: 'input',
        name: 'roleTitle',
        message: "What is the role's title you are adding?",
        validate: roleTitle => {
            if (roleTitle) {
                return true;
            }
            console.log('You have to enter a title for the role');
            false;
        }
    },
    {
        type: 'input',
        name: 'salaryInput',
        message: "What is the role's salary?",
        validate: salary => {
            if (Number.isInteger(parseInt(salar))) {
                return true;
            }
            console.log('Salary has to be a number!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'departmentId',
        message: "What is the department's id that this role belong's to?",
        validate: departmentId => {
            if (departmentId) {
                return true;
            }
            console.log('You have to enter a department id!');
            return false;
        }
    }
]

module.exports = addARolePrompt;