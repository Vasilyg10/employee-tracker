const addADepartmentPrompt = [{
    type: 'input',
    name: 'departmentName',
    message: 'What is the department name you are adding?',
    validate: name => {
        if (name) {
            return true;
        }
        console.log('You have to enter a department name!');
        return false;
    }
}]

module.exports = addADepartmentPrompt;