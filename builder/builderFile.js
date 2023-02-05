const fs = require('fs');
const path = require('path');
require('colors');

const builderFile = (answers) => {
    //Create webpack.config.js 
    if(answers.builder==='webpack'){
      const webpackRead = fs.createReadStream(path.join(__dirname,`../templates/webpack/webpack.config.js`), {
        autoClose: true,
      });
      const webpackWrite = fs.createWriteStream(`${answers.name}/webpack.config.js`);
      webpackRead.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace(3000, answers.port)
        webpackWrite.write(textoParcialReemplazado);
      });
      webpackWrite.on("error", err => {
        console.log("error\n", { err });
      });
      webpackRead.on("error", err => {
        console.log("error\n", { err });
      });
      
      webpackRead.on("end", () => {
        webpackWrite.close();
      });
      console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/webpack.config.js'.yellow}`)
    }else{
      const viteRead = fs.createReadStream(path.join(__dirname,`../templates/vite/vite.config.js`), {
        autoClose: true,
      });
      const viteWrite = fs.createWriteStream(`${answers.name}/vite.config.js`);
      viteRead.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace(3000, answers.port)
        viteWrite.write(textoParcialReemplazado);
      });
      viteWrite.on("error", err => {
        console.log("error\n", { err });
      });
      viteRead.on("error", err => {
        console.log("error\n", { err });
      });
      
      viteRead.on("end", () => {
        viteWrite.close();
      });
      console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/vite.config.js'.yellow}`)
    }
}

module.exports = {builderFile};