/**
 * Load config file
 *
 * @type {exports|*}
 */

var fs = require('fs'),
    url = require('url'),
    when = require('when'),
    path = require('path'),

    appRoot = path.resolve(__dirname, '../'),
    config = path.join(appRoot, 'config/config.js'),
    envVal = process.env.NODE_ENV || 'development';

exports.loadConfig = function () {
    var loaded = when.defer();
    fs.exists(config, function checkConfig(configExists) {
        if (configExists) {
            config = require(config)[envVal];
            if (config) {
                loaded.resolve();
            } else {
                loaded.reject();
            }
        } else {
            loaded.reject();
        }
    });
    return loaded.promise;
};
