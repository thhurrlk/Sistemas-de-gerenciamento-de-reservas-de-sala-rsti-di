
// ANALISE DO CODIGO DO RAFA! TENTANDO ACHAR UMA SOLUCAO PARA O PAINEL DE ADMIN

// DataBase / Banco de Dados, ou melhor dizendo, um  objeto com  uma  array chamada `quartos` dentro, a qual vai ter os quartos registrados.
const dbQuartos = {
    quartos: [{id: 1, tipo: 'Comum', descricao: 'Quarto Comum: Simples e confortável.'},], // Já iniciei aqui com  um quarto Comum, para alguns testes (tinha certo medo com relação aos IDS)
}

// Classe Quarto, nós não chegamos em classe ainda, mas essa aí em questão basicamente nos dá a vantagem de poder "construir" com o `constructor` um quarto novo sempre que quisermos.
class Quarto {
    constructor(id, tipo, descricao) {
        this.id = id;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}

// Menu básico por meio de um prompt
var opcaoMenu = Number(
    prompt('Bem-vindo ao Hotel Suicidio Proibido! 💀 \n\nDigite abaixo o que deseja fazer ou digite sair:\n\n1 - Reservar um quarto 🛌\n2 - Relatar um problema 🚨\n3 - Cometer suicídio e pagar a multa no valor de R$999.999,00 🩸⚰️💸')
);

// As condicionais / if's, para que possamos acessar as diferentes funções desse menu
if (opcaoMenu == 1) {
    console.log('Aqui vai ser uma funcao');
}
else if(opcaoMenu == 2){
    console.log('Vamos fingir que você não tentou fazer isso e privar-lhe da morte por enquanto.')
} 
// Nesse else if em específico (Código 109 para acessar ele), nós vamos rodar a função `adicionarQuarto`, a qual explicarei em breve.
else if (opcaoMenu == 109) {
    adicionarQuarto()
} 
// ################################################################
else if (opcaoMenu == 3) {
    console.log('Você morreu e nos deve agora R$999.999,00');
} else {
    console.log('Seu suicídio não se conluirá aqui, vá embora!');
}


// Função para adicionar um novo  quarto.
function adicionarQuarto(tipo = prompt('Digite  o  tipo de quarto desejado: VIP || COMUM')) // Esse prompt, por sua vez, preencherá o parâmetro `tipo`
{
    var descricao = ''; // Nesse  momento a  descrição ainda é inexistente
    switch (tipo) { // Um switch case, como já vimos nas aulas, é um "sistema" condicional semelhante  ao if, se você digita algo especificado pelo `case`, algo acontecerá.
        case 'VIP': // Aqui escolhemos o quarto VIP, que por sua vez altera a descrição para a descrição de um quarto VIP e quebra/para o switch case.
            descricao = 'Quarto VIP: Espaçoso, confortável e com vista panorâmica.';
            break;
        case 'Comum': // Aqui ele define a descrição de um quarto comum e para o switch case.
            descricao = 'Quarto Comum: Simples e confortável.';
            break;
        default: // Aqui é o `default`, que é o que aparece quando o usuário digita algo não esperado.
            console.log('Tipo de quarto inválido.');
            return;
    }
    
    const id = dbQuartos.quartos.length + 1; // Além de definir a const ID para ser usada na classe. Essa pequena fórmula adiciona mais um ID ao ID anterior, fazendo assim uma automatização da criação de ID's dos quartos (se o tamanho atual da array é 2, ou seja, existem 2 quartos, então criamos mais um ID, que por sua vez é 1 inteiro maior ao tamanho/length anterior)
    const quarto = new Quarto(id, tipo, descricao); // Aqui ele define a const quarto, para que seja utilizada na classe, que "construirá" o quarto com aquelas coisas já definidas na classe (id, tipo e descrição...)
    dbQuartos.quartos.push(quarto); // Aqui ele acessa o objeto dbQuartos, depois acessa a array quartos, e por fim usa o método push para adicionar (quarto) à array, tendo agora o nosso novo e adicionado quarto.
    console.log('Quarto adicionado com sucesso.'); // Console log com a mensagem de sucesso
}

console.log(dbQuartos) // Console log para testar como está a situação da database depois do ocorrido, com o objetivo de agora termos algo lá.
