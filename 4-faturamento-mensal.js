const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
  (total, valor) => total + valor,
  0
);

function calcularPercentuais(faturamento) {
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
  }
}

calcularPercentuais(faturamentoPorEstado);
// Percentual de SP: 47.40%
// Percentual de RJ: 25.60%
// Percentual de MG: 20.07%
// Percentual de ES: 18.85%
// Percentual de Outros: 13.48%
