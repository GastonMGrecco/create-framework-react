const fs = require('fs');
const path = require('path');

const indexFile = (answers) => {
  const redux = answers.install.find(library  => library === 'redux')

  if(redux){
    fs.mkdirSync(`${answers.name}/src/redux`,'0777',error=>(error))
    fs.mkdirSync(`${answers.name}/src/redux/slices`,'0777',error=>(error))
    fs.mkdirSync(`${answers.name}/src/redux/slices/counter`,'0777',error=>(error))
    fs.mkdirSync(`${answers.name}/src/redux/store`,'0777',error=>(error))
    fs.copyFileSync(path.join(__dirname,'../templates/redux/slices/counter/index.js'),`${answers.name}/src/redux/slices/counter/index.js`)
    fs.copyFileSync(path.join(__dirname,'../templates/redux/slices/counter/thunk.js'),`${answers.name}/src/redux/slices/counter/thunk.js`)
    fs.copyFileSync(path.join(__dirname,'../templates/redux/slices/counter/counterSlice.js'),`${answers.name}/src/redux/slices/counter/counterSlice.js`)
    fs.copyFileSync(path.join(__dirname,'../templates/redux/store/index.js'),`${answers.name}/src/redux/store/index.js`)
    fs.copyFileSync(path.join(__dirname,'../templates/index/redux_index.js'),`${answers.name}/src/index.js`)
    console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/redux'.yellow}`)
    console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/redux/slices'.yellow}`)
    console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/redux/slices/counter'.yellow}`)
    console.log(`${'CREATED'.green} ${'FOLDER'.cyan} ${answers.name.yellow}${'/src/redux/store'.yellow}`)
    console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/redux/slices/counter/index.js'.yellow}`)
    console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/redux/slices/counter/thunk.js'.yellow}`)
    console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/redux/slices/counter/counterSlice.js'.yellow}`)
    console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/redux/store/index.js'.yellow}`)
  }else{
    fs.copyFileSync(path.join(__dirname,'../templates/index/simple_index.js'),`${answers.name}/src/index.js`)
    console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/src/redux/store/index.js'.yellow}`)
  }
  
}
module.exports = {indexFile};