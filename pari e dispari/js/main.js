// utente deve scegliere pari o dispari e scegliere un numero che vada da 1 a 5 prima di giocare

choiseEvenOrOdd = prompt ('Pari o dispari?');

userNumber = parseInt (prompt ('Scegli un numero da 1 a 5'));

// generare numero casuale per il computer

function generatorNumber (){
    return Math.floor(Math.random() * 5 + 1);
};

function isEven(e){
    return e % 2 == 0;
}

// somma dei numeri usciti utente e cpu

const aINumber = generatorNumber();

const sumNumbers = userNumber + aINumber ;

// stabilire il numero che è uscito ed in base al numero chi ha vinto

if (isEven (sumNumbers) && (choiseEvenOrOdd == 'pari')){
    console.log ('Hai vinto');
} else if (!isEven (sumNumbers) && (choiseEvenOrOdd == 'dispari')){
    console.log ('Hai vinto')
} else {
    console.log ('Hai perso')
}
// Dichiariamo chi ha vinto.