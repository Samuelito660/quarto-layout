//Qui scriviamo il codice Js



let firstName = prompt("Qual è il tuo nome?")


while(firstName === null){

    firstName = prompt("Qual è il tuo nome?")

}

//metodo alternativo per fare la verifica del nome
/*if (firstName === null) {

    do{

        firstName = prompt("Qual è il tuo nome?")

    }while(firstName === null)

}*/

    

let cont = 0

alert("Benvenuto " + firstName)
alert("Adesso ti faremo delle domande di cultura generale")
alert("-----------------")
alert("Domanda numero 1 -->")
let d1 = prompt("Qual è la capitale dell'Australia?")
d1 = d1.trim()
d1 = d1.toLowerCase()

if(d1 != 'canberra'){

    alert("Sbagliato! La risposta corretta è canberra")
}
else{cont = cont + 1
    alert("Corretto!")
}



alert("-----------------")
alert("Domanda numero 2 -->")
let d2 = prompt("A quale città appartiene il Chelsea Football Club?")
d2 = d2.trim()
d2 = d2.toLowerCase()

if(d2 != 'londra'){

    alert("Sbagliato! La risposta corretta è londra")
}
else{cont = cont + 1
    alert("Corretto!")
}



alert("-----------------")
alert("Domanda numero 3 -->")
let d3 = prompt("Qual è il nome del Martello di Thor?")
d3 = d3.trim()
d3 = d3.toLowerCase()

if(d3 != 'mjolnir'){

    alert("Sbagliato! La risposta corretta è mjolnir")
}
else{cont = cont + 1
    alert("Corretto!")
}



alert("-----------------")
alert("Domanda numero 4 -->")
let d4 = prompt("Qual è il primo libro della Bibbia?")
d4 = d4.trim()
d4 = d4.toLowerCase()

if(d4 != 'genesi'){

    alert("Sbagliato! La risposta corretta è genesi")
}
else{cont = cont + 1
    alert("Corretto!")
}




alert("-----------------")
alert("Domanda numero 5 -->")
let d5 = prompt("Dove è nato Cristoforo Colombo?")
d5 = d5.trim()
d5 = d5.toLowerCase()

if(d5 != 'genova'){

    alert("Sbagliato! La risposta corretta è genova")
}
else{cont = cont + 1
    alert("Corretto!")
}






alert("-----------------")
alert("Domanda numero 6 -->")
let d6 = prompt("Quale artista ha dipinto il soffitto della Cappella Sistina a Roma?")
d6 = d6.trim()
d6 = d6.toLowerCase()

if(d6 != 'michelangelo'){

    alert("Sbagliato! La risposta corretta è michelangelo")
}
else{cont = cont + 1
    alert("Corretto!")
}




alert("-----------------")
alert("Domanda numero 7 -->")
let d7 = prompt("Qual'è il gioco più giocato del 2024?")
d7 = d7.trim()
d7 = d7.toLowerCase()

if(d7 != 'brawl stars'){

    alert("Sbagliato! La risposta corretta è brawl stars")
}
else{cont = cont + 1
    alert("Corretto!")
}








//prompt è una funzione che chiede un'input all'utente e funziona
// - restituisce un valure -> posso fare un'assegnazione
// - di default restuituisce una stringa


// alert mostra un pop up nella finestra del brawser; è blocca
//alert("Benvenuto" + firstName)

// console.log() logga in console il messaggio passato come alert
//console.log("Benvenuto" + firstName)

