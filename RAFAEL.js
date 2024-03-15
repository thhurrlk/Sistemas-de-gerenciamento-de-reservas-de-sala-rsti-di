/* console.log('Bem-vindo ao Hotel Suicidio Proibido! \n\nDigite abaixo o que deseja fazer ou digite sair'); */

var opcaoMenu = Number(
    prompt('Bem-vindo ao Hotel Suicidio Proibido! 💀 \n\nDigite abaixo o que deseja fazer ou digite sair:\n\n1 - Reservar um quarto 🛌\n2 - Relatar um problema 🚨\n3 - Cometer suicídio e pagar a multa no valor de R$999.999,00 🩸⚰️💸')
);

if (opcaoMenu == 1) {
    console.log('Aqui vai ser uma funcao');
} else if (opcaoMenu == 109) {
    console.log('aqui vai sair um painel adm topzera');
} else if (opcaoMenu == 3) {
    console.log('Você morreu e nos deve agora R$999.999,00');
} else {
    console.log('Seu suicídio não se conluirá aqui, vá embora!');
}
