// **Problema 5.** Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, 
// cada uma sendo vendida respectivamente por 10, 12 e 15 reais. 
// Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, 
// e a máquina informe quanto será o valor arrecadado.

const prompts = require('prompts');

(async() => {
    const response = await prompts([
    {
        type: 'text',
        name: 'tamanho',
        message: 'Digite o tamanho da camiseta: '
    },
    {
        type: 'number',
        name: 'quantidade',
        message: 'Digite a quantidade de camisetas: '
    }]);

    let valor = 0;

    console.log(response.tamanho);
    console.log(response.quantidade);

    if (response.tamanho == 'P')
        valor = 10 * response.quantidade;
    else if(response.tamanho == 'M')
        valor = 12 * response.quantidade;
    else if (response.tamanho == 'G')
        valor = 15 * response.quantidade;

    console.log('Valor da compra: '  + valor)

})();
    