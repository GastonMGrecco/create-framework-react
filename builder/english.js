const { exec } = require('child_process');
const { baseFolders } = require('./baseFolders');
const { baseFiles } = require('./baseFiles');
const { htmlFile } = require('./htmlFile');
const { indexFile } = require('./indexFile');
const { builderFile } = require('./builderFile');
const { appFile } = require('./appFile');
const { jsonWebpack } = require('./jsonWebpack');
const { jsonVite } = require('./jsonVite');
const { answers } = require('../inquirer/answers');

const english = () =>{
    answers.then((answers) => {
        baseFolders(answers);
        baseFiles(answers);
        if (answers.builder === 'webpack') {
            jsonWebpack(answers)
        } else {
            jsonVite(answers)
        }
        htmlFile(answers);
        indexFile(answers);
        builderFile(answers);
        appFile(answers);
        console.log('\n');
        import("../module/ora.mjs").then(({ ora }) => {
            const spinner = ora({ text: 'Installing dependencies...', spinner: 'material', color: 'green' }).start()
    
            exec(`cd ${answers.name}/ && npm install`, (error, stdout, stderr) => {
                spinner.succeed('Dependencies installed successfully!!!');
                console.log(stdout)
                console.log(`\n Your framework react "${answers.name}" was created successfully on ${answers.builder} builder!!!`.cyan);
                console.log(`\n Now just need: ${'cd'.green} ${answers.name.yellow}'`)
                console.log(`\n Now just need: ${'npm start'.green}\n`)
            })
        })
    })
}    

module.exports = { english };