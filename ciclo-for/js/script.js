// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


// prendere la variabile assegnata 
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// prendere id dell'ul nell'html 
let printList = document.querySelector('#list')


// creare ciclo for per lavorare su ogni singolo elemento
for(let i = 0 ; i < list.length ; i++){

    let listElement = list[i];
    
    // inserire ogni singolo elemento dentro ul nell'html 
    printList.innerHTML += `<li>${listElement}</li>`


}

