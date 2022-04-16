var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Oi mundo ^-^');
});

var port = 3001;

//iniciando o processo do servidor
app.listen(port, function() {
    console.log(`App escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
    return a + b;
}

app.post('/somar', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function subtracao(a, b) {
    return a - b;
}

app.post('/subtrair', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

function divisao(a, b) {
    return a / b;
}

app.post('/dividir', function (req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);
    
    res.send(`O resultado da divisão de ${body.a} por ${body.b} é ${resultado}`);
});

function multiplicacao(a, b) {
    return a * b;
}

app.post('/multiplicar', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    
    res.send(`O resultado da multiplicação de ${body.a} por ${body.b} é ${resultado}`);
});