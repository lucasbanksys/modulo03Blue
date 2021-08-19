var nome = 'Lucas'; // variavel de escopo global (menos utilizado)
let idade = 26; // variavel de escopo local
const profissao = 'desenvolvedor';      // constante (não pode ser alterada futuramente)
idade = 28;
const mostrarSite = true;
const site = 'www.google.com'

if (mostrarSite) {
    console.log('Hello World');
    console.log("Meu nome é Lucas");
    console.log('Tá querendo oq, novinha?');
    console.log(nome);
    console.log(idade);
    console.log(profissao);
    console.log(site)
}