const { Command } = require('commander');
const generateFile = require('../lib/generate');
const program = new Command();

program
  .command('generate <type> <name>')
  .description('Generate a new CRUD component')
  .action((type, name) => {
    generateFile(type, name);
  });

program.parse(process.argv);
