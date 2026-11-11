const http = require('http');
const port = process.env.PORT || 10000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello from Render</h1><p>Free Hobby plan test.</p>');
});
server.listen(port, () => console.log('Listening on ' + port));
