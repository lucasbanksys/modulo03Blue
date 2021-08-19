const express = require('express');          // importação do framework express
const app = express();             // estamos usando as configurações do express nesse programa
// o app vai ser a referência a partir de agora no programa

const port = 3000;

const filmes = [
    'O senhor dos anéis',
    'Eu robô',
    'Matrix'
];

// GET seria o equivalente ao Home de uma pagina ou aplicação
app.get('/',(req, res) => {
    res.send('Bem vindos ao site Lócas Filmes');
});

//GET /filmes, listando todos
app.get('/filmes', (req, res) => {
    res.send(filmes);
})


//GET /filmes, exibindo apenas o id
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id-1;
    const filme = filmes[id];
    res.send(filme);
})

app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}`) // print FORMAT
});

// node index.js  no terminal