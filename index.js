//este arquivo index.js é o do CRISTIAN


//----------------------------------------------------------------------------------
var dataInicial=0
var dataFinal=0

//-------------------------------------------------------------------------------------

var idRes=0 //variável que será um número único para identificar uma reserva
function novoIdRes() { //função para perguntar se o usuário quer criar uma reserva, incrementa o idRes e chama a função novaReserva 
    var desejaRes=prompt ("Deseja realizar uma nova reserva? Digite 's' ou 'S' para SIM ou qualquer tecla para cancelar")
    if (desejaRes==='s' || desejaRes==='S') {idRes=idRes+1; //incrementa o idRes do objeto reserva e...
    dataInicial=checkIn();
    dataFinal=checkOut()    
    //novaReserva () //... INICIA A RESERVA (ou alguém já fez isso?). executar a partir daqui a manipulação do array de reservas?
    } 
    else {console.log('FIM')} //executar aqui uma função ou voltar ao menu anterior
return idRes
}
idRes=novoIdRes()

//-------------------------------------------------------------------------------------

function checkIn () {
    function digitarDataInicial (ano,mes,dia,hora,minuto){ //função para receber data e hora do início da reserva 
        mes=mes-1 //porque 0 é jan e 11 é dez
        var data=new Date (ano,mes,dia,hora,minuto) //Cria uma instância de data
        data.getFullYear(ano); //retorna o ano da data especificada 
        data.setMonth(mes); //atribui o mês para uma data específica
        data.setDate(dia); //atribui o dia do mês pra uma data específica
        data.setHours(hora); //atribui as horas para uma data especificada
        data.setMinutes(minuto); //atribui os minutos para uma data específica
        return data ; //resultado da função para ser usada depois no objeto 'reseva' no formato completo de data, NÃO!... (Tue Mar 19 2024 18:48:23 GMT-0300 (GMT-03:00))
        //...ou usar dataInicial (ver abaixo), fazer um return de dataInicial no final da função checkIn??? SIM!!! FOI FEITO ISSO 
    };
        
        
    var ano=prompt(`Digite o ANO do INÍCIO da reserva`) ; //prompts seguintes para o usuário digitar a data e a hora inicial da reserva
    var mes=prompt(`Digite o MÊS do INÍCIO da reserva`);
    var dia=prompt(`Digite o DIA do INÍCIO da reserva`);
    var hora=prompt(`Digite a HORA do INÍCIO da reserva`);
    var minuto=prompt(`Digite o MINUTO do INÍCIO da reserva`)   
        
    var dataInicial=digitarDataInicial(ano,mes,dia,hora,minuto); //cria a variável dataInicial a partir da função e dos dados digitados pelo usuário
    //console.log (dataInicial); //exibe a data inicial no formato completo (é só pra teste, pode-se apagar esta linha depois)

        //APAGAR ESSA LINHA ABAIXO DEPOIS var horaTesteIni
        var horaTesteIni=new Date (2024,3-1,21,7,0) //var de horário inicial de reserva existente para teste. Deverá procurar horários do mesmo quarto no banco de dados
        //
        
        while(reservas[1].horaInicial>=horaTesteIni && reservas[1].horaInicial<=horaTesteFin) //acho que este comando deverá estar dentro de checkin (TROCAR O if POR while DAÍ!!!)
        {console.log(`Selecione um horário de início antes de ${horaTesteIni} ou após ${horaTesteFin}`)} //alterar data e hora para formato BR 
        //o início da nova reserva deverá ser ANTES DO INÍCIO ou APÓS O FINAL de uma EXISTENTE do mesmo quarto
        //deverá ser usado um comando 'for' para percorrer os horários de início e fim de todas as reservas EXISTENTES do mesmo quarto

        
    function diaDaSemanaPorExtenso(dataInicial) { //função (dentro da função) para transformar o número do dia da semana em texto
            const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            return diasDaSemana[diaSem]; //diaSem é um número de 0 a 6 dado por getDay
        }
        
    let diaSem = dataInicial.getDay(dataInicial) //getDay retorna o dia da semana para a data especificada (número de 0 a 6, sendo 0 o domingo) e passa para a var para ser usado na função que retora o nome do dia da semana
    const diaDaSemana = diaDaSemanaPorExtenso(dataInicial); //cria a variável com o nome do dia da semana por extenso a partir do resultado da função para depois ser exibido ao usuário
    var dataBR=(dataInicial.toLocaleDateString('pt-BR')); //variável com a data no formato dd/mm/aaaa para ser exibida ao usuário
    var horaBR=(dataInicial.toLocaleTimeString('pt-BR')); //variável com a hora no formato hh:mm:ss para ser exibida ao usuário
    console.log(`Sua reserva inicia no(a) ${diaDaSemana}, ${dataBR}, às ${horaBR}`) //exibe a data e hora do início da reserva
    return dataInicial; //retorna o resultado da função para depois passar para a variável
    //criar uma função mãe com tudo isso acima dentro, inclusive 'digitarDataInicial'!? acho q sim! FOI FEITO
} //final da function checkIn
    
    
//-------------------------------------------------------------------------------

    //aqui abaixo, a function checkout (que é uma praticamente cópia da checkin)
    //Na função 'digitarDataFinal' foi mudado o nome de 'data' para 'dataFinal'. Precisa mudar os nomes de todas as var dentro da função ??? acho q não! SÓ FORAM MUDADAS ALGUMAS)
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
        //console.log (dataFinal); //exibe a data final no formato completo (é só pra teste, pode-se apagar esta linha depois)
            
        function diaDaSemanaPorExtenso(dataFinal) { //função (dentro da função) para transformar o número do dia da semana em texto
                const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
                return diasDaSemana[diaSem]; //diaSem é um número de 0 a 6 dado por getDay
            }
            
        let diaSem = dataFinal.getDay(dataFinal) //getDay retorna o dia da semana para a data especificada (número de 0 a 6, sendo 0 o domingo) e passa para a var para ser usado na função que retora o nome do dia da semana
        const diaDaSemanaFinal = diaDaSemanaPorExtenso(dataFinal); //cria a variável com o nome do dia da semana por extenso a partir do resultado da função para depois ser exibido ao usuário
        var dataBRFinal=(dataFinal.toLocaleDateString('pt-BR')); //variável com a data no formato dd/mm/aaaa para ser exibida ao usuário
        var horaBRFinal=(dataFinal.toLocaleTimeString('pt-BR')); //variável com a hora no formato hh:mm:ss para ser exibida ao usuário
        console.log(`Sua reserva termina no(a) ${diaDaSemanaFinal}, ${dataBRFinal}, às ${horaBRFinal}`) //exibe a data e hora do final da reserva
        return dataFinal; //retorna o resultado da função para depois passar para a variável
        //criar uma função mãe com tudo isso acima dentro, inclusive 'digitarDataFinal'!? acho q sim! FOI FEITO
} //final da function checkOut
    
  
//-------------------------------------------------------------------------------------
    
    var reservas=[ //array q vai armazenar os objetos das reservas (ou substituir por uma classe do Rafael)
    { 
        
        numeroReserva: 0,
        numeroQuarto: 0, // 
        horaInicial: 0, //
        horaFinal: 0 //
    },
    
    ];
    
//---------------------------------------------------------------------------------
    
    //executar isso após o usuário responder 'S' na função novoIdRes !?
    //function novaReserva (){ //cria um novo objeto de reserva dentro do array reservas e altera as informações da nova (NÃO CONSEGUI FAZER FUNCIONAR QUANDO COLOCO ESTES COMANDOS ABAIXO DENTRO DA FUNÇÃO)
    //RAFAEL, substiuir as linhas abaixo por comando que salvam em uma classe!?
    var novaReserva={...reservas[0]};//incrementar aqui o idRes e adicionar mais um objeto ao array reservas
    novaReserva.numeroReserva=idRes;
    novaReserva.numeroQuarto='Quarto.id'; //puxa da classe 'Quarto' do Rafael (ver como fazer).
    novaReserva.horaInicial=dataInicial; //puxa da função 'digitarDataInicial' ou da 'checkIn'
    novaReserva.horaFinal=dataFinal;  //puxa da função 'digitarDataFinal' ou da 'checkOut'
    //console.log(idRes) //exibe o número da reserva (é só pra teste, pode-se apagar esta linha depois)
//return novaReserva
//} 

//-----------------------------------------------------------------------------------------------------------

//var reservaNova=novaReserva()
console.log(novaReserva) //exibe o conteúdo da nova reserva (é só pra teste, pode-se apagar esta linha depois)
reservas.push(novaReserva) //adiciona a nova reserva ao array reservas (COLOCAR ESTE COMANDO DENTRO DA FUNÇÃO novaReserva???)
console.log(reservas) //exibe o conteúdo do array reservas (é só pra teste, pode-se apagar esta linha depois)
console.log(`A sua reserva é a de Nº ${reservas[idRes].numeroReserva} e o seu quarto é o ${reservas[idRes].numeroQuarto}`)    //exibe o número da reserva e o quarto (VER EXATAMENTE COMO FAZER ISSO!!!)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

var horaTesteIni=new Date (2024,3-1,21,7,0) //var de horário inicial de reserva existente para teste. Deverá procurar horários do mesmo quarto no banco de dados
var horaTesteFin=new Date (2024,3-1,21,12,0) //var de horário final de reserva existente para teste. Deverá procurar horários do mesmo quarto no banco de dados
console.log(reservas[1].horaInicial) //exibe o horário inicial de reserva digitado (é só pra teste, pode-se apagar esta linha depois)
console.log(reservas[1].horaFinal) //exibe o horário final de reserva digitado (é só pra teste, pode-se apagar esta linha depois)
console.log('Hora teste inicial',horaTesteIni) //exibe o horário inicial de reserva EXISTENTE teste (é só pra teste, pode-se apagar esta linha depois)
console.log('Hora teste final',horaTesteFin) //exibe o horário final de reserva EXISTENTE teste (é só pra teste, pode-se apagar esta linha depois)

/* if(reservas[1].horaInicial>=horaTesteIni && reservas[1].horaInicial<=horaTesteFin) //acho que este comando deverá estar dentro de checkin (TROCAR O if POR while DAÍ!!!)
{console.log(`Selecione um horário de início antes de ${horaTesteIni} ou após ${horaTesteFin}`)}  */
//alterar data e hora para formato BR 
//o início da nova reserva deverá ser ANTES DO INÍCIO ou APÓS O FINAL de uma EXISTENTE do mesmo quarto
//deverá ser usado um comando 'for' para percorrer os horários de início e fim de todas as reservas EXISTENTES do mesmo quarto

if((reservas[1].horaFinal>=horaTesteIni && reservas[1].horaInicial<=horaTesteFin) || reservas[1].horaFinal<=reservas[1].horaInicial) //acho que este comando deverá estar dentro de checkout (TROCAR O if POR while DAÍ!!!)
{console.log(`Selecione um horário final após a hora inicial ${reservas[1].horaInicial} e: antes de ${horaTesteIni} ou após ${horaTesteFin}`)} //alterar data e hora para formato BR 
//o final da nova reserva deverá ser após o início dela própria e ANTES DO INÍCIO ou APÓS O FINAL de uma EXISTENTE do mesmo quarto
//deverá ser usado um comando 'for' para percorrer os horários de início e fim de todas as reservas EXISTENTES do mesmo quarto

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    
    
    
    
    //objeto do Rafael (somente para consultar os nomes dos parâmetros e poder repetí-los no objeto 'reserva')
    /* class Quarto {
        constructor(id, tipo, descricao) {
            this.id = id;
            this.tipo = tipo;
            this.descricao = descricao;
        }
    } */
    
