const addADepartmentPrompt = [{
    type: 'input',
    name: 'departmentName',
    message: 'What is the department name you are adding?',
    validate: name => {
        if (name) {
            return true;
        } else {
            console.log('You have to enter a name!');
        }
    }
}]

module.exports = addADepartmentPrompt;