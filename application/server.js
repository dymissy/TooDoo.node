/**
 * Application Server
 *
 * @type {exports|*}
 */

"use strict";

var http = require("http"),
    url = require("url"),
    router = require("./router.js");

function start(server) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;

        router.route(pathname, response);
    }).listen(server.port);
}
exports.start = start;