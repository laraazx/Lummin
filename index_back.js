const http = require('http');

const hostName = '127.0.0.1';
const port = 3005;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostName, () => {
    console.log("Servidor rodando na porta 127.0.0.1:3005")
});