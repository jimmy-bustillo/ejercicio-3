let valor = 5;
let factorial = 1;
let index = 1;

if (valor === 0) {
  console.log(`El valor no puede ser 0`);
} else {
  while (index <= valor) {
    factorial = factorial * index;
    index++;
  }
  console.log(`El factorial de ${valor} es ${factorial}`);
}
