const express = require('express');
const app = express();

const port = 3000;

const games = [
    'GTA V',
    'Halflife',
    'Detroit become human',
    'Top Gear',
    'Mortal Kombat',
    'Sonic',
    'Super Mario'
]

// const msg = 'Bem vindo, amigo!'

const msgInicio = [
    'Bem vindos',
    'Olá amigos, bem vindos ao servidor',
    'Servidor de jogos',
    'Este é meu servidor'
]

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function frase(num) {
    return msgInicio[num];
}

app.get('/', (req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,3))}</h1>`);
});

games.forEach(function(item, indice) {
    console.log(item, indice);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id-1;
    const game = games[id];
    if (id > games.length-1 || id < 0) {
        res.send("ID inválido, tente novamente!")
    } else {
    res.send(game);
    }
})

console.log('Tamanho da lista: ', games.length);

app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}`)
});