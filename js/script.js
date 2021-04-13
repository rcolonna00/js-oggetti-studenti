// Descrizione:
// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// 2 Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// 3 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
// inserendo nell’ordine: nome, cognome e età.

//ESERCIZIO 1
// var studenti = [
//     {
//         'nome': 'Angelo',
//         'cognome': 'Mansueto',
//         'eta': 21
//     }
// ];

// for ( var key in studenti ) {
//     console.log(studenti)
// };

// for( var i = 0; i < studenti.length; i++ ) {
//     studentiI = studenti[i];
//     console.log(studentiI);
// };

//ESERCIZIO 2
var arrayStudenti = [
    {
        'nome': 'Angelo',
        'cognome': 'Mansueto',
        'eta': 21
    },
    {
        'nome': 'Marco',
        'cognome': 'Costa',
        'eta': 25
    },
    {
        'nome': 'Anna',
        'cognome': 'Tinelli',
        'eta': 22
    },
    {
        'nome': 'Francesca',
        'cognome': 'Campanella',
        'eta': 24
    }
];

for ( var j = 0; j < arrayStudenti.length; j++ ) {
    var arrayStudentiJ = arrayStudenti[j];
    console.log( 'Nome: ' + arrayStudentiJ.nome + ' Cognome: ' + arrayStudentiJ.cognome )
};

//ESERCIZIO 3
var nuovoNome = prompt('Dimmi il tuo nome');
var nuovoCognome = prompt('Dimmi il tuo cognome');
var nuovoEta = parseInt( prompt('Dimmi la tua età') );

var nuovoStudente = {
    'nome': nuovoNome,
    'cognome': nuovoCognome,
    'eta': nuovoEta
}

arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti)