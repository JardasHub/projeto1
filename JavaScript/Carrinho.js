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
