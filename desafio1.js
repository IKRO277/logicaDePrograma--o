
const jogador = {nome:"Icaro", xp:5004}

if (jogador) {
    let nivel
    nivel = jogador.xp
    nivel = tipoNivel(nivel)
    console.log(`O herói de nome ${jogador.nome} está no nível de ${nivel}`)
}

function tipoNivel(nivel) {
    if(nivel < 1000){
        return nivel = "Ferro"
    }else if(1001 <= nivel < 2001) {
        return nivel = "Bronze"
    }else if(2001 <= nivel < 5001) {
        return nivel = "Prata Ouro"
    }else if(5001 <= nivel < 8001) {
        return nivel = "Platina Diamante"
    }else if(8001 <= nivel < 10001) {
        return nivel = "Imortal"
    }else if(nivel >= 10001) {
        return nivel = "Radiante"
    }
}