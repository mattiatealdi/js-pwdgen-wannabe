var nomeUtente;
var cognomeUtente;
var colorePreferito;
var num = 21;
var output;


nomeUtente = prompt('Qual è il tuo nome?');
cognomeUtente = prompt('Qual è il tuo cognome?');
colorePreferito = prompt('Qual è il tuo colore preferito?');

output = nomeUtente + cognomeUtente + colorePreferito + num;

document.getElementById('output').innerHTML = output;