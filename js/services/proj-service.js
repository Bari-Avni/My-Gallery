'use strict'


var gProjs = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Minesweeper game',
        desc: 'The fun Minesweeper game',
        url: 'minesweeper.jpg',
        publishedAt: 1448693940000,
        labels: ['game', 'fun']
    },
    {
        id: 'chess',
        name: 'Chess',
        title: 'Chess game',
        desc: 'Good to know Chess',
        url: 'chess.jpg',
        publishedAt: 1448693940000,
        labels: ['game', 'fun']
    },
];

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return (projId === proj.id);
    })
    return proj;
}
