import fs from 'fs';

// Carregar o arquivo JSON com os quartos
const dbQuartos = JSON.parse(fs.readFileSync('quartos.json', 'utf8'));

function adicionarQuarto() {
    var tipo = prompt('Digite o tipo de quarto desejado: VIP || COMUM');
    var descricao = '';
    switch (tipo) {
        case 'VIP':
            descricao = 'Quarto VIP: Espaçoso, confortável e com vista panorâmica.';
            break;
        case 'Comum':
            descricao = 'Quarto Comum: Simples e confortável.';
            break;
        default:
            console.log('Tipo de quarto inválido.');
            return;
    }

    const novoQuarto = {
        id: dbQuartos.quartos.length + 1,
        tipo: tipo,
        descricao: descricao
    };

    dbQuartos.quartos.push(novoQuarto);

    // Salvar as alterações de volta no arquivo JSON
    fs.writeFileSync('quartos.json', JSON.stringify(dbQuartos, null, 4));

    console.log('Quarto adicionado com sucesso.');
}

console.log(dbQuartos);


https://github.com/bzn-dev/don-t-give-up
