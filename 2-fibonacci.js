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

// Exemplos de chamadas
console.log(isFibonacci(0)); // Retorna: 0 pertence à sequência de Fibonacci.
console.log(isFibonacci(4)); // Retorna: 4 não pertence à sequência de Fibonacci.
console.log(isFibonacci(21)); // Retorna: 21 pertence à sequência de Fibonacci.
console.log(isFibonacci(22)); // Retorna: 22 não pertence à sequência de Fibonacci.
