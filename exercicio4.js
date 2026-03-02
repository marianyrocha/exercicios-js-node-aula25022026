// Problema 4. Faça um algoritmo que receba a matrícula e duas notas do aluno. 
// Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir: 
// Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1 e nota2. Ao final mostre a média geral dos alunos

const prompts = require('prompts');

(async() => {
    let turma = [];
    let i = 0;
    let parar;
    do {
        const response = await prompts([
        {
            type: 'number',
            name: 'matricula',
            message: 'Digite a matrícula: '
        },
        {
            type: 'text',
            name: 'nome',
            message: 'Digite o nome do aluno: '
        },
        {
            type: 'number',
            name: 'notaUm',
            message: 'Digite a primeira nota: '
        },
        {
            type: 'number',
            name: 'notaDois',
            message: 'Digite a segunda nota: '
        }
        ]);

        let media = (response.notaUm + response.notaDois)/2;


        if(media > 7){
            console.log('Aluno Aprovado')
        }else{
            if(media==7){
                console.log('Aluno em Recuperação')
            }else{
                if(media<7){
                console.log('Aluno Reprovado')
                }
            }
        };

        turma[i] = {
            matricula: response.matricula,
            nome: response.nome,
            notaUm: response.notaUm,
            notaDois: response.notaDois,
            media: media
        }

        i++

        const sair = await prompts(
        {
            type: 'number',
            name: 'continuar',
            message: 'Digite 0 para sair e 1 para continuar.'        
        }
        )

    continuar = sair.continuar

    } while (continuar == 1);

    console.log(turma)
    let soma = 0;
    for (let j = 0; j < turma.length; j++) {
        soma += turma[j].media;
    }
    let mediaTurma = soma / turma.length;

    console.log("Média da turma:", mediaTurma);

})();