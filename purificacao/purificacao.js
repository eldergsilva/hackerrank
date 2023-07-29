// Purificação
/*

Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

Dado corrompido	Dado purificado
*Canis %lupus )familiaris	Canis lupus familiaris
Felis) silvestris *catus&	Felis silvestris catus
$Ailuropoda@ melanoleuca!	Ailuropoda melanoleuca
Input Format*/

function solucao(stringCorrompida) {
    let dadoPurificado ='';
	for( let letra of stringCorrompida){
        if( letra ==='!' || letra ==='@' || letra ==='#' || letra ==='$' || letra ==='%' ||letra ==='&' || letra ==='*' || letra ==='(' || letra ===')' || letra ==='.'){          
           
           } else{
            dadoPurificado = dadoPurificado+letra;
        }       
  }
    console.log(dadoPurificado);
} 

function processData(input) {
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});