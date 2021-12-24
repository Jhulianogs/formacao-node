
function enviaEmail(corpo, para, callback) {
    setTimeout(() => {
        resultado = "OK"
        callback(resultado, 5, "4s");
        
    }, 4000);
}

console.log('Processando');

function retornoEmail(res, qty, tempo) {
    if (res === 'OK') {
        console.log("Deu tudo certo");
    } else {
        console.log("Não deu certo");
    }
    console.log('Depois do envioEmail'); 
}
enviaEmail('lorem ipsum dolor', 'pessoa@email.com', retornoEmail)

console.log("Após a função");