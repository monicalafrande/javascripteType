function FizzBuzz(numero) {
  if (isNaN(numero)) {
    return "Não é um número";
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
}

console.log(15, FizzBuzz(15));
for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
