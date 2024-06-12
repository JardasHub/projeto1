let usuarios = [];

// Função para cadastrar um novo usuário
function cadastrarUsuario() {
let nome = document.getElementById('nome').value;
let senha = document.getElementById('senha').value;

// Salvar os dados do usuário no Local Storage
localStorage.setItem('nome', nome);
localStorage.setItem('senha', senha);

alert("Usuário cadastrado com sucesso!");
window.location.href = "loginsitedecompra.html"; // Redirecionar para a página de login
}

function login() {
let nome = document.getElementById('nome').value;
let senha = document.getElementById('senha').value;

// Obter os dados do usuário do Local Storage
let storedNome = localStorage.getItem('nome');
let storedSenha = localStorage.getItem('senha');

// Verificar se os dados do usuário coincidem
if (nome === storedNome && senha === storedSenha) {
alert("Login bem-sucedido! Bem-vindo, " + nome + "!");
window.location = "Lojadeinicio2.html"
} else {
alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.");
}
}
function bemVindo() {
let storedNome = localStorage.getItem('nome');
document.getElementById("nome").textContent = storedNome; // Atualiza o conteúdo do elemento com o nome do usuário
}

// Chamada à função bemVindo() quando o documento é carregado
document.addEventListener('DOMContentLoaded', bemVindo);