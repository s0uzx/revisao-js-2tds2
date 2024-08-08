let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];

let pizza = [];

pizza.push (massas[2]);
pizza.push (molhos[2]);
pizza.push (queijos[1]);
pizza.push (carnes[2]);
pizza.push (vegetais[4]);

console.log("Pizza Montada!");

for(let i = 0; i < pizza.length; i++) {


    if (i == 0 && pizza[i] == massas[1]) {
        console.log("hmmm... tá fit");
    
    }
    console.log(pizza[i]);
}
