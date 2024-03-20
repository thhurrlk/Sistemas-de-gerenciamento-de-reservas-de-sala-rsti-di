function menuInicial(){
    var opcaoMenu = Number(
        prompt('Bem-vindo ao Hotel Suicidio Proibido! 💀 \n\nDigite abaixo o que deseja fazer ou digite sair:\n\n1 - Reservar um quarto 🛌\n2 - Relatar um problema 🚨\n3 - Cometer suicídio e pagar a multa no valor de R$999.999,00 🩸⚰️💸')
    );
    
    switch(opcaoMenu){
        case 1:
            'Tamo quase lá'
            break;
        case 2:
            'Vamos fingir que você não tentou fazer isso e privar-lhe da morte por enquanto.'
            break;
        case 109: 
            adicionarQuarto()
            break;
        case 3: 
            'Você morreu e nos deve agora R$999.999,00'
            break;
        default:
            'Você digitou errado seu burro.'
    }
}
