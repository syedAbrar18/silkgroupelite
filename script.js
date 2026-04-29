<script>
function buyNow(item, price){

let qty = prompt("Enter quantity:");
if(!qty) return;

let address = prompt("Enter your address:");
if(!address) return;

let payment = prompt("Payment method: UPI / COD / Card");

let total = price * qty;

let msg = "Order Details:%0A"
+ "Product: " + item + "%0A"
+ "Quantity: " + qty + "%0A"
+ "Total: ₹" + total + "%0A"
+ "Address: " + address + "%0A"
+ "Payment: " + payment;

if(payment.toLowerCase() === "upi"){
    let upi = "9491874711@ptsbi";  // 🔴 change this
    let payLink = "upi://pay?pa=" + upi + "&pn=Silk%20Group&am=" + total + "&cu=INR";

    window.open(payLink);
}

window.open("https://wa.me/919493376611?text=" + encodeURIComponent(msg));
}
