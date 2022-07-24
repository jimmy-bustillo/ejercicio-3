let valor = 10;
let factorial = 1,
  index = 1;

while (index <= valor) {
  factorial = factorial * index;
  index++;
  console.log(`El factorial de ${valor} es ${factorial}`);

  if (valor >= 11) {
    break;
  }
}
