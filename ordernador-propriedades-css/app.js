const chalk = require("chalk");
const prompt = require('prompt-sync')();

var listaPropriedadesCss = [];
var inputPropriedade = "";
var isRunning = true;

console.log("Seja bem vindo ao ordenador de propriedades CSS, você pode inserir quantas vocês quiser abaixo e digitar SAIR para exibir a lista de propriedade passadas de forma ordenada.")
while(inputPropriedade !== "SAIR"){
    inputPropriedade = prompt('Insira o nome da propriedade CSS ou digite exatamente SAIR: ');
        if(isRunning === true) {
            listaPropriedadesCss.push(inputPropriedade);
        }
}
listaPropriedadesCss.pop();
listaPropriedadesCss.sort();
for(var i = 0; i < listaPropriedadesCss.length; i++){
    console.log(chalk.blue(listaPropriedadesCss[i]));
}