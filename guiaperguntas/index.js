const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
const connection = require('./database/database');
connection.authenticate().then(() => {
    console.log('Conectado');
}).catch((msgErro) => {
    console.log(msgErro);
})


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {    
    Pergunta.findAll({ raw: true, order: [['id', 'desc']] }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    })
    // res.send('Bem vindo');
});

app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id;

    Pergunta.findOne({ 
        where: { id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({ raw: true, order: [['id', 'desc']], where: {
                perguntaId: pergunta.id
            }}).then((respostas) => {
                res.render('pergunta', {pergunta, respostas})
            })
            
        } else {
            res.redirect('/');
        }
    })
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
    // res.send('FormRecebido' + titulo + ' - ' + descricao);
});

app.post('/responder', (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({
        corpo,
        perguntaId
    }).then(() => {
        res.redirect('/pergunta/'+perguntaId);
    })
});


app.get('/perguntar', (req, res) => {
    res.render('perguntar');
})
app.listen('4000', ()=>{ console.log('App rodando');});