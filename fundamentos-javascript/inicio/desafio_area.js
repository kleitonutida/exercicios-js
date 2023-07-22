/**
 * Calcule a área de uma circunferência de raio 10 e exiba o resultado no console com a seguinte mensagem: O resultado da área é: <area>
 * Use a contante PI com o valor aproximado de 3.141592 para o cálculo
 * O resultado deve ser exibido em metros quadrados
 * Utilizar variáveis para cada um dos valores a serem calculados 
 */
const PI = 3.141592;
const raio = 10;
let area = PI * raio * raio;
console.log("O valor da área é: " + area + "m²");

area = Math.PI * raio * raio;
console.log("O valor da área é: " + area + "m²");