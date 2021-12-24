// var option={
//     "phantomPath": "./node_modules/phantomjs/bin/phantomjs", 
//     }
var pdf = require("html-pdf");

class PdfWriter {
    static WritePDF(filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => {});
    }
}

module.exports = PdfWriter;