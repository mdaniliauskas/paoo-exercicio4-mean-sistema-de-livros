const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//     console.log('Chegou uma requisição');
//     next();
// });

app.use(bodyParser.json());

const livros = [
    {   
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        paginas: '456'
    },
    {
        id: 2,
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        paginas: '456'
    }
]

// app.use ((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

//     next();
// })

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
});

app.post ('/api/livros', (req, res, next) => {
    const livro = req.body
    console.log(livro);
    res.status(201).json({mensagem: 'Livro inserido com sucesso'});
});
    

app.use('/api/livros',(req, res, next) => {
    res.status(200).json({
    mensagem: "Tudo OK", 
    livros: livros
});
});

module.exports = app;