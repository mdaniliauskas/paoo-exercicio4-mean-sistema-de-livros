const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('Chegou uma requisição');
//     next();
// });

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

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

    next();
})
    

app.use('/api/livros',(req, res, next) => {
    res.status(200).json({mensagem: "Tudo OK", objLivros: livros});
});

module.exports = app;