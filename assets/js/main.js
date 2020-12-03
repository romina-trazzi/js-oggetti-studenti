
/*===================================================
=            CODICE OGGETTI STUDENTI JS            =
====================================================*/

/* Creare un oggetto che descriva uno studente con le seguenti proprietà: 
nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e 
stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di 
aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età. */

// Creiamo la variabile oggetto (object literal)
var student = {
    nome: "Enea",
    cognome: "DeSantis",
    età: "25",
}

// console.log(student);


// Cicliamo l'oggetto 
for (var key in student) {
    // console.log(key); // stampa i nomi delle chiavi
    // console.log(student[key]); // stampa i valori delle chiavi
    document.getElementById("studenti").innerHTML += key + ": " + student[key] + "<br>"; // stampa entrambi 
}