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
        var pathname = url.parse(request.url).pathname.substring(1);

        router.route(request, response, pathname);
    }).listen(server.port);
}
exports.start = start;