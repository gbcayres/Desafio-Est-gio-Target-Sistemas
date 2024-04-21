function fibonacci(num) {
  let last = 1;
  let penultimate = 0;
  let numIsIn = false;

  while (last < num) {
    let aux = last;
    last = last + penultimate;
    penultimate = aux;
    if (last === num) {
      numIsIn = true;
    }
    console.log(last);
  }

  if (numIsIn) {
    console.log(`${num} faz parte da sequência de fibonacci.`);
  } else {
    console.log(`${num} não faz parte da sequência de fibonacci.`);
  }
}

const num = prompt("Digite um número:");

fibonacci(11);
// // Imprime:
// /*
//     Digite um número:11
//     1
//     2
//     3
//     5
//     8
//     13
//     11 não faz parte da sequência de fibonacci.
// */
