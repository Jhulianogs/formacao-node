const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Bem-vindo');
});

app.get('/blog/:artigo?', function(req, res) {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send('Artigo:' + artigo)
    } else {
        res.send('Bem-vindo ao blog');
    }
});
app.get('/ola/:nome/:empresa', function(req, res) {
    empresa = req.params.empresa;
    nome = req.params.nome
    res.send('Oi, '+nome + ' da empresa '+empresa);
});

app.get('/canal/youtube', function(req, res) {
    
    autor = req.query['autor'];
    
    res.send('<h2>Acesso o canal no Youtube</h2><h3>Autor: '+autor+"</h2>");
});
app.listen(4000, function(erro) {
    if (erro)
    {
        console.log("Erro");
    }
    else {
        console.log('Servidor online');
    }
})