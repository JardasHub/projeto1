let usuarios = [], totalCompraroupa, qtdRP, usuRegistrado

// Função para cadastrar um novo usuário
    function cadastrarUsuario() {
        let nome = document.getElementById('nome').value
        let senha = document.getElementById('senha').value

        usuRegistrado = JSON.parse(localStorage.getItem("usuarios")) || {} // Verificar se já existe algum dado armazenado para evitar sobrescrever


            usuRegistrado[nome] = { // Adicionar o novo usuário
                nome: nome,
                senha: senha,
            };
            localStorage.setItem("usuarios", JSON.stringify(usuRegistrado))

        alert("Usuário cadastrado com sucesso!")
        window.location.href = "loginsitedecompra.html" // Redirecionar para a página de login
    }

function login() {
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    // Obter os dados do usuário do Local Storage
    usuRegistrado = JSON.parse(localStorage.getItem("usuarios")) || {}

    // Verificar se os dados do usuário coincidem
    if (usuRegistrado.hasOwnProperty(nome)) {

        if (usuRegistrado[nome].senha === senha) {
            alert(`Login bem-sucedido! Bem-vindo, ${nome} !`)
            localStorage.setItem("usuarioLogado", nome)
            window.location = "Lojadeinicio2.html"
        } else {
            alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.")
        }
    } else {
        alert(`o nome: ${nome} não esta cadastrado.`)
    }
}
function bemVindo() {
    let nome = localStorage.getItem("usuarioLogado") // Obtém o nome do usuário logado do Local Storage
    document.getElementById("nome").textContent = nome // Atualiza o conteúdo do elemento com o nome do usuário
}

// Chamada à função bemVindo() quando o documento é carregado
document.addEventListener('DOMContentLoaded', bemVindo)

function carrinho(){
    let totalCompraRoupaF = ""
    qtdRP = parseInt(document.getElementById("pdt").value)
    totalCompraroupa = qtdRP * parseFloat(document.getElementById("rp").innerText.replace(',' , '.'))
    let nomeProduto = document.getElementById("np").innerText
    totalCompraRoupaF = totalCompraroupa.toFixed(2)
    document.getElementById("roupa").innerHTML = `${qtdRP} x ${nomeProduto} = R$${totalCompraRoupaF}`
}


// Parte de remover produtos: 

document.addEventListener("DOMContentLoaded", function() {
    const removeProductButtons = document.getElementsByClassName("remove-product-button");
    for (let i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", function(event) {
            event.target.parentElement.parentElement.remove()

        });
    }
})

// Parte de Puxar o preço:

const cartProducts = document.getElementsByClassName("cart-product")
for(var i = 0; i < cartProducts.length; i++){
    console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText
    const productQuantity = cartProducts.getElementsByClassName("product-qtd-input")[0].value
    console.log(productQuantity)
}
