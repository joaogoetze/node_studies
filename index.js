const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(`Erro: ${error}`);
    });