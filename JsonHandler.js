class JsonHandler {
    constructor() {
        // Inicialização, se necessário
    }

    // Método para ler um arquivo JSON
    lerArquivoJson(caminho, callback) {
        fetch(caminho)
            .then(response => response.json())
            .then(json => callback(null, json))
            .catch(error => callback(error, null));
    }

    // Método para escrever um arquivo JSON
    escreverArquivoJson(caminho, dados, callback) {
        const opcoes = {
            method: 'PUT', // Ou 'POST' se preferir
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        };

        fetch(caminho, opcoes)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao escrever arquivo JSON');
                }
                callback(null);
            })
            .catch(error => callback(error));
    }
}

export default JsonHandler;