var database = require('./database');


//INSERT
// var dados = [
//     {
//         nome: 'Portal',
//         preco: 17.6
//     },
//     {
//         nome: 'COF',
//         preco: 37.6
//     }];

// database.insert(dados).into("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// SELECT
// database.select().into('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// database.select('id').into('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
// database.select(['id', 'preco']).into('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// database.insert({nome: 'Black Mesa', preco: 84.9}).into('games').then(data => {
//     console.log(data);
//     database.select(['id', 'nome']).into('games').where({'id': data}).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })

// WHERE
// database.where({nome: 'Portal'}).table('games').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// var query = database.where({ nome: 'Black Mesa'}).table('games').whereRaw('preco > 12.8');
// console.log(query.toQuery());

// RAW
// database.raw('SELECT FORMAT(coalesce(sum(preco), 0), 2) as total from games').then(sum => {
//     console.log(sum);
// }).catch(err => {
//     console.log(err);
// })

//DELETE
// database.where({id: 8}).table('games').delete().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// UPDATE
// database.where({id: 5}).table('games').update({'preco': 14.6}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// database.where({nome: 'Black Mesa'}).table('games').update({'preco': 92.6}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

//ORDER BY
// database.select().table('games').orderBy('preco', 'asc').orderBy('nome', 'asc').then(data => {
//     console.log(data);
// })

// RELATIONS
// database.insert({nome: 'Valve', game_id: 1}).table('estudios').then(data => {
//     console.log(data);;
// }).catch(err => {
//     console.log(err);
// })

// database.select(['games.id as gameId', 'preco', 'games.nome as gameName', 'estudios.nome as estudioName'])
//     .table('games').innerJoin('estudios', 'estudios.game_id', 'games.id')
//     .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// database.select(['games.id as gameId', 'preco', 'games.nome as gameName', 'estudios.nome as estudioName'])
//     .table('games').innerJoin('estudios', 'estudios.game_id', 'games.id')
//     .where('games.id', ">", 2)
//     .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// database.select(['games.id as gameId', 'preco', 'games.nome as gameName', 'estudios.nome as estudioName'])
//     .table('games').leftJoin('estudios', 'estudios.game_id', 'games.id')
//     .where('games.id', ">", 2)
//     .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// 1 to M
// database.select(['games.*', 'estudios.nome as estudio_nome']).table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then(data => {
//     var estudioGamesArray = data;
//     var game = {
//         id: 0,
//         nome: '',
//         estudios: []
//     };

//     game.id = data[0].id;
//     game.nome = data[0].nome;

//     data.forEach(estudio =>{
//         game.estudios.push({nome: estudio.estudio_nome})
//     })
//     console.log(game);
// }).catch(err => {
//     console.log(err);
// })

// database.select().table('agencies_games').innerJoin('games', 'games.id', 'agencies_games.game_id')
//     .where({id: 3})
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// database.select().table('agencies').rightJoin('agencies_games','agencies_games.agency_id', 'agencies.id')
// .groupBy('agencies.nome')
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// Saber a(s) agencia(s) que desenvolveu(ram) o jogo Portal
// database.select([/*'g.nome', 'g.id', 'g.preco', */'a.nome as estudio']).table('games as g').where({'g.nome': 'Portal'})
//     .innerJoin('agencies_games as ag', 'ag.game_id', 'g.id')
//     .innerJoin('agencies as a', 'a.id', 'ag.agency_id')
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })

//TRANSACTIONs

// async function testeTransacao() {
//     try {
        
//         await database.transaction(async trans => {
//             await database.insert({nome: 'GameStore'}).table('agencies');
//             await database.insert({nome: 'Pixell'}).table('agencies');
//             await database.insert({nome: 'Mart Pixell'}).table('agencies');
//             await database.insert({nome: 'Sup Pixell'}).table('agencies');

//         });
        
//     }catch(err) {
//         console.log(err);
//     }
// }

// testeTransacao();