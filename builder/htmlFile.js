const fs = require('fs');
const path = require('path');

const htmlFile = (answers) => {
  if (answers.builder === 'webpack') {
  const html_read = fs.createReadStream(path.join(__dirname,`../templates/index-webpack.html`), {
    autoClose: true,
  });
const html_write = fs.createWriteStream(`${answers.name}/public/index.html`);
  html_read.on("data", chunk => {
    const partial_text = chunk.toString();
    const text_replaced = partial_text.replace("my-app", answers.name.toLowerCase());
    html_write.write(text_replaced);
});
  }else{
    const html_read = fs.createReadStream(path.join(__dirname,`../templates/index-vite.html`), {
      autoClose: true,
    });
  const html_write = fs.createWriteStream(`${answers.name}/public/index.html`);
    html_read.on("data", chunk => {
      const partial_text = chunk.toString();
      const text_replaced = partial_text.replace("my-app", answers.name.toLowerCase());
      html_write.write(text_replaced);
  });
}
      console.log(`${'CREATED'.green} ${'FILE'.magenta} ${answers.name.yellow}${'/public/index.html'.yellow}`)
}

module.exports = {htmlFile};