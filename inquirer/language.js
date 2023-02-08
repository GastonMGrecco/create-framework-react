const inquirer = require('inquirer');
const language = inquirer.prompt(
  {
    type: 'list',
    name: 'language',
    message: 'Language/Idioma?',
    default: 'English',
    choices: ['English','Español']
  }
)

module.exports = { language };