let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addCart(item){
    let qty = prompt("Enter quantity:");
    if(!qty) return;

    cart.push(item + " (Qty: " + qty + ")");
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(item + " added to cart 🛒");
}

// BUY NOW (MAIN FUNCTION)
function buyNow(item, price){

    let qty = prompt("Enter quantity:");
    if(!qty) return;

    let address = prompt("Enter your address:");
    if(!address) return;

    let payment = prompt("Payment method: UPI / COD / Card");

    let total = price * qty;

    // FORMAT MESSAGE
    let msg =
    "🛒 Order Details:\n" +
    "Product: " + item + "\n" +
    "Quantity: " + qty + "\n" +
    "Total: ₹" + total + "\n" +
    "Address: " + address + "\n" +
    "Payment: " + payment;

    // WHATSAPP LINK
    let url = "https://wa.me/919493376611?text=" + encodeURIComponent(msg);

    window.open(url);

    // UPI PAYMENT
    if(payment.toLowerCase() === "upi"){
        let upi = "9491874711@ptsbi";  // 🔴 CHANGE THIS
        let payLink = "upi://pay?pa=" + upi + "&pn=Silk%20Group&am=" + total + "&cu=INR";

        window.open(payLink);
    }
}

// ORDER FULL CART (OPTIONAL)
function orderNow(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let name = prompt("Enter your name:");
    let address = prompt("Enter your address:");
    let payment = prompt("Payment method: UPI / COD / Card");

    let msg = "🛒 Order Details:\n";

    cart.forEach((item, index) => {
        msg += (index + 1) + ". " + item + "\n";
    });

    msg += "\nName: " + name;
    msg += "\nAddress: " + address;
    msg += "\nPayment: " + payment;

    let url = "https://wa.me/9194933766711?text=" + encodeURIComponent(msg);

    window.open(url);

    localStorage.removeItem("cart");
}
