const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const generateFile = (type, name) => {
  const templatePath = path.join(__dirname, '../templates', `${type}.ejs`);
  const outputPath = path.join(process.cwd(), `${name}.${type}.js`);

  ejs.renderFile(templatePath, { name }, (err, result) => {
    if (err) throw err;

    fs.outputFileSync(outputPath, result);
    console.log(`${type} generated at ${outputPath}`);
  });
};

module.exports = generateFile;
