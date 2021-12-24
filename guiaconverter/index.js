const fs = require("fs");

// fs.readFile('./guiaconverter/arquivo.readme', { encoding: 'utf-8'}, (erro, dados) => {
//     if (erro) {
//         console.log('Falhou', erro);
//     } else {
//         console.log(dados);
//     }
// });


// fs.writeFile('./guiaconverter/arquivo.readme', 'Novo texto a ser adicionado', (erro) => {
//     if(erro)
//         console.log(erro);
// })

fs.readFile('./guiaconverter/usuario.json', { encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log("Falhou erro: ", err);
    } else {
        var conteudo = JSON.parse(data);
        console.log(conteudo);
        conteudo.nome = "Marta";

        console.log(conteudo);

        fs.writeFile('./guiaconverter/usuario.json', JSON.stringify(conteudo), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Salvo');
            }
        })
    }
})