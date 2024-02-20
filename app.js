const htpp = require("http");
const fs = require("fs");

htpp
  .createServer(function (request, response) {
    let filePath = "index.html";
    if (request.url !== "/") {
      // get the path after slash
      filePath = request.url.substring(1);
    }
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Resource not found!");
      } else {
        response.end(data);
      }
    });
  })
  .listen(3000, function () {
    console.log("Server started at port http://localhost:3000");
  });
