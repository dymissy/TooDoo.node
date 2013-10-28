/**
 * Route the requests
 */

"use strict";

/**
 * Route the single request
 *
 * TODO: route static content
 *
 * @param pathname
 * @param response
 */
function route(pathname, response) {

    var controller,
        model,
        action,
        queryString,
        queryParts;

    queryParts = pathname.split('/');
    controller = queryParts.shift();
    action = queryParts.shift();
    model = controller;
    queryString = queryParts;

    console.log(controller, action, model, queryString);
    //load the controller


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request for " + pathname + " received.");
    response.end();
}

exports.route = route;