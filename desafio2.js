
const jogador = {vitorias:150, derrotas:10}

if (jogador) {
    let saldoVitorias = (jogador.vitorias - jogador.derrotas)
    let saldoJogador = saldoVitorias
    saldoJogador = tiposaldoJogador(saldoVitorias)
    console.log(`O herói tem saldo de ${saldoVitorias} está no nível de ${saldoJogador}`)
}

function tiposaldoJogador(saldo) {
    if (saldo < 10) {
        return "Ferro";
    }else if (saldo >= 10 && saldo < 21) {
         return "Bronze";
    }else if (saldo >= 21 && saldo < 51) {
        return "Prata";
    }else if (saldo >= 51 && saldo < 81) {
        return "Ouro";
    }else if (saldo >= 81 && saldo < 91) {
        return "Diamante";
    }else if (saldo >= 91 && saldo < 101) {
        return "Lendário";
    }else if (saldo >= 101) {
        return "Imortal";
    }
}