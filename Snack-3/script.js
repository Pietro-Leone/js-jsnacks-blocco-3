const N = parseInt(prompt("Quanti array vuoi creare?"));
let array = [];

for (let i = 1; i <= N; i++) {
    array = [];
    for (let x = 0; x < 10; x++) {
        const random = Math.floor(Math.random() * 100) + 1;
        array.push(random);
    }
    console.log(`stampo l'array numero ${i}`);
    console.log(array);
}