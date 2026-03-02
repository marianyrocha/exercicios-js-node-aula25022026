// Problema 6. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. 
// Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, 
// mas faça com que Carlos e André não paguem centavos. 
// Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.

const prompts = require('prompts');

(async() => {
    const response = await prompts(
    {
        type: 'number',
        name: 'valorConta',
        message: 'Digite o valor da conta: '
    });

    let resto = response.valorConta%3;
    let valorSemResto = (response.valorConta - resto)/3;

    let felipe = resto + valorSemResto;
    let carlos = valorSemResto;
    let andre = valorSemResto;

    console.log('Felipe: ' + felipe);
    console.log('Carlos: ' + carlos);
    console.log('Andre: ' + andre);
    
})();
