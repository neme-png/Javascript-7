let temperatura = Number(prompt ("Quanti gradi fanno da te?"))

if (temperatura >= 30){
    console.log("lu mare, lu sole, lu ientu");
    
}else if (temperatura < 30 && temperatura > 20){
    console.log("mi dia una peroni sudata");

}else if (temperatura > 0 && temperatura <= 20 ) {
    console.log("non ci sono più le mezze stagioni");
    
}else if (temperatura <= 0 && temperatura > -10){
    console.log("non è tanto il freddo quanto l'umidità");
    
}else{
    console.log("copriti... ancora ti raffreddi");
}

let t = Number(prompt("Quanti gradi fanno da te?"))

switch (true) {
    case t >= 30:
        console.log("lu mare, lu sole, lu ientu");
        break;

    case t < 30 && t > 20:
        console.log("mi dia una peroni sudata");
        break;

    case t > 0 && t <= 20:
        console.log("non ci sono più le mezze stagioni");
        break;

    case t <= 0 && t > -10:
        console.log("non è tanto il freddo quanto l'umidità");
        break;
    default:
        console.log("copriti... ancora ti raffreddi");
        break;
}