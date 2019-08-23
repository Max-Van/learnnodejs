const http = require('http');
const mmm = require('./config').config3;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(mmm.port, mmm.hostname, () => {
    console.log(`Server running at http://${mmm.hostname}:${mmm.port}/`);
});