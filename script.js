// Mostre no console.log a mensagem "Ano novo está chegando!!";
console.log("Ano novo está chegando!!");

// Crie uma variável que receba o nome da cantora Mariah Carey
const nomeCantora = "Mariah Carey";

// Crie uma variável que receba a idade dela
const idadeMariah = 54; 

// Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
const anoAtual = new Date().getFullYear();

//Crie uma variável para guardar a data de nascimento da Mariah Carey
const anoNascimentoMariah = anoAtual - idadeMariah;

//Mostre no console a data de nascimento da Mariah Carey
console.log("Ano de nascimento da Mariah Carey:", anoNascimentoMariah);

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
const quartaFeira = true;
console.log("Valor da variável quartaFeira:", quartaFeira);

// Exiba no console o tipo de dado da variável quartaFeira;
console.log("Tipo de dado da variável quartaFeira:", typeof quartaFeira);

// Crie uma condição SE você for maior ou igual 18 
const idade = 23;

if (idade >= 18) {
  console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
  console.log("Sinto muito, mas assistirá da TV Globo.");
}

// Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO.
const seuMesAniversario = "Agosto"; // Altere para o seu mês de aniversário

if (seuMesAniversario === "Agosto" || seuMesAniversario === "Dezembro" || seuMesAniversario === "Junho") {
  console.log("Uma ou mais opções estão corretas. O mês escolhido foi o mês", seuMesAniversario);
} else {
  console.log("Algo de errado não está certo, o mês digitado foi o mês", seuMesAniversario);
}
