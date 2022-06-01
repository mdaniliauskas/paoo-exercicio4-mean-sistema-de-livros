// console.log("Hello, NodeJS");

const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

// const server = http.createServer((req, res) => {
//     res.end('Hello from the backend');
// });
// server.listen(process.env.PORT || 3000);