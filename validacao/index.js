var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('23iorn2478erfnilrfb28o$@dfgasdf'));
app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', (req, res) => {
    var emailError = req.flash('emailError');
    var pontosError = req.flash('pontosError') || '';
    var nomeError = req.flash('nomeError') || '';

    var email = req.flash('email') || "";
    var pontos = req.flash('pontos') || '';
    var nome = req.flash('nome') || '';

    emailError = (emailError == undefined || emailError.length == 0 ) ? undefined: emailError;
    res.render('index', {emailError, nomeError, pontosError, email, nome, pontos});
})


app.post('/form', (req, res) => {
    var { email, nome, pontos}  = req.body;

    var emailError;
    var pontosError;
    var nomeError;

    if (email == undefined || email == "") {
        emailError = "Você não pode cadastrar sem email";
    }
    if (pontos == undefined || pontos < 20) {
        pontosError = "Você tem de ter ao menos 20 pontos";
    }
     
    if (nome == undefined || nome == "") {
        nomeError = "Digite seu nome";
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        // res.send("Contem erros");
        req.flash('emailError', emailError);
        req.flash('pontosError', pontosError);
        req.flash('nomeError', nomeError);

        req.flash('email', email);
        req.flash('pontos', pontos);
        req.flash('nome', nome);

        res.redirect('/');
    } else {
        res.send("Ok. Valido");
    }
})

app.listen('4567', (req, res) => {
    console.log('Rodando');
})