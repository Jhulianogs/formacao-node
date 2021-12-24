function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000);
    })
}

function buscaEmailBD(id) {
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


pegarId().then((id) => {
    buscaEmailBD(id).then((email) => {
        
        enviarEmail('Corpo e-mail', email).then((res) => {
            console.log('Enviado', id);
        }).catch(err => {
            console.log(err);
        })

    })
})
// enviarEmail('Teste e-mail', 'email@email.com').then(({ time, to}) => {
//     console.log("FOI enviado");
//     console.log(time);
//     console.log(to);
// }).catch((err) => {
//     console.log('Falhou');
//     console.log(err);
// })