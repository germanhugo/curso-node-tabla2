//const { argv } = require('yargs');
const { boolean } = require('yargs');
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                demandOption: true,
                default: '/etc/passwd',
                describe: 'base para multiplicar',
                type: 'number'
            })
            .check((argv,options) => {
                if( isNaN(argv.b)){
                    throw 'La base tiene que ser un número';
                }
                return true
            })
            .option('l',{
                alias: 'listar',
                demandOption: false,
                type: 'boolean',
                default: 'true',
                describe: 'listar en pantalla?'
            })
            .option('h',{
                alias: 'hasta',
                demandOption: true,
                type: 'number',
                describe: 'hasta que número multiplico'
            })
            .check((argv,options) => {
                if( isNaN(argv.h)){
                    throw 'Debe indicar hasta que número llegará la tabla';
                }
                return true
            })
            .argv;



module.exports = argv;