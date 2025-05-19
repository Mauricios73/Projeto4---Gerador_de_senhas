/*const button = document.querySelector('#button');
const result = document.querySelector('#result');
const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");

const symbol = ['@','!','*', '&'];
let password = '';

function generatePass() {
  const randomSymbol = Math.floor(Math.random() * symbol.length);
  const randomSymbol2 = Math.floor(Math.random() * symbol.length);
  let input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');

  const letterToNumberCheck = document.querySelector('#letterToNumber');
  const upperCaseCheck = document.querySelector('#enableUpperCase');
  let number = -2;

  if(input.length > 0) {

    if (letterToNumberCheck.checked === true) {
      input = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
    } else {
      input;
    }

    if (upperCaseCheck.checked) {
      input = input.split('').map((v) =>
      Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
      ).join('');
    } else {
      input;
    }

    password = symbol[randomSymbol] + input + symbol[randomSymbol2] + Math.random().toString(32).slice(number);
    result.innerHTML = password;

    copyButton.classList.add("--display");
    setTimeout(function () {
      result.innerHTML = ''; copyButton.classList.remove("--display");
    }, 70000)
  }
}

function copyResult(result) {
  const textArea = document.createElement("textArea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  
  copied.classList.add("--show");
  setTimeout(function() {copied.classList.remove("--show");}, 2500);
}
  */

const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");
const symbol = ['@','!','#', '.'];
const words = [
  'sunrise', 'phantom', 'gravity', 'element', 'diamond', 'journey', 'harvest', 'twilight',
  'nebula', 'galaxy', 'serenity', 'crimson', 'ember', 'cascade', 'miracle', 'fortress',
  'sapphire', 'tempest', 'willow', 'destiny', 'glacier', 'onyx', 'zenith', 'thunder'
];
let password = '';

function generatePass() {
  let input = document.querySelector('#input').value.trim().toLowerCase().replace(/\s/g, '');
  const letterToNumberCheck = document.querySelector('#letterToNumber');
  const upperCaseCheck = document.querySelector('#enableUpperCase');

  if (input.length > 0) {
    // Substitui letras por números (opcional)
    if (letterToNumberCheck.checked) {
      input = input.replace(/a/gi, '4').replace(/i/gi, '1').replace(/o/gi, '0').replace(/e/gi, '3');
    }

    // Transforma algumas letras em maiúsculas (opcional)
    if (upperCaseCheck.checked) {
      input = input.split('').map(char =>
        Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
      ).join('');
    }
  }

  const word1 = words[Math.floor(Math.random() * words.length)];
  const word2 = words[Math.floor(Math.random() * words.length)];
  const number = Math.floor(100 + Math.random() * 900); // 3 dígitos
  const sym = symbol[Math.floor(Math.random() * symbol.length)];

  let basePassword = input + word1 + word2 + number + sym;

  // Tira todos os caracteres não alfanuméricos para cálculo correto do tamanho, mas mantém o símbolo no fim
  basePassword = basePassword.replace(/[^a-zA-Z0-9]/g, '');

  // Garante 15 caracteres + símbolo no final
  basePassword = basePassword.slice(0, 15);

  // Primeira letra maiúscula
  basePassword = basePassword.charAt(0).toUpperCase() + basePassword.slice(1);

  password = basePassword + sym; // 16 caracteres no total

  result.innerHTML = password;
  copyButton.classList.add("--display");
/*
  setTimeout(function () {
    result.innerHTML = '';
    copyButton.classList.remove("--display");
  }, 70000);*/
}
function copyResult(result) {
  const textArea = document.createElement("textArea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  
  copied.classList.add("--show");
  setTimeout(function() {copied.classList.remove("--show");}, 2500);
}
