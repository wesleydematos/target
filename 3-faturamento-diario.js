// Dados de faturamento como JSON
const faturamento = [
  { dia: 1, faturamento: 200 },
  { dia: 2, faturamento: 0 },
  { dia: 3, faturamento: 450 },
  { dia: 4, faturamento: 0 },
  { dia: 5, faturamento: 380 },
  { dia: 6, faturamento: 0 },
  { dia: 7, faturamento: 0 },
  { dia: 8, faturamento: 300 },
  { dia: 9, faturamento: 250 },
  { dia: 10, faturamento: 400 },
];

function calcularFaturamento(dados) {
  const diasComFaturamento = dados.filter((dia) => dia.faturamento > 0);

  const menorFaturamento = Math.min(
    ...diasComFaturamento.map((dia) => dia.faturamento)
  );
  const maiorFaturamento = Math.max(
    ...diasComFaturamento.map((dia) => dia.faturamento)
  );

  const somaFaturamento = diasComFaturamento.reduce(
    (soma, dia) => soma + dia.faturamento,
    0
  );
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.faturamento > mediaFaturamento
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

const resultados = calcularFaturamento(faturamento);

console.log(
  `Menor valor de faturamento: R$${resultados.menorFaturamento.toFixed(2)}`
); // R$200.00
console.log(
  `Maior valor de faturamento: R$${resultados.maiorFaturamento.toFixed(2)}`
); // R$450.00
console.log(
  `Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`
); // 3 (média 330)
