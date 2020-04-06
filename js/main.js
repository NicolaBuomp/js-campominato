// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



var mine = [];
var numInseriti = [];
var number = 0;
for (var i = 0; i < 16; i++) {
    number = Math.floor(Math.random() * 100) + 1;

    if (!mine.includes(number)) {
        mine.push(number);
    } else {
        i = i - 1;
    }
}



for (var i = 0; i < 16; i++) {

    var richiesta = parseInt(prompt('Inserisi un numero da 1 a 100'));

    if (mine.includes(richiesta)) {
        console.log("Hai perso");
        break;
    } else if (numInseriti.includes(richiesta)) {
        richiesta = parseInt(prompt('Inserisi un numero che non hai inserito in precedenza'));
    } else {
        numInseriti.push(richiesta);
    }
}

console.log(mine);
console.log(numInseriti);