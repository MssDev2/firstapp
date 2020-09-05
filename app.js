const http = require('http');
var dt = require('./moduletest');
var url = require('url');
var fs = require('fs');

const hostname = '127.0.0.1';
//const port = 3000;
const port = 8080;

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("\n");
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('test')
});
*/
/*
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/

http.createServer(function (req, res) {

  //http://localhost:8080/summer.html
  //http://localhost:8080/winter.html
  
  var q = url.parse(req.url, true);
  var filename = '';
  
  console.log('q.pathname = ' + q.pathname)

  if (q.pathname == '/') {
    filename = "demofile1.html" }
  else {
    filename = "." + q.pathname;  }
  
  console.log('filename = ' + filename)
  
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('test')
});
