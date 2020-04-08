// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



var mine = [];
var numInseriti = [];
var numUtente = 0;
var max;
var numVittoria;

var difficolta = parseInt(prompt('Inserisci una difficoltà da 0 a 2'));

switch (difficolta) {
    case 0:
        max = 100
        numVittoria = 84
        break;
    case 1:
        max = 80
        numVittoria = 64
        break;
    case 2:
        max = 50
        numVittoria = 34
        break;
    default:
        alert('Scegli una difficoltà');
}

while (mine.length < 16) {
    var numMine = numeriMine(max);

    if (mine.includes(numMine) == false) {
        mine.push(numMine)
    }
}
console.log(mine);

while ((numInseriti.length < numVittoria) && (mine.includes(numUtente) !== true)) {
    numUtente = parseInt(prompt('Inserisci un numero da 1 a ' + max))

    controlloNumero(numUtente);

    if (numInseriti.length == 84) {
        alert('Hai Vinto!')
    }
}


// function
function numeriMine(max) {
    return Math.floor(Math.random() * max) + 1;
}

function controlloNumero(n) {
    if (mine.includes(n)) {
        alert('Ops, hai preso una mina!')

    } else if (numInseriti.includes(n)) {
        alert('Numero già inserito in precedenza');

    } else if (numInseriti.includes(n) == false) {
        numInseriti.push(n);

    } else if ((n < 1) || (n > 100)) {
        alert('Non inserire numeri inferiori a 1 e superiori a 100')
    }
}