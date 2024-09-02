function countLetterA(inputString) {
  const count = inputString
    .toLowerCase()
    .split("")
    .filter((char) => char === "a").length;

  return count > 0
    ? `A letra 'a' ocorre ${count} vezes na string.`
    : `A letra 'a' não está presente na string.`;
}

// neste exemplo deve retornar 'A letra 'a' ocorre 3 vezes na string.'
countLetterA("banana");
// neste exemplo deve retornar 'A  letra 'a' não está presente na string.'
countLetterA("leite");
