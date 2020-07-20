var http = require("http");
var url = require("url");

const hostName = 'localhost';
const port = 9527;

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname.toUpperCase()} received.`);

    request.setEncoding("utf8");

    request.on("data", function(postDataChunk) {
      postData += postDataChunk;
    });

    request.on("end", function() {
      console.log(`Received data is ${postData}.`)
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(port, hostName);
  console.log(`The server is listening on http://${hostName}:${port}.`);
}

exports.start = start;