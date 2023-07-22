/**
 * Desafio: Troca de valores
 * Realizar a troca de valores de duas variáveis, onde a variável A recebe o valor da variável B e a variável B recebe o valor da variável A
 * Exibir o resultado no console de cada variável
 * O valor da variável A é: 7 e o valor da variável B é: 94
 */
let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

// Também é possível realizar a troca desta forma: [a, b] = [b, a];

console.log(
  "O valor da variável A é: " + a + " e o valor da variável B é: " + b
);
