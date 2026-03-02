// Problema 3. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%.
//  Após o aumento, calcule o INSS desse funcionário que é de 8%. 
// mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.

const prompts = require('prompts');

(async() => {
    const response = await prompts(
    {
        type: 'number',
        name: 'salarioInicial',
        message: 'Digite o valor do salário: '
    }
); 

let aumento = response.salarioInicial + (response.salarioInicial * 0.20);
let taxaInss = aumento * 0.08;
let salarioFinal = aumento - taxaInss;



console.log(response)
console.log('Salario Inicial: ' + response.salarioInicial)
console.log('Aumento: ' + aumento)
console.log('Taxa do Inss: ' + taxaInss)
console.log('Salaario Final: ' + salarioFinal)

})();