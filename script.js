<script>
function orderNow(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
    alert("Cart is empty!");
    return;
}

let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let payment = prompt("Payment method: UPI / Card / COD");

let msg = "Order Details:%0A";

cart.forEach((item, index) => {
    msg += (index + 1) + ". " + item + "%0A";
});

msg += "%0AName: " + name;
msg += "%0AAddress: " + address;
msg += "%0APayment: " + payment;

// IF UPI SELECTED → OPEN UPI ALSO
if(payment.toLowerCase() === "upi"){
    let upi = "9491874711@upi";
    let payLink = "upi://pay?pa=" + upi + "&pn=Silk%20Group&cu=INR";
    window.open(payLink);
}

window.open("https://wa.me/919491874711?text=" + msg);

localStorage.removeItem("cart");
}
</script>
