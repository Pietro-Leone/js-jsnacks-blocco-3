const array = [];
let sum = 0;

do {

    const n = parseInt(prompt("Inserisci un numero da inserire all'interno dell'array"));

    sum += n;
    console.log(`inserito: ${n}`);
    array.push(n);

} while (sum < 50);

console.log(`totale = ${sum}`);