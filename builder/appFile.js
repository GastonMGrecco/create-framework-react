const fs = require('fs');
const path = require('path');

const appFile = (answers) => {
    const router = answers.dependencies.find(library  => library === 'react-router-dom')
    const sass = answers.dependencies.find(library  => library === 'sass')
    if(router){
        fs.mkdirSync(`${answers.name}/src/routes`,'0777',error=>(error))
        const appReader = fs.createReadStream(path.join(__dirname,'../templates/app/RouterApp.js'), {autoClose: true});
        const appWriter = fs.createWriteStream(`${answers.name}/src/App.js`);
        appReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            appWriter.write(text_replaced);
        })

        if(answers.builder === 'webpack'){
            const homeReader = fs.createReadStream(path.join(__dirname,'../templates/routes/HomeWebpack.js'), {autoClose: true});
            const homeWriter = fs.createWriteStream(`${answers.name}/src/routes/Home.js`);
            homeReader.on('data', chunk =>{
                const partial_text = chunk.toString();
                const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
                homeWriter.write(text_replaced);
            })
        }else{
            const homeReader = fs.createReadStream(path.join(__dirname,'../templates/routes/HomeVite.js'), {autoClose: true});
            const homeWriter = fs.createWriteStream(`${answers.name}/src/routes/Home.js`);
            homeReader.on('data', chunk =>{
                const partial_text = chunk.toString();
                const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
                homeWriter.write(text_replaced);
            })
        }
        fs.copyFileSync(path.join(__dirname,'../templates/routes/style-home.module.css'),`${answers.name}/src/routes/style-home.module.css`)
        fs.copyFileSync(path.join(__dirname,'../templates/style.module.router.css'),`${answers.name}/src/style.module.${sass?'scss':'css'}`)
        console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/routes'.yellow}`)
        console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/routes/Home.js'.yellow}`)
        console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/routes/stylehome.module.'.yellow}${sass?'scss'.yellow:'css'.yellow}`)
    }else{
        if(answers.builder === 'webpack'){
        const appReader = fs.createReadStream(path.join(__dirname,'../templates/app/SimpleAppWebpack.js'), {autoClose: true});
        const appWriter = fs.createWriteStream(`${answers.name}/src/App.js`);
        appReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            appWriter.write(text_replaced);
        })
        }else{
        const appReader = fs.createReadStream(path.join(__dirname,'../templates/app/SimpleAppVite.js'), {autoClose: true});
        const appWriter = fs.createWriteStream(`${answers.name}/src/App.js`);
        appReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            appWriter.write(text_replaced);
        })
        fs.copyFileSync(path.join(__dirname,'../templates/app/SimpleAppVite.js'),`${answers.name}/src/App.js`) 
        }
        fs.copyFileSync(path.join(__dirname,'../templates/style.module.simple.css'),`${answers.name}/src/style.module.${sass?'scss':'css'}`)
    }
     
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/App.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/style.module.'.yellow}${sass?'scss'.yellow:'css'.yellow}`)
     
     
}

module.exports = {appFile};