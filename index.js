//este arquivo index.js é o do CRISTIAN

/* function digitarData (texto){
//var texto='Início'
//var textoFin='Final'
var ano=prompt(`Digite o ANO do ${texto} da reserva`) 
var mes=prompt(`Digite o MÊS do ${texto} da reserva`)
mes=mes-1 //porque 0 é jan e 11 é dez
var dia=prompt(`Digite o DIA do ${texto} da reserva`)
var hora=prompt(`Digite a HORA do ${texto} da reserva`)
var minuto=prompt(`Digite o MINUTO do ${texto} da reserva`) //mover as variáves e/ou prompts para fora da função!?
var data=new Date (ano,mes,dia,hora,minuto)
data.getFullYear(ano)
data.setMonth(mes);
data.setDate(dia)
data.setHours(hora)
data.setMinutes(minuto)
//console.log(data)
//if (mes='Mar') {console.log('Março')} //continuar criando para cada mês (NÃO PRECISA MAIS!!!)
let diaSem = data.getDay(data)
//if (diaSem=1){console.log('Segunda-feira')} ///continuar criando para cada dia da semana (NÃO PRECISA MAIS!!!)
//criar um console.log com a data em português
//console.log(diaSem)
//var outraData=new Date (2024,2,18,10,0) //apagar?
//console.log(outraData) //apagar?
//if (outraData>data){console.log('depois')} //criar uma função para comparar horários de reservas (outra função? mover para fora desta?)
const diaDaSemana = diaDaSemanaPorExtenso(data);
console.log(diaDaSemana);
console.log(data.toLocaleDateString('pt-BR'));
console.log(data.toLocaleTimeString('pt-BR'));

        function diaDaSemanaPorExtenso(data) {
            const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            return diasDaSemana[diaSem];
        }
 return data ;
};

function digDataInicial(){digitarData('INÍCIO')} ;
function digDataFinal(){digitarData('FINAL')};
var dataInicial=digDataInicial();
var dataFinal=digDataFinal();
console.log (dataInicial);
console.log (dataFinal); */
//criar outra função para o horário final da reserva (copiar,colar e editar a função acima)

//acima, a primeira versão da função (poderá ser apagada depois) ^^^^^^^^^^^--------------------------------------------------------------------------



function checkIn () {
    function digitarDataInicial (ano,mes,dia,hora,minuto){ //função para receber data e hora do início da reserva 
        mes=mes-1 //porque 0 é jan e 11 é dez
        var data=new Date (ano,mes,dia,hora,minuto) //Cria uma instância de data
        data.getFullYear(ano); //retorna o ano da data especificada 
        data.setMonth(mes); //atribui o mês para uma data específica
        data.setDate(dia); //atribui o dia do mês pra uma data específica
        data.setHours(hora); //atribui as horas para uma data especificada
        data.setMinutes(minuto); //atribui os minutos para uma data específica
        return data ; //resultado da função para ser usada depois no objeto 'reseva' no formato completo de data (Tue Mar 19 2024 18:48:23 GMT-0300 (GMT-03:00))
        //...ou usar dataInicial (ver abaixo), fazer um return de dataInicial no final da função checkIn???     
    };
        
        
    var ano=prompt(`Digite o ANO do INÍCIO da reserva`) ; //prompts seguintes para o usuário digitar a data e a hora inicial da reserva
    var mes=prompt(`Digite o MÊS do INÍCIO da reserva`);
    var dia=prompt(`Digite o DIA do INÍCIO da reserva`);
    var hora=prompt(`Digite a HORA do INÍCIO da reserva`);
    var minuto=prompt(`Digite o MINUTO do INÍCIO da reserva`)   
        
    var dataInicial=digitarDataInicial(ano,mes,dia,hora,minuto); //cria a variável dataInicial a partir da função e dos dados digitados pelo usuário
    console.log (dataInicial); //exibe a data inicial no formato completo (é só pra teste, pode-se apagar esta linha depois)
        
    function diaDaSemanaPorExtenso(dataInicial) { //função (dentro da função) para transformar o número do dia da semana em texto
            const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            return diasDaSemana[diaSem]; //diaSem é um número de 0 a 6 dado por getDay
        }
        
    let diaSem = dataInicial.getDay(dataInicial) //getDay retorna o dia da semana para a data especificada (número de 0 a 6, sendo 0 o domingo) e passa para a var para ser usado na função que retora o nome do dia da semana
    const diaDaSemana = diaDaSemanaPorExtenso(dataInicial); //cria a variável com o nome do dia da semana por extenso a partir do resultado da função para depois ser exibido ao usuário
    var dataBR=(dataInicial.toLocaleDateString('pt-BR')); //variável com a data no formato dd/mm/aaaa para ser exibida ao usuário
    var horaBR=(dataInicial.toLocaleTimeString('pt-BR')); //variável com a hora no formato hh:mm:ss para ser exibida ao usuário
    console.log(`Sua reserva inicia no(a) ${diaDaSemana}, ${dataBR}, às ${horaBR}`) //exibe a data e hora do início da reserva
    //criar uma função mãe com tudo isso acima dentro, inclusive 'digitarDataInicial'!? acho q sim!
    } //final da function checkIn
    
    //-------------------------------------------------------------------------------
    //criar aqui a function checkout (que é uma cópia da checkin)
    //Na função 'digitarDataFinal' foi mudado o nome de 'data' para 'dataFinal'. Precisa mudar os nomes de todas as var dentro da função ??? acho q não!)
    function checkOut () {
        function digitarDataFinal (ano,mes,dia,hora,minuto){ //função para receber data e hora do final da reserva 
            mes=mes-1 //porque 0 é jan e 11 é dez
            var dataSaida=new Date (ano,mes,dia,hora,minuto) //Cria uma instância de data (FINAL)
            dataSaida.getFullYear(ano); //retorna o ano da data especificada (FINAL)
            dataSaida.setMonth(mes); //atribui o mês para uma data específica (FINAL)
            dataSaida.setDate(dia); //atribui o dia do mês pra uma data específica (FINAL)
            dataSaida.setHours(hora); //atribui as horas para uma data especificada (FINAL)
            dataSaida.setMinutes(minuto); //atribui os minutos para uma data específica (FINAL)
            return dataSaida ; //resultado da função para ser usada depois no objeto 'reseva' no formato completo de data (Tue Mar 19 2024 18:48:23 GMT-0300 (GMT-03:00))
            //...ou usar dataFinal (ver abaixo), fazer um return de dataFinal no final da função checkOut???
        };
            
            
        var ano=prompt(`Digite o ANO do FINAL da reserva`) ; //prompts seguintes para o usuário digitar a data e a hora final da reserva
        var mes=prompt(`Digite o MÊS do FINAL da reserva`);
        var dia=prompt(`Digite o DIA do FINAL da reserva`);
        var hora=prompt(`Digite a HORA do FINAL da reserva`);
        var minuto=prompt(`Digite o MINUTO do FINAL da reserva`)   
            
        var dataFinal=digitarDataFinal(ano,mes,dia,hora,minuto); //cria a variável dataFinal a partir da função e dos dados digitados pelo usuário
        console.log (dataFinal); //exibe a data final no formato completo (é só pra teste, pode-se apagar esta linha depois)
            
        function diaDaSemanaPorExtenso(dataFinal) { //função (dentro da função) para transformar o número do dia da semana em texto
                const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
                return diasDaSemanaFinal[diaSem]; //diaSem é um número de 0 a 6 dado por getDay
            }
            
        let diaSem = dataFinal.getDay(dataFinal) //getDay retorna o dia da semana para a data especificada (número de 0 a 6, sendo 0 o domingo) e passa para a var para ser usado na função que retora o nome do dia da semana
        const diaDaSemanaFinal = diaDaSemanaPorExtenso(dataFinal); //cria a variável com o nome do dia da semana por extenso a partir do resultado da função para depois ser exibido ao usuário
        var dataBRFinal=(dataFinal.toLocaleDateString('pt-BR')); //variável com a data no formato dd/mm/aaaa para ser exibida ao usuário
        var horaBRFinal=(dataFinal.toLocaleTimeString('pt-BR')); //variável com a hora no formato hh:mm:ss para ser exibida ao usuário
        console.log(`Sua reserva termina no(a) ${diaDaSemanaFinal}, ${dataBRFinal}, às ${horaBRFinal}`) //exibe a data e hora do final da reserva
        //criar uma função mãe com tudo isso acima dentro, inclusive 'digitarDataFinal'!? acho q sim!
        } //final da function checkOut
    
    //-------------------------------------------------------------------------------------
    var idRes=0 //variável que será um número único para identificar uma reserva
    function novoIdRes() { //função para perguntar se o usuário quer criar uma reserva, incrementa o idRes e chama a função novaReserva 
        var desejaRes=prompt ("Deseja realizar uma nova reserva? Digite 's' ou 'S' para SIM ou qualquer tecla para cancelar")
        if (desejaRes==='s' || desejaRes==='S') {idRes=idRes+1; //incrementa o idRes do objeto reserva e...
        novaReserva () //... INICIA A RESERVA (ou alguém já fez isso?). executar a partir daqui a manipulação do array de reservas?
        } 
        else {} //executar aqui uma função ou voltar ao menu anterior
    }
    
    //-------------------------------------------------------------------------------------
    
    var reservas=[ //array q vai armazenar os objetos das reservas (ou substituir por uma classe do Rafael)
    { 
        // reservas[0], será a inicial zerada que será usada para criar as novas
        numeroQuarto: 0, // 
        horaInicial: 0, //
        horaFinal: 0 //
    }
    
    ]
    //---------------------------------------------------------------------------------
    
    //executar isso após o usuário responder 'S' na função novoIdRes !?
    function novaReserva (){ //cria um novo objeto de reserva dentro do array reservas e altera as informações da nova
    reservas[idRes]={...reservas[0]};//incrementar aqui o idRes e adicionar mais um objeto ao array reservas
    reservas[idRes].numeroQuarto=Quarto.id; //puxa do objeto 'Quarto' do Rafael (ver como fazer).
    reservas[idRes].horaInicial=dataInicial; //puxa da função 'digitarDataInicial' ou da 'checkIn'
    reservas[idRes].horaFinal=dataFinal} //puxa da função 'digitarDataFinal' ou da 'checkOut'
    
    
    //-----------------------------------------------------------------------------------
    
    
    //abaixo a 1a versão do objeto reserva
    /* var reserva={ //objeto q vai armazenar uma reserva
        idReserva: [0], //acho q aí deve haver um array q vai incrementando a medida que as reservas vão sendo criadas (ver como fazer), puxar da função idRes?
        numeroQuarto: Quarto.id, //puxa do objeto 'Quarto' do Rafael (ver como fazer)
        horaInicial: dataInicial, //puxa da função 'digitarDataInicial' ou uma acima dela (ver como fazer)
        horaFinal: dataFinal//criar ainda uma função para o final da reserva (fazer uma cópia de 'digitarDataInicial', chamar de 'digitarDataFinal' e mudar o nome de 'data' para 'dataFinal'. Precisa mudar os nomes de todas as var dentro da função ??? acho q não!)
    }
    reserva.idReserva=idRes */ //salva o novo idRes da função no objeto
    
    
    
    //criar uma função para comparar os horários de diferentes reservas para evitar conflitos de agenda!!!s
    
    //objeto do Rafael (somente para consultar os nomes dos parâmetros e poder repetí-los no objeto 'reserva')
    /* class Quarto {
        constructor(id, tipo, descricao) {
            this.id = id;
            this.tipo = tipo;
            this.descricao = descricao;
        }
    } */
    