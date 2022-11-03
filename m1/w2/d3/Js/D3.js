/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 2
const b = 5

if (a > b) {
  console.log('a è maggiore')
} else if (a === b) {
  console.log("a è uguale a b");
} else {
  console.log('b è maggiore')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero = 5;
if (numero !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const multiplo = 10
if (multiplo % 5 === 0) {
  console.log('divisibile per 5')
} else {
  console.log('non divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const f = 13
const g = 5

if (f === 8 || g === 8) {
  console.log('uno dei numeri è uguale a 8')
}

if (f + g === 8) {
  console.log('la somma dei due numeri è pari a 8')
}

if (f - g === 8) {
  console.log('la differenza tra i due numeri è pari a 8')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let total = 47

if (total > 50) {
  console.log('Hai diritto alla spedizione gratuita')
  console.log('il tuo totale è' + ' ' + (total))
} else {
  total += 10
  console.log('il tuo totale è' + ' ' + (total))
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totale = 50

totale = totale - totale / 5
if (totale > 50) {
  console.log('Hai diritto alla spedizione gratuita')
  console.log('il tuo totale è' + ' ' + (totale))
} else {
  totale += 10
  console.log('il tuo totale è' + ' ' + (totale))
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
var n1 = 14
var n2 = 18
var n3 = 10

var max = md = min = n1

if (n1 > n2) {
  md = min = n2
} else {
  max = n2
}

if (max > n3) {
  if (n3 > min) {
    md = n3;
  } else {
    min = n3;
  }
} else {
  md = max;
  max = n3;
}

console.log(max, md, min)



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const typeNome = 2

if (typeof typeNome === 'number') {
  console.log('è un numero')
} else {
  console.log('non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero2 = 4

if (numero2 % 2 === 0) {
  console.log('numero pari')
} else {
  console.log('numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 2
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}*/


const val = 2
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me.skills);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arrayNumber = []

for (let i = 1; i <= 10; i++) {
  arrayNumber.push(i)
}
console.log(arrayNumber);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayNumber[9] = 100

// alternativa

arrayNumber[arrayNumber.length - 1] = 100
console.log(arrayNumber)
/* SCRIVI QUI LA TUA RISPOSTA */
