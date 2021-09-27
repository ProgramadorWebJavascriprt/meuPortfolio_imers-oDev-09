/* Revisão de Código Segunda-feira,27/09/2021 das 08:45:00 até as  h +|-*/
// André
var nome = "André Luis";
var notaDoPrimeiroBimeste = 9.435;
var notaDoSegundoBimestre = 8.465;
var notaDoTerceiroBimestre = 9.489;
var notaDoQuartooBimestre = 9.489;
// var notaFinal = notaDoPrimeiroBimeste + 1;
// console.log("Bem vindo " + nome);
// console.log(notaFinal);
var notaFinal =
  (notaDoPrimeiroBimeste +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartooBimestre) /
  4;
var notaFixada = notaFinal.toFixed(1); // arredonda a nota
console.log("Aluno:" + nome);
console.log("sua nota final é :", notaFixada);

// Revisão:
// # variaveis,strings,console.log,toFixed,Operações,matemáticas, concaternação
