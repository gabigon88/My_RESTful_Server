var querystring = require("querystring");

function info(response, postData) {
  console.log("[Request handler] INFO was called.");
    response.statusCode = 200;
    response.setHeader = ('content-Type', 'text/plain');
    response.end('This is my simple RESTful server.');
}

function get(response, postData) {
  console.log("[Request handler] GET was called.");
  response.statusCode = 200;
  response.setHeader = ('content-Type', 'text/plain');
  // 對資料庫做 讀取資料 行為
  var personDict = querystring.parse(postData);
  response.write(`[GET] Name:${personDict.Name}, ID:${personDict.ID}`);
  response.end();
}

function post(response, postData) {
  console.log("[Request handler] POST was called.");
  response.statusCode = 201;
  response.setHeader = ('content-Type', 'text/plain');
  // 對資料庫做 新增資料 行為
  var personDict = querystring.parse(postData);
  response.write(`[POST] Name:${personDict.Name}, ID:${personDict.ID}`);
  response.end();
}

function patch(response, postData) {
  console.log("[Request handler] PATCH was called.");
  response.statusCode = 200; // 本該用204，但statusCode=204時，會將回傳值消除
  response.setHeader = ('content-Type', 'text/plain');
  // 對資料庫做 更新資料 行為
  var personDict = querystring.parse(postData);
  response.write(`[PATCH] Name:${personDict.Name}, ID:${personDict.ID}`);
  response.end();
}

// delete是保留字，全部用大寫避開
function DELETE(response, postData) {
  console.log("[Request handler] DELETE was called.");
  response.statusCode = 200; // 本該用204，但statusCode=204時，會將回傳值消除
  response.setHeader = ('content-Type', 'text/plain');
  // 對資料庫做 刪除資料 行為
  var personDict = querystring.parse(postData);
  response.write();
  response.end();
}

exports.info = info;
exports.get = get;
exports.post = post;
exports.patch = patch;
exports.delete = DELETE;