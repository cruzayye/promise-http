const http = require('http');
const app = require('./lab/lib/app');

http.createServer(app).listen(7890);


//////******** NOTES FOR SELF */
// const { parse } = require('url');
/////creating a server with specific links
// http.createServer((req, res) => {
//   const url = parse(req.url, true);
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   if(url.pathname === '/birthday'){
//     res.write('HAPPY BIRTHDAY!');

//   } else if(url.pathname === '/other'){
//     res.write('its not your bday!');
//   }
//   res.end();
// }).listen(3000);

//////////creating a simple server with no specific url
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   res.write('Hello World!');
//   res.end();
// }).listen(3000);
