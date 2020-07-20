var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.info;
handle["/get"] = requestHandlers.get;
handle["/post"] = requestHandlers.post;
handle["/patch"] = requestHandlers.patch;
handle["/delete"] = requestHandlers.delete;

server.start(router.route, handle);