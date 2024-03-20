import {Reserva, Quarto} from './classes.js';
import JsonHandler from './JsonHandler.js';

const jsonHandler = new JsonHandler();

// Exemplo de leitura de arquivo JSON
jsonHandler.lerArquivoJson('data.json', (error, json) => {
    if (error) {
        console.error('Erro ao ler arquivo JSON:', error);
        return;
    }
    console.log('Conteúdo do arquivo JSON:', json);
});

const novoQuarto = new Quarto(, 'VIP', 'Quarto VIP: Espaçoso e confortável.');
    json.quartos.push(novoQuarto);

    // Escrever de volta no arquivo JSON
    jsonHandler.escreverArquivoJson('data.json', json, error => {
        if (error) {
            console.error('Erro ao escrever arquivo JSON:', error);
            return;
        }
        console.log('Novo quarto adicionado com sucesso!');
    });
/* var opcaoMenu = Number(
    prompt('Bem-vindo ao Hotel Suicidio Proibido! 💀 \n\nDigite abaixo o que deseja fazer ou digite sair:\n\n1 - Reservar um quarto 🛌\n2 - Relatar um problema 🚨\n3 - Cometer suicídio e pagar a multa no valor de R$999.999,00 🩸⚰️💸')
);

if (opcaoMenu == 1) {
    adicionarQuarto();
} else if (opcaoMenu == 2) {
    console.log('Vamos fingir que você não tentou fazer isso e privar-lhe da morte por enquanto.');
} else if (opcaoMenu == 3) {
    console.log('Você morreu e nos deve agora R$999.999,00');
} else {
    console.log('Seu suicídio não se concluirá aqui, vá embora!');
} */

/* function adicionarQuarto() {
    var tipo = prompt('Digite o tipo de quarto desejado: VIP || COMUM');
    var descricao = '';
    switch (tipo) {
        case 'VIP':
            descricao = 'Quarto VIP: Espaçoso, confortável e com vista panorâmica.';
            break;
        case 'COMUM': // Alterado de 'Comum' para 'COMUM' para corresponder ao objeto JSON
            descricao = 'Quarto Comum: Simples e confortável.';
            break;
        default:
            console.log('Tipo de quarto inválido.');
            return;
    }

    const novoQuarto = new Quarto(dbQuartos.quartos.length + 1, tipo, descricao);
    dbQuartos.quartos.push(novoQuarto);

    console.log('Quarto adicionado com sucesso.');
}

console.log(dbQuartos); */
