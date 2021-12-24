function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Não consegui encontrar id");
            resolve(5)
        }, 2000);
    })
}

function buscaEmailBD(id) {
    console.log('Buscando email');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('email@teste.com')
        }, 2000);
    })
}


function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var error = false;
            console.log(`Error: ${error}`);
            console.log(`para: ${para}`);
            if(!error) {
                
                resolve({time: 6, to: para});
            } else {
                reject("Não consegui enviar");
            }
        }, 2000);
    })
}

function pegaUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'v', lang: 'js'},
                {name: 'c', lang: 'C#'},
                {name: 't', lang: 'PHP'},
            ])    
        }, 2000);
        
    })
}
// promise hell
// pegaUsuarios().then((usuarios) => {
//     console.log(usuarios);
// })

async function principal() {
    var usuarios = await pegaUsuarios();
    console.log(usuarios);
}


// principal();

async function desafio() {
    try {
        console.log('antes id');
        var id = await pegarId();

        console.log('depois id, antes email');
        var email = await buscaEmailBD(id);

        console.log('depois email, antes envio');
        // enviarEmail('Corpo', email).then((res) => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // })
        await enviarEmail('Corpo', email);
        console.log('depois envio');
    } catch(err) {
        console.log(err);
    }
}
desafio();
// pegarId().then((id) => {
//     buscaEmailBD(id).then((email) => {
        
//         enviarEmail('Corpo e-mail', email).then((res) => {
//             console.log('Enviado', id);
//         }).catch(err => {
//             console.log(err);
//         })

//     })
// })
// enviarEmail('Teste e-mail', 'email@email.com').then(({ time, to}) => {
//     console.log("FOI enviado");
//     console.log(time);
//     console.log(to);
// }).catch((err) => {
//     console.log('Falhou');
//     console.log(err);
// })