const mysql = require('mysql2');
const inquirer = require('inquirer')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootpwd',
        database: 'employee_tracker_db'
    },
    console.log('Connected to the employee tracker database')
);


inquirer.prompt([
    {
        message: 'What type of user would you like to create.',
        name: 'type',
        type: 'list',
        choices: ['Elf', 'Gnome', 'Troll', 'Sprite']
    },
    {
        message: 'do you have magic powers',
        name: 'magic',
        type: 'confirm',
    }
]).then(data => {
    if(data.magic){
        inquirer.prompt({
            message: 'What level magic are you capable of?',
            name: 'magicLevel',
            type: 'list',
            choices: [1,2,3,4,5]
        })
        .then(magicData => {
            console.log('MAGIC DATA ->', magicData)
        })
    } else {
        inquirer.prompt({
            message: 'what boost would you like?',
            type: 'list',
            name: 'boost',
            choices: ['speed', 'strength', 'medicine' ]

        })
        .then(noMagicData=> {
            console.log('NO MAGIC DATA -> ', noMagicData)
        })
    }
})
