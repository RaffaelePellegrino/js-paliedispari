// let parola=prompt("inserire una parola").toLowerCase();

// while(parola.length < 2 || !isNaN(parola)){
//     parola=prompt("inserire una parola").toLowerCase();
// }

// function palidroma(elemento){
//     let checker = ''

//     for(let i= elemento.length-1; i >= 0; i--){
//         checker += elemento[i]
//     }
//     console.log(checker)
//     if(checker === elemento){
//         console.log('la parola è palidroma')
//     }else{
//         console.log('la parola non è palidroma')
//     }
// }

// palidroma(parola);

let scelta = prompt("scegli pari o dispari?").toLowerCase();

while (scelta !== "pari" && scelta !== "dispari"){
    scelta=prompt("La scelta non è valida").toLowerCase();
}

let numUser = parseInt(prompt("inserisci un numero da 1 a 5"));

while(numUser <= 0 || numUser > 5 || isNaN(numUser)) {
    numUser = parseInt(prompt("inserisci un numero da 1 a 5"));
}

function randomizer(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

let numRandom = randomizer(1,5);
console.log('la scelta del computer è: ', numRandom);

let risultatoPartita = ""

function giocoNumeri(numeroUser, numerComputer){
    let somma = 0;
    somma += numeroUser + numerComputer
    if (somma % 2 == 0){
        console.log("la somma è ", somma)
        risultatoPartita = "pari"
        return risultatoPartita;
    }else{
        console.log("la somma è ", somma)
        risultatoPartita = 'dispari'
        return risultatoPartita;
    }
}

giocoNumeri(numUser, numRandom)

if(risultatoPartita === scelta){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}