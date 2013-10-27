/**
 * TooDoo object
 */

"use strict";

var config = require('../config/config.js'),
    when = require('when'),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),

    appRoot = path.resolve(__dirname, '../'),

    TooDoo,
    instance;


TooDoo = function () {
    if (!instance) {
        instance = this;

        _.extend(instance, {
            config: config[process.env.NODE_ENV],
            paths : {
                appRoot: appRoot
            }
        });
    }

    return instance;
};

TooDoo.prototype.init = function () {
    var self = this;
    console.log(self);
};

module.exports = TooDoo;