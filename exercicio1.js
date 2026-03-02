// Problema 1. Criar 4 variáveis para receber as notas de um aluno,
//  calcular e mostrar a média desse aluno.

const prompts = require('prompts');

(async () => {
    const response = await prompts([
    {   
        type: 'number',
        name: 'notaum',
        message: 'Digite a nota 1'
    }, 
    {   
        type: 'number',
        name: 'notaDois',
        message: 'Digite a nota 2'
    },
        {   
        type: 'number',
        name: 'notaTres',
        message: 'Digite a nota 3'
    }, 
    {   
        type: 'number',
        name: 'notaQuatro',
        message: 'Digite a nota 4'
    }])
    
    let soma = response.notaum + response.notaDois+ response.notaTres + response.notaQuatro;
    let media = soma/4;
    
    console.log(response);
    console.log('media: '+ media)
})();