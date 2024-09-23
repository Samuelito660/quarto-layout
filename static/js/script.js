//Qui scriviamo il codice Js



let firstName = prompt("Qual è il tuo nome?")


let cont = 0

alert("Benvenuto " + firstName)
alert("Adesso ti faremo delle domande di cultura generale")
alert("-----------------")
alert("Domanda numero 1")
let d1 = prompt("Qual è la capitale dell'Australia?")
d1 = d1.trim()
d1 = d1.toLowerCase()

if(d1 != 'canberra'){

    alert("Sbagliato! La risposta corretta è canberra")
}
else{cont = cont + 1}
alert("Corretto!")



let d2 = prompt("A quale città appartiene il Chelsea Football Club?")
d2 = d2.trim()
d2 = d2.toLowerCase()

if(d2 != 'londra'){

    alert("Sbagliato! La risposta corretta è londra")
}
else{cont = cont + 1}




let d3 = prompt("Qual è il nome del Martello di Thor?")
d3 = d3.trim()
d3 = d3.toLowerCase()

if(d3 != 'mjolnir'){

    alert("Sbagliato! La risposta corretta è mjolnir")
}
else{cont = cont + 1}



//prompt è una funzione che chiede un'input all'utente e funziona
// - restituisce un valure -> posso fare un'assegnazione
// - di default restuituisce una stringa


// alert mostra un pop up nella finestra del brawser; è blocca
//alert("Benvenuto" + firstName)

// console.log() logga in console il messaggio passato come alert
//console.log("Benvenuto" + firstName)

