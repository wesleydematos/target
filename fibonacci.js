// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
  if (num < 0) return `${num} não pertence à sequência de Fibonacci.`;

  let a = 0;
  let b = 1;

  while (a < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  if (a === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

// Ao chamar a função com o número 0, que pertence a sequência Fibonacci, deverá retornar a mensagem '0 pertence à sequência de Fibonacci.'
isFibonacci(0);
// Ao chamar a função com o número 4, que não pertence a sequência Fibonacci, deverá retornar a mensagem '4 não pertence à sequência de Fibonacci.'
isFibonacci(4);
