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
