// chiedo all'utente il cognome con un prompt e lo salvo su una variabile

var cognomeUtente =prompt("scrivi il tuo cognome");

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