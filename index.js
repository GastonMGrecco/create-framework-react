const { exec } = require('child_process');
const { baseFolders } = require('./builder/baseFolders');
const { baseFiles } = require('./builder/baseFiles');
const { htmlFile } = require('./builder/htmlFile');
const { indexFile } = require('./builder/indexFile');
const { builderFile } = require('./builder/builderFile');
const { appFile } = require('./builder/appFile');
const { jsonWebpack } = require('./builder/jsonWebpack');
const { jsonVite } = require('./builder/jsonVite');
const { answers } = require('./inquirer/answers');

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
    import("./module/ora.mjs").then(({ ora }) => {
        const spinner = ora({ text: 'Installing dependencies...', spinner: 'material', color: 'green' }).start()

        exec(`cd ${answers.name}/ && npm install`, (error, stdout, stderr) => {
            spinner.succeed('Dependencies installed successfully!!!');
            console.log(stdout)
            console.log(`\n Your framework react "${answers.name}" was created successfully !!!`.cyan);
            console.log(`\n Now just need: ${'cd'.green} ${answers.name.yellow}'`)
            console.log(`\n Now just need: ${'npm start'.green}\n`)
        })
    })
})


