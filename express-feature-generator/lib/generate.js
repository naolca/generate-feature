const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const generateFile = (name) => {
  const directories = {
    controller: 'Controllers',
    route: 'Routes',
    service: 'Services',
    repository: 'Repositories',
    model: 'Models',
  };

  Object.keys(directories).forEach((type) => {
    const templatePath = path.join(__dirname, '../templates', `${type}.ejs`);
    const directoryPath = path.join(process.cwd(), directories[type]);

    // Ensure the directory exists
    fs.ensureDirSync(directoryPath);

    const outputPath = path.join(directoryPath, `${name}.${type}.js`);

    ejs.renderFile(templatePath, { name }, (err, result) => {
      if (err) {
        console.error("Error rendering file:", err);
        return;
      }

      fs.outputFileSync(outputPath, result, { flag: 'w' }); // Use 'w' flag to overwrite existing files
      console.log(`${type} generated at ${outputPath}`);
    });
  });

};

module.exports = generateFile;