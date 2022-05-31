let diaSemana = 2

//formula 1
switch (diaSemana) {
    case 0:
        console.log("Hoje é domingo");
        break;
    case 1:
        console.log("Hoje é segunda");
        break;
    case 2:
        console.log("Hoje é terça");
        break;
    case 3:
        console.log("Hoje é quarta");
        break;
    case 4:
        console.log("Hoje é quinta");
        break;
    case 5:
        console.log("Hoje é sexta");
        break;
    case 6:
        console.log("Hoje é sábado");
        break;

    default:
        break;
}

//formula 2
let dia =''
switch (diaSemana) {
    case 0:
        dia = "Hoje é domingo";
        break;
    case 1:
        dia = "Hoje é segunda";
        break;
    case 2:
        dia = "Hoje é terça";
        break;
    case 3:
        dia = "Hoje é quarta";
        break;
    case 4:
        dia = "Hoje é quinta";
        break;
    case 5:
        dia = "Hoje é sexta";
        break;
    case 6:
        dia = "Hoje é sábado";
        break;

    default:
        break;
}

console.log(dia);