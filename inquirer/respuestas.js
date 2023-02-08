const inquirer = require('inquirer');
const respuestas = inquirer.prompt([

  {
    name: 'name',
    message: 'Cuál es el nombre de tu proyecto?',
    default: 'app',
    validate: function (input) {
      if (!input.match(/^[a-zA-Z0-9_]+$/g)) {
        console.log('\t No puedes usar espacios o carácteres especiales')
        return false
      } else {
        return true
      }
    }
  },
  {
    type: 'list',
    name: 'builder',
    message: 'Qué empaquetador quieres usar?',
    default: 'webpack',
    choices: ['webpack','vite']
  },
  {
    type: 'input',
    name: 'port',
    message: 'Qué puerto quieres usar?',
    default: '3000',
    validate: function (input) {
      if (!input.match(/^[0-9]+$/g)) {
        console.log('\t Solo puedes usar números')
        return false
      } else {
        return true
      }
    }
  },
  {
    type: 'checkbox',
    name: 'install',
    message: 'Qué librerías quieres instalar?',
    choices: ['redux', 'react-router-dom', 'axios', 'react-hook-form', 'eslint', 'react-error-boundary']
    //Bootstrap,Tailwings,MaterialUI,Jest(enzyme),Jest(react-testing-library),
  }

  //JS or TS files
])

module.exports = { respuestas };