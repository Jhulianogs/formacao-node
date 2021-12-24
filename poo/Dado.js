class Dado {
    constructor(faces) {
        this.faces = faces;
    }

    Rolar() {
        return Math.floor(Math.random() * this.faces) + 1;
    }
}


var faces = 6;
var dado = new Dado(faces);
for (let index = 0; index < 1000000; index++) {
    res = dado.Rolar();
    if (res > faces) {
        console.log(res);
    }
    
}