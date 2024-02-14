//importando a biblioteca express
const express = require('express');
//atribuindo a uma variável a função do express
const app = express();
//caminho relativo
const path = require('path');
//criando router para as rotas
const router = express.Router();

//criando função de rota
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
    console.log(__dirname);
    console.log("index");
});

//criando outra rota
router.get('/sobre', function(request, response) {
    console.log("Sobre");
    response.sendFile(path.join(__dirname + '/sobre.html'));
});

router.get('/contact', function(req, res) {
    console.log("Contatos");
    res.sendFile(path.join(__dirname + '/contact.html'))
})

//perguntar pro professor
app.use(express.static(__dirname));

app.use('/', router);
app.listen(process.env.port || 3006);

console.log("Servidor rodando na porta 127.0.0.1:3006");