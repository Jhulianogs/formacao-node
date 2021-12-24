const { writer } = require('repl');
const HtmlParser = require('./HtmlParser');
const PdfWriter = require('./PdfWriter');
const Processor = require('./Processor');
const Reader = require('./Reader');
const Table = require('./Table');
const Writer = require('./Writer');

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./lista.csv");
    console.log(dados);

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.RowCount);
    console.log(usuarios.ColumnCount);
    // usuarios.rows.push(['Soares', "PHP 7", "PHP", 2]);
    
    console.log(usuarios.RowCount);
    console.log(usuarios);

    var html = await HtmlParser.Parse(usuarios);


    escritor.Write(Date.now() +'-htmlgerado.html', html);
    PdfWriter.WritePDF(Date.now() +'-htmlgerado.pdf', html);
}

main();