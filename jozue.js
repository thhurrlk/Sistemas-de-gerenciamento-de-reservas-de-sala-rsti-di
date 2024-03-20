
/*let quartosDisponiveis = {
    simples: 10,
    duplo: 5,
    suite: 3
};

let reservas = {
    simples: 0,
    duplo: 0,
    suite: 0
};

function exibirMenu() {
    console.log("Bem-vindo ao sistema de reservas do Hotel ");
    console.log("Escolha uma opção:");
    console.log("1. Ver quartos disponíveis");
    console.log("2. Fazer uma reserva");
    console.log("3. Sair");
    return prompt('Bem-vindo ao sistema de reservas do Hotel/nEscolha uma opção/n1. Ver quartos disponíveis/n2. Fazer uma reserva/n3. Sair');

}
function verificarQuartosDisponiveis() {
    console.log("Quartos disponíveis:");
    for (let tipoQuarto in quartosDisponiveis) {
        console.log(`${tipoQuarto}: ${quartosDisponiveis[tipoQuarto]}`);
    }
}

function fazerReserva() {
    let tipoQuarto = prompt("Digite o tipo de quarto que deseja reservar (simples, duplo, suite):").toLowerCase();
    if (quartosDisponiveis[tipoQuarto] > 0) {
        quartosDisponiveis[tipoQuarto]--;
        reservas[tipoQuarto]++;
        console.log("Reserva feita com sucesso!");
    } else {
        console.log("Não há quartos desse tipo disponíveis.");
    }
}

    
// Função principal
function principal() {
    let opcao;
    do {
        exibirMenu();
        opcao = prompt("Digite o número da opção desejada:");
        switch (opcao) {
            case '1':
                verificarQuartosDisponiveis();
                break;
            case '2':
                fazerReserva();
                break;
            case '3':
                console.log("Obrigado por usar nosso sistema de reservas. Volte sempre!");
                break;
            default:
                console.log("Opção inválida. Por favor, digite uma opção válida.");
        }
    } while (opcao !== '3');
}

// Inicialização do programa
principal()*/

