let parola=prompt("inserire una parola").toLowerCase();

while(parola.length < 2 || !isNaN(parola)){
    parola=prompt("inserire una parola").toLowerCase();
}

function palidroma(elemento){
    let checker = ''

    for(let i= elemento.length-1; i >= 0; i--){
        checker += elemento[i]
    }
    console.log(checker)
    if(checker === elemento){
        console.log('la parola è palidroma')
    }else{
        console.log('la parola non è palidroma')
    }
}

palidroma(parola);