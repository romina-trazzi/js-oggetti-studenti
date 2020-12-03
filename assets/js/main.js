
/*===================================================
=            CODICE OGGETTI STUDENTI JS            =
====================================================*/

/* Creare un oggetto che descriva uno studente con le seguenti proprietà: 
nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti.
Ciclare tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età. */

$ (function () {

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


    //  Creiamo un array composto da oggetto-studenti

    var arrayStudents = [
        {
            nome: "Raffaele",
            cognome: "Baldassarre",
            età: 25
        },
        {
            nome: "Veronica",
            cognome: "Laviani",
            età: 26
        },
        {
            nome: "Romina",
            cognome: "Trazzi",
            età: 27
        }
    ]

    // Ciclare tutti gli studenti e stampare per ognuno nome e cognome
    for (i = 0; i < arrayStudents.length; i++) {
        console.log(arrayStudents[i].nome);
        console.log(arrayStudents[i].cognome);
        console.log(arrayStudents[i].età);
    }

    /*  (Per stampare tutto anche le chiavi dell'oggetto)
    for (i = 0; i < arrayStudents.length; i++){
        for (var key in arrayStudents[i]) {
            console.log(key + " " + arrayStudents[i] [key]);
        }

    } */

    // Inserire nell'array nuovi dati tramite prompt (creiamo un altro oggetto)

    function nuovoStudente () {

        var newStudent = {
            nome: prompt("Inserisci un nuovo nome studente"),
            cognome: prompt("Inserisci un nuovo cognome studente"),
            età: Number(prompt("Inserisci l'età del nuovo studente"))
        }
        arrayStudents.push(newStudent);

        return arrayStudents

    }

    console.log(arrayStudents); // Array con nuovi elementi
    
    var list = document.getElementById("lista");

    list.innerHTML = arrayStudents;


})
