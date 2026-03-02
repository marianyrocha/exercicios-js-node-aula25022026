// Problema 2. Somatório 1 a N Receba/armazene um valor `N` e exiba o resultado da soma de 1 até `N`. 
// O desafio deve ser feito utilizando estruturas de repetição.

const prompts = require('prompts');

(async() => {
    const response = await prompts (
    {
        type:'number',
        name: 'N',
        message: 'Digite um valor para N:'
    }
);
let N = response.N

for (let i = 1; i <= N; i++){
    console.log(i);
}


console.log(response)


})();
