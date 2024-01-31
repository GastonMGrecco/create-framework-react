const { exec } = require('child_process');
const { baseFolders } = require('./baseFolders');
const { baseFiles } = require('./baseFiles');
const { htmlFile } = require('./htmlFile');
const { indexFile } = require('./indexFile');
const { builderFile } = require('./builderFile');
const { appFile } = require('./appFile');
const { jsonWebpack } = require('./jsonWebpack');
const { jsonVite } = require('./jsonVite');
const { respuestas } = require('../inquirer/respuestas');

const spanish = () =>{
    respuestas.then((respuestas) => {
        baseFolders(respuestas);
        baseFiles(respuestas);
        if (respuestas.builder === 'webpack') {
            jsonWebpack(respuestas)
        } else {
            jsonVite(respuestas)
        }
        htmlFile(respuestas);
        indexFile(respuestas);
        builderFile(respuestas);
        appFile(respuestas);
        console.log('\n');
        import("../module/ora.mjs").then(({ ora }) => {
            const spinner = ora({ text: 'Instalando dependencias...', spinner: 'material', color: 'green' }).start()
    
            exec(`cd ${respuestas.name}/ && ${respuestas.install} install`, (error, stdout, stderr) => {
                spinner.succeed('Dependencias instaladas satisfactoriamente!!!');
                console.log(stdout)
                console.log(`\n Tu proyecto react "${respuestas.name}" fue creado satisfactoriamente con el empaquetador ${respuestas.builder}!!!`.cyan);
                console.log(`\n Próximo paso: ${'cd'.green} ${respuestas.name.yellow}`)
                console.log(`\n Inicia el proyecto: ${respuestas.install.green} ${'start'.green}\n`)
            })
        })
    })
}    

module.exports = { spanish };