// Operadores aritméticos => " + - * / "

/*Carlos Eduardo tem 30 anos, pesa 84 kg,
 tem 1.8 de altura e seu IMC é de 25.925925925925924 */

 const nome = 'Carlos Eduardo';
 const sobrenome = 'Ramos Mariano';
 const idade = 30;
 const peso = 84;
 const alturaEmM = 1.80;
 let imc; // peso / (altura * altura)
 let anoNascimento = 2022 - idade;

 imc = peso / (alturaEmM * alturaEmM);
 anoNascimento = 2022 - idade;

// Unindo valores logo abaixo.
 console.log(nome + sobrenome + ' tem' + idade + ' anos,pesa' + peso + ' kg,');

//Template Strings logo abaixo
 console.log(`tem ${alturaEmM} de altura e seu indice de massa corporal é ${imc}`);
 console.log(`${nome} nasceu em ${anoNascimento}.`);


