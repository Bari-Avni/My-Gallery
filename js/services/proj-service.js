'use strict'


var gProjs = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Minesweeper game',
        desc: 'The fun Minesweeper game',
        url: 'minesweeper.jpg',
        publishedAt: ' january 21,2021',
        labels: ['game', 'fun']
    },
    {
        id: 'chess',
        name: 'Chess',
        title: 'Chess game',
        desc: 'Good to know Chess',
        url: 'chess.jpg',
        publishedAt: ' january 17,2021',
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
