const { Command } = require('commander');
const generateFile = require('../lib/generate');
const program = new Command();

program
  .command('generate feature <name>')
  .description('Generate a new CRUD component')
  .action((name) => {
    console.log('Generating feature:', name);
    // generateFile(name);
  });

program.parse(process.argv);
