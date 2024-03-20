class Reserva {
    constructor(reservaID, quartoID, nomeUser, dataCheckIn, dataCheckOut){
        this.reservaID = reservaID,
        this.quartoID = quartoID,
        this.nomeUser = nomeUser,
        this.dataCheckIn = dataCheckIn,
        this.dataCheckOut = dataCheckOut
    }
}

class Quarto {
    constructor(id, tipo, descricao) {
        this.id = id;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}

export {Reserva, Quarto};