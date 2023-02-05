const fs = require('fs');
const path = require('path');

const appFile = (answers) => {
    const router = answers.install.find(library  => library === 'react-router-dom')
    
    if(router){
        fs.mkdirSync(`${answers.name}/src/routes`,'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'../templates/app/RouterApp.js'),`${answers.name}/src/App.js`)
        if(answers.builder === 'webpack'){
            fs.copyFileSync(path.join(__dirname,'../templates/routes/HomeWebpack.js'),`${answers.name}/src/routes/Home.js`)
        }else{
            fs.copyFileSync(path.join(__dirname,'../templates/routes/HomeVite.js'),`${answers.name}/src/routes/Home.js`)
        }
        fs.copyFileSync(path.join(__dirname,'../templates/routes/style-home.module.css'),`${answers.name}/src/routes/style-home.module.css`)
        fs.copyFileSync(path.join(__dirname,'../templates/style.module.router.css'),`${answers.name}/src/style.module.css`)
        console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/routes'.yellow}`)
        console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/routes/Home.js'.yellow}`)
        console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/routes/stylehome.module.css'.yellow}`)
    }else{
        if(answers.builder === 'webpack'){
        fs.copyFileSync(path.join(__dirname,'../templates/app/SimpleAppWebpack.js'),`${answers.name}/src/App.js`)
        }else{
        fs.copyFileSync(path.join(__dirname,'../templates/app/SimpleAppVite.js'),`${answers.name}/src/App.js`) 
        }
        fs.copyFileSync(path.join(__dirname,'../templates/style.module.simple.css'),`${answers.name}/src/style.module.css`)
    }
     
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/App.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/style.module.css'.yellow}`)
     
     
}

module.exports = {appFile};