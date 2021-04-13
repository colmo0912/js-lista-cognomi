// chiedo all'utente il cognome con un prompt e lo salvo su una variabile

var cognomeUtente =prompt("scrivi il tuo cognome");


if (cognomeUtente === ""){
    
    alert("contenuto vuoto, scrivi un cognome")
}else {


//scrivo array di cognomi
console.log(cognomeUtente)

var cognomi = 
["Bianchi", 
"Neri",
"Rossi", 
"Verdi", 
"Gialli"]

// e lo stampo in console
// console.log(cognomi)

//aggiungo il cognome inserito dall'utente dentro l'array
cognomi.push(cognomeUtente);
console.log(cognomi)



//uso il metodo sort per mettere in ordine alfabetico le componenti degli array
console.log(cognomi.sort());
var posizioneCognome = (cognomi.indexOf(cognomeUtente));


var i =0

while ( i<cognomi.length){

    var cognomiLista = document.getElementById("cognome")

    cognomiLista.innerHTML+="<li>" + cognomi[i] + "</li>" 
    i++
}

//scrivo la posizione del cognome in forma umana

document.getElementById("paragrafo").innerHTML="La posizione di " + cognomeUtente  + " è la numero "+ (posizioneCognome +1)

}