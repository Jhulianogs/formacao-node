const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cn = require('./database/database');
const Game = require('./database/Game');
const User = require('./database/User');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const jwtSecret = 'CA9C9CA220646EE17A2C5B5D79F82380';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

function auth(req, res, next) {
    const authToken = req.headers['authorization'];
    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, jwtSecret, (err, data) => {
            if(err) {
                res.status(404);
                res.json({err: 'Token inválido'});
            } else {
                req.token = token;
                req.loggedUser = { id: data.id, email:data.email};

                next();
            }
            
        });
    } else {
        res.status(401);
        res.json({err: 'Token inválido'});
    }
    
}

// var DB = {

//     games: [
//         {
//             id: 1,
//             title: 'Call',
//             year: 2011,
//             price: 45.5
//         },
//         {
//             id: 2,
//             title: 'Medal',
//             year: 2015,
//             price: 35
//         },
//         {
//             id: 3,
//             title: 'Sniper',
//             year: 2019,
//             price: 49.5
//         }
//     ]
// }

app.get('/games', auth, (req, res) => {
    console.log(req.loggedUser);
    res.statusCode = 200;
    Game.findAll({raw: true, order: [['id', 'desc']]}).then(games => {
        res.json(games);
    })
});

app.get('/game/:id', auth, (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.statusCode = 400;
        res.send('Não é um número');
    } else {
        var id = parseInt(id);
        Game.findOne({ where: {id}}).then(game => {
            if (game !== undefined) {
                res.json(game);
            } else {
                res.sendStatus(404);
            }
            
        }).catch(err => {
            res.sendStatus(404);
        })

        // if (game != undefined) {
        //     res.statusCode = 200;
        //     res.json(game);
        // } else {
        //     res.sendStatus(404);

        // }
    }
});


app.post('/game', auth, (req, res) => {
    // var title = req.body.title;
    // var year = req.body.year;
    // var price = req.body.price;

    
    var {title, price, year} = req.body;
    
    Game.create({
        title,
        year,
        price
    }).then(ret => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500);
    });

    // res.sendStatus(200);
    
});

app.delete('/game/:id', auth, (req, res) =>{
    var id = req.params.id;

    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(id);
        Game.destroy({ where: {id}}).then(ret => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
        });
        // var index = DB.games.findIndex(g=> g.id == id);

    }
});

app.put('/game/:id', auth, (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(id);

        Game.findOne({ where: {id}}).then(game => {
            
            if (game != undefined) {
                var {title, price, year} = req.body;

                if (title != undefined) {
                    game.title = title;
                }
                if (price != undefined) {
                    game.price = price;
                }

                if (year != undefined) {
                    game.year = year;
                }
                game.save().then(ret => {
                    res.sendStatus(200);
                }).catch(err => {
                    res.sendStatus(500);
                })
                
            } else {
                res.sendStatus(404);
            }
        }).catch(err => {
            res.sendStatus(404);
        })

        // if (game != undefined ){
        //     var {title, price, year} = req.body;

        //    if (title != undefined) {
        //        game.title = title;
        //    }
        //    if (price != undefined) {
        //     game.price = price;
        //    }

        //    if (year != undefined) {
        //     game.year = year;
        //    }
        //    res.sendStatus(200);

        // } else {
        //     res.sendStatus(404);
        // }

    }
});

app.post('/auth', (req, res) => {
    var {email, senha} = req.body;

    if (email != undefined) {
        User.findOne({
            where: {
                'email': email
            }
        }).then(user => {

            if (user != undefined) {
                if (user.senha == senha) {

                    jwt.sign({id: user.id, email: user.email}, jwtSecret, {expiresIn: '6h'}, (err, token) => {
                        if(err) {
                            res.status(400);
                            res.json({err: 'Falha'});
                        } else {
                            res.status(200);
                            res.json({token: token});
                        }
                    });

                } else {
                    res.status(401);
                    res.json({err: 'Credenciais inválida'});
                }
            } else {
                res.status(404);
                res.json({err: 'Email não encontrado'});
            }
        })
    } else {
        res.status(400);
        res.json({err: 'Email invalido'});
    }
})

app.listen(4567, () => {
    console.log('Api em funcionamento');
})