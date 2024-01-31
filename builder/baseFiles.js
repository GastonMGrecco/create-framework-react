const fs = require('fs');
const path = require('path');

const baseFiles = (answers) => {
     //Copyng required files base
     const redux = answers.dependencies.find(library  => library === 'redux');
     const eslint = answers.dependencies.find(library  => library === 'eslint')
     const sass = answers.dependencies.find(library  => library === 'sass')
     if(redux) {
          const CCReader = fs.createReadStream(path.join(__dirname,'../templates/components/CounterRedux.js'), {autoClose: true});
          const CCWriter = fs.createWriteStream(`${answers.name}/src/components/Counter.js`);
          CCReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            CCWriter.write(text_replaced);
        })
     }else{
          const CCReader = fs.createReadStream(path.join(__dirname,'../templates/components/CounterUseState.js'), {autoClose: true});
          const CCWriter = fs.createWriteStream(`${answers.name}/src/components/Counter.js`);
          CCReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            CCWriter.write(text_replaced);
        })
     }
     fs.copyFileSync(path.join(__dirname,'../templates/components/style-counter.module.css'),`${answers.name}/src/components/style-counter.module.${sass?'scss':'css'}`)
     if(eslint){
          fs.copyFileSync(path.join(__dirname,'../templates/base/.eslintrc.json'),`${answers.name}/.eslintrc.json`)
     }
     fs.copyFileSync(path.join(__dirname,'../templates/base/gitignore.txt'),`${answers.name}/.gitignore`)
     if(answers.builder === 'webpack'){
          const WCReader = fs.createReadStream(path.join(__dirname,'../templates/components/Webpack.js'), {autoClose: true});
          const WCWriter = fs.createWriteStream(`${answers.name}/src/components/Webpack.js`);
          WCReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            WCWriter.write(text_replaced);
        })
          fs.copyFileSync(path.join(__dirname,'../templates/components/style-webpack.module.css'),`${answers.name}/src/components/style-webpack.module.${sass?'scss':'css'}`)
     }else{
          const VCReader = fs.createReadStream(path.join(__dirname,'../templates/components/Vite.js'), {autoClose: true});
          const VCWriter = fs.createWriteStream(`${answers.name}/src/components/Vite.js`);
          VCReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            VCWriter.write(text_replaced);
        })
          fs.copyFileSync(path.join(__dirname,'../templates/components/style-vite.module.css'),`${answers.name}/src/components/style-vite.module.${sass?'scss':'css'}`)
          fs.copyFileSync(path.join(__dirname,'../templates/vite.svg'),`${answers.name}/src/assets/vite.svg`);
     }
     fs.copyFileSync(path.join(__dirname,'../templates/react.svg'),`${answers.name}/src/assets/react.svg`);
     const LogoReader = fs.createReadStream(path.join(__dirname,'../templates/components/Logo.js'), {autoClose: true});
          const LogoWriter = fs.createWriteStream(`${answers.name}/src/components/Logo.js`);
          LogoReader.on('data', chunk =>{
            const partial_text = chunk.toString();
            const text_replaced = partial_text.replace("#EXTENSION", sass?'scss':'css');
            LogoWriter.write(text_replaced);
        })
     fs.copyFileSync(path.join(__dirname,'../templates/components/Logo.js'),`${answers.name}/src/components/Logo.js`)
     fs.copyFileSync(path.join(__dirname,'../templates/components/style-react.module.css'),`${answers.name}/src/components/style-react.module.${sass?'scss':'css'}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/.eslintrc.json'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/.gitignore'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/Logo.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/Webpack.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/stylelogo.module.'.yellow}${sass?'scss'.yellow:'css'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/stylewebpack.module.'.yellow}${sass?'scss'.yellow:'css'.yellow}`)
     
}

module.exports = {baseFiles};