const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/articlesController');
const usersController = require('./user/UserController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./user/User');

app.set('view engine', 'ejs');

app.use(session({
    secret: "fjdklasfdasjlkfdjas",
    cookie: {
        maxAge: (40 * 60 * 1000)
    }
}))

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection.authenticate().then(()=> {
    console.log('Conectado');
}).catch((error) => {
    console.log(error);
})

app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', usersController);

app.get('/session', (req, res) => {
    req.session.treinamento = "Formação";
    req.session.ano = 2019;

    res.send('Sessao gerada');
});

app.get('/leitura', (req, res) => {
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano
    })
})

app.get('/', (req, res) => {

    Article.findAll({ order: [['id', 'desc']], limit: 4}).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', { articles, categories });
        });
    })
});

app.get('/:slug', (req, res) => {
    var slug = req.params.slug;

    Article.findOne({
        where: {
            slug
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render('article', { article, categories });
            });
        } else {
            res.redirect('/');
        }
        
    }).catch(erro => {
        res.redirect('/');
    })
});

app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug
        }, 
        include: [ { model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', { categories, articles: category.articles })
            })
        } else {
            res.redirect('/');
        }
    }).catch(erro => {
        res.redirect('/');
    })
})


app.listen(8080, ()=> {
    console.log('Rodando');
});