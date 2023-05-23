//Bônus - Ordenação BUBBLE SORT

// // Ordene o array numbers em ordem crescente e imprima seus valores.
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// // Ordene o array numbers em ordem decrescente e imprima seus valores.
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < (numbers.length - 1)) { // porque pega o array(length) -1
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);


// Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.
/*n = 5
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};*/



// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
/*let size = 5;
let symbol1 = '*';
let inputLine1 = '';

for (let i = 0; i <= size; i += 1) {
  console.log(inputLine1);
  inputLine1 += symbol1;
}*/


// Agora, inverta o lado do triângulo. Por exemplo:
//COMPLICADO
/*let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};*/
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços também.


// Depois, faça uma pirâmide com n asteriscos de base.
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine += symbol;
//     }else {
//       inputLine += ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1;
// };


// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar.
// Por último, faça com que a variável seja incrementada com o valor correspondente a cada *loop*.
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
};

// Faça um algoritmo que indique se um número definido em uma variável é primo ou não.
// Um número é classificado como primo se ele é maior do que 1 e divisível apenas por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. Lembrando que números primos, são números naturais, ou seja, também não podem ser divididos por números negativos Exemplos: 13 é um número primo, pois é divisível por 1 e por 13, apenas. Já o número 20 não é primo, pois pode ser dividido por 1, 2, 4, 5, 10 e 20, todos com resto zero.
// Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
