

class Heroi {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let atack = "";
        if (this.type === "mago") {
            atack = "magia"
        }else if (this.type === "guerreiro") {
            atack = "espada"  
        }else if (this.type === "monge") {
            atack = "artes marciais"  
        }else if (this.type === "ninja") {
            atack = "shuriken"  
        }

        console.log(`O ${this.type} atacou usando ${atack}`)
    }


}

let heroiPersonalizado = new Heroi("Felipão", 25, "ninja")

heroiPersonalizado.atacar()