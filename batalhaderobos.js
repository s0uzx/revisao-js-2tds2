let armas = ["awp", "lança-plasma", "granada","bomba eletrizante"];



let ataques = [];


ataques.push("Cypher");
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[0]);
ataques.push(armas[2]);
ataques.push(armas[0]);
ataques.push(armas[3]);

for (let  i = 0; i < ataques.length; i++){
    if (i == 0){
        console.log (`Nome do robô: ${ataques[i]}`)
            } else {
                console.log(`Ataque ${i}: ${ataques[i]}`)
    }
}
