// Descrizione:
// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.

// 2 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// 3 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
// inserendo nell’ordine: nome, cognome e età.

//ESERCIZIO 1
var classe = {
    'nome' : ['Angelo', 'Marco', 'Anna', 'Francesca'],
    'cognome' : ['Mansueto', 'Costa', 'Tinelli', 'Campanella'],
    'eta' : ['21', '25', '22', '24']
}

for ( var key in classe ) {
    console.log(classe[key])
};

//ESERCIZIO 2
// for ( var i = 0; i < classe.lenght; i++ ) {
    
//     console.log(classe[i])
    
// };

 for ( var key in classe.nome ) {
    console.log(classe.nome[key])
};

for ( var key in classe.cognome ) {
    console.log(classe.cognome[key])
};

for ( var key in classe.eta ) {
    console.log(classe.eta[key])
};

console.log( "L'alunno/a " + classe.nome[key] + ' ' + classe.cognome[key] + ' ha ' + classe.eta[key] + ' anni' );

//ESERCIZIO 3

var nuovoNome = prompt('Dimmi il tuo nome')
classe.nome.push(nuovoNome);
console.log(classe.nome)

var nuovoCognome = prompt('Dimmi il tuo cognome')
classe.cognome.push(nuovoCognome);
console.log(classe.cognome)

var nuovoEta = prompt('Dimmi la tua età')
classe.eta.push(nuovoEta);
console.log(classe.eta)