// armazenando o nome e a experiencia XP do heroi
let heros = 
    [
        ["Hadar Centaurus", 999],//ferro
        ["Alfa Taurus", 1000],//sem classificacao
        ["Dolphin Gray", 1001],//bronze
        ["Bettha Blue", 1999],//bronze
        ["Hadar Taurus", 2000],//bronze
        ["Alfa Centaurus", 2001],//prata
        ["Dolphin Blue", 4999],//prata
        ["Bettha Gray", 5000],//prata
        ["Hadar Gray", 5001],//ouro
        ["Alfa Blue", 6999],//ouro
        ["Dolphin Taurus", 7000],//ouro
        ["Bettha Centaurus", 7001],//platina
        ["Dolphin Alfa", 7999],//platina
        ["Bettha Taurus", 8000],//platina
        ["Hadar Alfa", 8001],//ascendente
        ["Alfa Gray", 8999],//ascendente
        ["Dolphin Centaurus", 9000],//ascendente
        ["Kappa Brown", 9001],//imortal
        ["Falcon Wing", 9999],//imortal
        ["Red Rabbit", 10000],//imortal
        ["Bettha Red", 10001],//radiante
        ["Falcon Blue", 10002]//radiante
    ]  

for (hero of heros){
    if (hero[1] >= 10001){
        console.log("O Herói de nome " + hero[0] + " está no nível Radiante")
    }else if (hero[1]>= 9001){
        console.log("O Herói de nome " + hero[0] + " está no nível Imortal")
    }else if (hero[1]>= 8001){
        console.log("O Herói de nome " + hero[0] + " está no nível Ascendente")
    }else if (hero[1]>= 7001){
        console.log("O Herói de nome " + hero[0] + " está no nível Platina")
    }else if (hero[1]>= 5001){
        console.log("O Herói de nome " + hero[0] + " está no nível Ouro")
    }else if (hero[1]>= 2001){
        console.log("O Herói de nome " + hero[0] + " está no nível Prata")
    }else if (hero[1]>= 1001){
        console.log("O Herói de nome " + hero[0] + " está no nível Bronze")
    }else if (hero[1] < 1000){
        console.log("O Herói de nome " + hero[0] + " está no nível Ferro")
    }else{
        console.log("O Herói de nome " + hero[0] + " está em nível sem classificação")
    }
}