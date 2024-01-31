const inquirer = require('inquirer');
const answers = inquirer.prompt([

  {
    name: 'name',
    message: 'What is your project react name?',
    default: 'app',
    validate: function (input) {
      if (!input.match(/^[a-zA-Z0-9_]+$/g)) {
        console.log('\t You can`t use spaces or special characters')
        return false
      } else {
        return true
      }
    }
  },
  {
    type: 'list',
    name: 'builder',
    message: 'What type of builder do you want to use?',
    default: 'webpack',
    choices: ['webpack','vite']
  },
  {
    type: 'input',
    name: 'port',
    message: 'What port do you want to use?',
    default: '3000',
    validate: function (input) {
      if (!input.match(/^[0-9]+$/g)) {
        console.log('\t You only can use numbers')
        return false
      } else {
        return true
      }
    }
  },
  {
    type: 'checkbox',
    name: 'dependencies',
    message: 'What library do you want to install?',
    choices: ['redux', 'react-router-dom', 'axios', 'react-hook-form', 'eslint', 'react-error-boundary', 'sass']
    //Bootstrap,Tailwings,MaterialUI,Jest(enzyme),Jest(react-testing-library),
  },
  {
    type: 'list',
    name: 'install',
    message: 'How do you want to install your dependencies?',
    default: 'npm',
    choices: ['npm','yarn']
  },

  //JS or TS files
])

module.exports = { answers };