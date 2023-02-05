const fs = require('fs');
const path = require('path');

const baseFolders = (answers) => {

     //Copyng required files base
     fs.mkdirSync(`${answers.name}`,'0777',error=>(error))
     fs.mkdirSync(`${answers.name}/src`,'0777',error=>(error))
     fs.mkdirSync(`${answers.name}/src/assets`,'0777',error=>(error))
     fs.mkdirSync(`${answers.name}/src/components`,'0777',error=>(error))
     fs.mkdirSync(`${answers.name}/public`,'0777',error=>(error))
     console.log(`${'\nCREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}`)
     console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src'.yellow}`)
     console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/assets'.yellow}`)
     console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/components'.yellow}`)
     console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/public'.yellow}`)
} 

module.exports = {baseFolders}