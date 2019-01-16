const http = require('http');
const { parse } = require('url');
const app = require('./lib/app');
// **NOTE TO SELF: 
http.createServer(app)
  .listen(7890);

// http.createServer((req, res) => {
//   const url = parse(req.url);
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   if(url.pathname === '/birthday'){
//     res.end('<html><body>Happy birthday</body></html>');
//   }
//   res.end('<html><body>Home</body></html>');
  
  

// })
// .listen(7890);