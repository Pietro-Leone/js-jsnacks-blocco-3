const arrayNumber = [];

for (let i = 0; i < 50; i++) {
    const n = Math.floor(Math.random() * 100);
    arrayNumber.push(n);

    if (n % 2 === 0) {
        document.getElementById("green").innerHTML += `${n} <br>`;
        console.log(`${n} è pari`);
    }
    else {
        document.getElementById("red").innerHTML += `${n} <br>`;
        console.log(`${n} è dispari`);
    }
}
console.log(arrayNumber);