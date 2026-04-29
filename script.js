let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addCart(item){
    let qty = prompt("Enter quantity:");
    if(!qty) return;

    cart.push(item + " (Qty: " + qty + ")");
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(item + " added to cart 🛒");
}

// ORDER ON WHATSAPP
function orderNow(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let msg = "Order Details:%0A";

    cart.forEach((item, index) => {
        msg += (index + 1) + ". " + item + "%0A";
    });

    window.open("https://wa.me/919493376611?text=" + msg);

    // CLEAR CART AFTER ORDER
    localStorage.removeItem("cart");
}
