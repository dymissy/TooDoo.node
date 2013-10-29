/**
 * Route the requests
 */

"use strict";

var fs = require('fs'),
    path = require('path'),

    controllersPath = path.join(__dirname, 'controllers'),
    modelsPath = path.join(__dirname, 'models');

/**
 * Route the single request
 *
 * TODO: route static content
 *
 * @param pathname
 * @param response
 */
function route(request, response, pathname) {

    var queryParts = pathname.split('/'),
        model = queryParts.shift(),
        action = queryParts.shift(),
        controller = model + '.js',
        queryString = queryParts,

        controllerPath = path.join(controllersPath, controller);

    fs.exists(controllerPath, function (controllerExists) {
        if (controllerExists) {
            controller = require(controllerPath);
            if (typeof controller.action === 'function') {
                controller.action();
            } else {
                //404 action not found
                console.log(action + ' does not exist');
            }
        } else {
            //404 controller not found
            console.log(controllerPath + ' does not exist');
        }

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Request for " + pathname + " received.");
        response.end();
    });
}

exports.route = route;