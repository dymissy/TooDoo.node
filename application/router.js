/**
 * Route the request
 *
 * @param pathname
 */

"use strict";

function route(pathname, response) {
    //TODO: manage routing for static content


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request for " + pathname + " received.");
    response.end();
}

exports.route = route;