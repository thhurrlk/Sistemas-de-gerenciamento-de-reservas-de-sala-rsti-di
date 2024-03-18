function menuInicial(){
    while (true) {
    let menu = prompt("Escolha uma opção:\n1 - Cliente do hotel\n2 - Administrador do hotel\n3 - Sair");
    switch (menu) {
      case '1':
        iniciarSistemaCliente();
        break;
      case '75':
        iniciarSistemaAdministrador();
        break;
      case '3':
        console.log('Saindo do sistema...');
        return;
      default:
        alert('Opção inválida! Por favor, escolha uma opção válida.');
      }
    }
  }
  
  function iniciarSistemaCliente() {
    while (true) {
      let opcao = prompt('Escolha uma opção:\n1 - Agendamento de reserva \n2 - Gerenciamento de agendamentos\n3 - Sair');
      switch (opcao) {
        case '1':
          agendarReserva(salas, reservas);
          break;
        case '2':
          gerenciarAgendamentos(reservas);
          break;
        case '3':
          console.log('Saindo do sistema...');
          return;
        default:
          alert('Opção inválida! Por favor, escolha uma opção válida.');
      }
    }
  }
  
  function iniciarSistemaAdministrador() {
    while (true) { 
    let opcao = prompt('Escolha uma opção:\n1 - Cadastro de salas\n2 - Agendamento de reserva\n3 - Visualização de agendamentos\n4 - Gerenciamento de agendamentos\n5 - Sair');
      switch (opcao) {
        case '1':
          cadastrarSala(salas);
          break;
        case '2':
          agendarReserva(salas, reservas);
          break;
        case '3':
          visualizarAgendamentos(reservas);
          break;
        case '4':
          gerenciarAgendamentos(reservas);
          break;
        case '5':
          console.log('Saindo do sistema...');
          return;
        default:
          alert('Opção inválida! Por favor, escolha uma opção válida.');
      }
    }
  }
  
  menuInicial();  