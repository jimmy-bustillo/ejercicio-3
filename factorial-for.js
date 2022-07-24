let valor = 5;
let factorial = 1;

if (valor === 0) {
  console.log(`El valor no puede se 0`);
} else {
  for (let i = 1; i <= valor; i++) {
    factorial = factorial * i;
  }
  console.log(`El factorial de ${valor} es ${factorial}`);
}
