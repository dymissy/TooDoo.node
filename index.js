/**
 * TooDoo bootloader
 *
 * @type {exports|*}
 */
"use strict";

var config = require('./lib/config-loader.js'),
    TooDoo = require('./application/toodoo.js');

// If no env is set, default to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

config.loadConfig().then(function () {
    TooDoo = new TooDoo();
    TooDoo.init();
}).otherwise(function () {
        //TODO: handle error
        console.log('an error occurred while attempting to load config file');
    });
