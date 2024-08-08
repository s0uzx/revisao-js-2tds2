// preciso verificar se a idade do aluno é maior que 7 anos
// se for maior que 7 anos, ele pode se matricular

let idadeAluno= 2;

if (idadeAluno => 7) {
    console.log("Você pode prosseguir com sua matrícula!");

//Etapa 2

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("Você está na categoria INFANTIL");
}else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("Você está na categoria ADOLESCENTE");
}
}else {
    console.log("Você não pode prosseguir com sua matrícula! :(");
}

