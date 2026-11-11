const http = require("http");
const port = process.env.PORT || 3000;
const html = "<!doctype html><html><head><meta charset=\"utf-8\"><title>render-hello</title></head><body><h1>Hello from Render</h1><p>render-hello is live on the free tier.</p></body></html>";
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(port, () => console.log("listening on " + port));
