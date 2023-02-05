const fs = require('fs');
const path = require('path');

const jsonVite = (answers) => {
    const name = answers.name.toLowerCase()
    const dependencies= {
        "react": "^18.1.0",
        "react-dom": "^18.1.0",
      }
    const devDependencies = {
      "@types/react": "^18.0.27",
      "@types/react-dom": "^18.0.10",
      "@vitejs/plugin-react": "^3.1.0",
      "vite": "^4.1.0",
    }
      answers.install.forEach(library =>{
        
        switch(library){
          case 'redux': dependencies['react-redux']="^8.0.2"
                        dependencies['@reduxjs/toolkit']="^1.8.3"
                break;
          case 'react-router-dom': dependencies['react-router-dom']="^6.3.0"   
                break;
          case 'axios': dependencies['axios']="^0.27.2" 
                break;
          case 'react-hook-form': dependencies['react-hook-form']="^7.32.2"
                break;
          case 'react-error-boundary': dependencies['react-error-boundary']="^3.1.4"
                break;
          case 'eslint': devDependencies['eslint']= "^8.14.0"
                         devDependencies['eslint-config-standard']= "^17.0.0"
                         devDependencies['eslint-plugin-import']= "^2.26.0"
                         devDependencies['eslint-plugin-n']= "^15.2.0"
                         devDependencies['eslint-plugin-promise']= "^6.0.0"
                         devDependencies['eslint-plugin-react']= "^7.29.4" 
                break;
        }
      })

      const jsonDependencies = JSON.stringify(dependencies,null,2)
      const jsonDevDependencies = JSON.stringify(devDependencies,null,2)

      const html_read = fs.createReadStream(path.join(__dirname,`../templates/json/vite/package.txt`), {
        autoClose: true,
      });
    const html_write = fs.createWriteStream(`${answers.name}/package.json`);
      html_read.on("data", chunk => {
        const partial_text = chunk.toString();
        const text_replaced = partial_text.replace("app-name", name)
        .replace("dependencies-json",jsonDependencies)
        .replace("devDependencies-json",jsonDevDependencies);
        html_write.write(text_replaced);
    });
          console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/package.json'.yellow}`)

}


module.exports={jsonVite}