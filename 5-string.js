function inverterString(inputString) {
  let resultado = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    resultado += inputString[i];
  }

  return resultado;
}

console.log(inverterString("banana")); // Saída: "ananab"
console.log(inverterString("leite")); // Saída: "etiel"
