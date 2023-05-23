//Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado. 

console.log(soma);

/*media aritmetica 
let num1 = 10;
let num2 = 8;

let media = (num1 + num2) / 2*/
let media = soma / (numbers.length);
console.log(media);


//Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (media > 20){
    console.log('O valor da média aritmética é maior que 20');
}else if (media <= 20){
    console.log('“O valor da média aritmética é menor ou igual a 20');
}


//Utilizando for, descubra o maior valor contido no array e imprima-o.
let higher = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if(higher < numbers[index])
    higher = numbers[index];   
    
}
console.log(higher);


//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let impar = 0;

for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    } 
}
    if(impar.length === 0) {
        console.log('nenhum valor ímpar encontrado');
    } else {
        console.log(impar);
    }


//Utilizando for, descubra o menor valor contido no array e imprima-o.
let smaller = numbers[0];

for (let index = 1; index < numbers.length; index +=1) {
    if (smaller > numbers[index]){
        smaller = numbers[index]
    }
}
console.log(smaller);


//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let arrays = [];

for (let index = 1; index <= 25; index += 1) {
    arrays.push(index);
}
console.log(arrays);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < arrays.length; index += 1) {
    console.log(arrays[index] / 2);
}


/*O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 */
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;

for (let index = fatorial; index > 0; index -= 1) {
    fatorial *= index;
}
console.log (fatorial);


//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reverse = '';

for (let index = 0; index < word.length; index +=1) {
    reverse += word[word.length - 1 -index];
} 
console.log(reverse);

//outra possivel solução

/*let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);*/


/*Considere o array de strings abaixo:*/
let array1 = ['java', 'javascript', 'python', 'html', 'css'];
 
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let bigWord = array1[0];
let smallerWord = array1[0];

for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].length > bigWord.length) {
        bigWord = array1[i];
    }
}

console.log(bigWord);

for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].length < smallerWord.length) {
        smallerWord = array1[i];
    }
}

console.log(smallerWord);
//Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let biggestPrimo = 0;

for (let atualNumber = 2; atualNumber <= 50; atualNumber += 1) {
    let primo = true;
    for (let divisor = 2; divisor < atualNumber; divisor += 1) {
        if (divisor % atualNumber === 0){
            primo = false;
        }
    }
    if (primo) {
        biggestPrimo = atualNumber;
    }
}

console.log(biggestPrimo);



/* EXERCICIOS MONITORIA NAT 
// 1.REALIZE a soma de um array e faça verificação se os elementos são númeiros
const array = [1, 'leo', 6, 'lari', 7, 8, 'thedy', 9, 41, 25, 2]
//console.log(array.length);
let resultado = 0;
for (let index = 0; index < array.length; index +=1) {
    if(typeof array[index] === 'number'){
        resultado += array[index];
    }
}
console.log(resultado);


// 2. Crie combinações de nomes e sobrenome.
const nome = ['luy', 'leo', 're', 'michael'];
const sobrenome = ['moraes', 'rocha', 'rodrigues', 'fernandes'];
const arrayVazio = [];
for (let index = 0; index < nome.length; index +=1) {
//console.log('eu passei aqui nesse 1 loop', nome[index]); 
for (let index1 = 0; index1 < sobrenome.length; index1 +=1) {
    arrayVazio.push (nome[index] + ' ' + sobrenome[index1]);
}   
}
console.log(arrayVazio);


// 3. Encontre o menor elemento de um array.
// DESCOBRIR O ERRO
const nume = [10, 3, 4, 6, 7, 8, 0, 23]
const smaller = nume[0];
for (let index = 0; index < nume.length; index +=1) {
    if(smaller > nume[index]){
        smaller = nume [index]
    }
}
console.log(smaller);


/* 4. Laker e Boston Celtics es~tao disputando o título da NBA. Desenvolva a lógica para receber um array de cada time contendo a pontuação das partidas. A saída deve apresentar qual time ganhou mais partidas e foi campeão*/
