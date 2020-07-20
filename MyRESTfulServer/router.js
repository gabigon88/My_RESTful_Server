function route(handle, pathname, response, postData) {
  console.log(`[Route] a request for ${pathname}`);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log(`No request handler found for ${pathname}`);
    response.statusCode = 404;
    response.setHeader = ('content-Type', 'text/plain');
    response.end("404 Not found");
  }
}

exports.route = route;