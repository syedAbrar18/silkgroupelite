let cart = [];

function addCart(item){
    cart.push(item);
    alert(item + " added to cart 🛒");
}

function orderNow(){
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let msg = "Order Details:%0A";

    cart.forEach((item, index) => {
        msg += (index + 1) + ". " + item + "%0A";
    });

    window.open("https://wa.me/919493376611?text=" + msg);
}
