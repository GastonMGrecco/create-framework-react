const fs = require('fs');
const path = require('path');

const baseFiles = (answers) => {
     //Copyng required files base
     const redux = answers.install.find(library  => library === 'redux');
     const eslint = answers.install.find(library  => library === 'eslint')
     if(redux) {
          fs.copyFileSync(path.join(__dirname,'../templates/components/CounterRedux.js'),`${answers.name}/src/components/Counter.js`)
     }else{
          fs.copyFileSync(path.join(__dirname,'../templates/components/CounterUseState.js'),`${answers.name}/src/components/Counter.js`)
     }
     fs.copyFileSync(path.join(__dirname,'../templates/components/style-counter.module.css'),`${answers.name}/src/components/style-counter.module.css`)
     if(eslint){
          fs.copyFileSync(path.join(__dirname,'../templates/base/.eslintrc.json'),`${answers.name}/.eslintrc.json`)
     }
     fs.copyFileSync(path.join(__dirname,'../templates/base/gitignore.txt'),`${answers.name}/.gitignore`)
     if(answers.builder === 'webpack'){
          fs.copyFileSync(path.join(__dirname,'../templates/components/Webpack.js'),`${answers.name}/src/components/Webpack.js`)
          fs.copyFileSync(path.join(__dirname,'../templates/components/style-webpack.module.css'),`${answers.name}/src/components/style-webpack.module.css`)
     }else{
          fs.copyFileSync(path.join(__dirname,'../templates/components/Vite.js'),`${answers.name}/src/components/Vite.js`)
          fs.copyFileSync(path.join(__dirname,'../templates/components/style-vite.module.css'),`${answers.name}/src/components/style-vite.module.css`)
          fs.copyFileSync(path.join(__dirname,'../templates/vite.svg'),`${answers.name}/src/assets/vite.svg`);
     }
     fs.copyFileSync(path.join(__dirname,'../templates/react.svg'),`${answers.name}/src/assets/react.svg`);
     fs.copyFileSync(path.join(__dirname,'../templates/components/Logo.js'),`${answers.name}/src/components/Logo.js`)
     fs.copyFileSync(path.join(__dirname,'../templates/components/style-react.module.css'),`${answers.name}/src/components/style-react.module.css`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/.eslintrc.json'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/.gitignore'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/Logo.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/Webpack.js'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/stylelogo.module.css'.yellow}`)
     console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/components/stylewebpack.module.css'.yellow}`)
     
}

module.exports = {baseFiles};