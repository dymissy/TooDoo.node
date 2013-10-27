/**
 * TooDoo bootloader
 *
 * @type {exports|*}
 */

var config = require('./lib/configLoader.js');

// If no env is set, default to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

config.loadConfig().then(function () {
    console.log('config loaded');
}).otherwise(function () {
        //TODO: handle error
        console.log('an error occurred while attempting to load config file');
    });
