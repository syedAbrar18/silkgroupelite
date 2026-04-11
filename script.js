let cart = 0;

function addCart(item) {
    cart++;
    document.getElementById("cartCount").innerText = cart;
    alert(item + " added to cart");
}

function buyNow(item) {
    window.open("https://wa.me/919491874711?text=I want to buy " + item);
}
