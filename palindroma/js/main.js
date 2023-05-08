// dichiarazione costante
const userWord = prompt ('Scrivi una parola');

function palindromes (userWord){
    // la funzione dovrà riconoscere se la prima metà della parola è uguale alla seconda metà, in quel caso la parola sarà palindroma
    for (let index = 0; index < userWord.length / 2; index++)

    // criteri e condizioni di definizione della parola palindroma/non palindroma
    if (userWord [index] === userWord [userWord.length - 1 - index]){
        console.log ('è una parola palindroma');
    } else {
        console.log ('Non è una parola palindroma');
    }
};

alert (palindromes(userWord));