//1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

/*let a = 3;
let b = 7;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);*/

/*let a = 10;
let b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b)); */


//2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

/*if(a > b) {
    console.log("'a' é maior que 'b'");
}else {
    console.log("'b' é maior que 'a'");
}; */


//3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

/*let a = 2;
let b = 5;
let c = 10;

if (a > b && a > c){
    console.log("A é o maior dos tres: " + a);
}else if (b > a && b > c){
    console.log("B é o maior dos tres: " + b);
}else (c > a && c > b)
    console.log("C é o maior dos tres: " + c);*/

    /*let a = 6;
    let b = 4;
    let c = 2;
    
    if (a > b && a > c) {
      console.log('O maior número é: ' + a + ' (a)');
    } else if (b > a && b > c) {
      console.log('O maior número é: ' + b + ' (b)');
    } else {
      console.log('O maior número é: ' + c + ' (c)');
    };*/


//4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

/*let valor = -4;

if (valor >= 1){
    console.log('positivo');
}else if(valor <= -1){
    console.log('negativo');
} else {
    console.log('zero');
} */
    

//5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

/*let a = 65;
let b = 100;
let c = 15;

let angulosValidos = a > 0 && b > 0 && c > 0;

if(angulosValidos){
    if (a + b + c === 180){
console.log(true);
}else {
    console.log(false);
};
}else {
    console.log('ERRO: ângulo inválido');
}*/


//6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

/*let peças = 'CAVALO';

switch(peças.toLocaleLowerCase()){
    case 'rei': 
        console.log('Vertical(apenas uma casa por vez)\nHorizontal(apenas uma casa por vez)\nDiagonal(apenas uma casa por vez)');
        break
    case 'rainha':
        console.log('Vertical\nHorizontal\nDiagonal');
        break
    case 'cavalo': 
        console.log('Movimento L(duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.)');
        break
    case 'peão':
        console.log('Vertical(apenas para frente)\nDiagonal(apenas para capturar uma peça)');
        break
    case 'torre': 
        console.log('Vertical\nHorizontal');
        break
    case 'bispo':
        console.log('Diagonal');
        break
    default:
        console.log('Não é uma peça do Xadrez');
}*/


//7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

/*function converterNotas(nota) {
    if(nota < 0 || nota > 100){
        return 'Nota inválida';
    }   else if (nota >= 90){
        return 'A';
    }   else if (nota >= 80){
        return 'B';
    }   else if (nota >= 70){
        return 'C';
    }   else if (nota >= 60) {
        return 'D';
    }   else if (nota >= 50){
        return 'E';
    }   else {
        return 'F';
        }       
    }*/

    //console.log(converterNotas(85));
    //console.log(converterNotas(47));
    //console.log(converterNotas(-10));
    //console.log(converterNotas(120));
   

// 🚀 Há um par entre nós
// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

/*let number1 = 3;
let number2 = 5;
let number3 = 8;

if (number1 % 2 === 0 || number2 %2 === 0 || number3 % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}*/


// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

/*let num1 = 3;
let num2 = 10;
let num3 = 12;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    console.log(true);
}else {
    console.log(false);
}*/


/* 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
    -Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
    -Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
    -O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

        --> valorCustoTotal = valorCusto + impostoSobreOCusto;
        --> lucro = valorVenda - valorCustoTotal (lucro de um produto);*/

let custo = 100;
let venda = 150;


if (custo >= 0 && venda >= 0){
    let impostoCusto = custo * 0.2;
    let custoTotal = custo + impostoCusto;
    let lucroProduto = venda - custoTotal;
    let lucroTotal = lucroProduto * 1000;
    console.log(lucroTotal);
} else {
    console.log('Erro: valor inválido');
}


/* 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
    --A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    --INSS (Instituto Nacional do Seguro Social)

        -->Salário bruto até R$ 1.556,94: alíquota de 8%
        -->Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        -->Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        -->Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

    --IR (Imposto de Renda)

        --> Até R$ 1.903,98: isento de imposto de renda
        --> De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        --> De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        --> De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        --> Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
        -->Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.

--O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

--Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

--Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

        -->R$ 2.670,00 - salário com INSS já deduzido.
        -->7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
        -->R$ 142,80 - parcela a ser deduzida do imposto de renda.
--Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

--Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.

De olho na dica 👀: Que tal identificar as alíquotas com variáveis de nomes explicativos?*/

