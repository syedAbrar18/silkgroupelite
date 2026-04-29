function buyNow(item, price){

let qty = prompt("Enter quantity:");
if(!qty) return;

let address = prompt("Enter your address:");
if(!address) return;

let payment = prompt("Payment method: UPI / COD / Card");

let total = price * qty;

// PROPER FORMATTED MESSAGE
let msg = 
"🛒 Order Details:\n" +
"Product: " + item + "\n" +
"Quantity: " + qty + "\n" +
"Total: ₹" + total + "\n" +
"Address: " + address + "\n" +
"Payment: " + payment;

// 🔥 VERY IMPORTANT LINE (FIX)
let url = "https://wa.me/919493376611?text=" + encodeURIComponent(msg);

// OPEN WHATSAPP
window.open(url);

// UPI PAYMENT
if(payment.toLowerCase() === "upi"){
    let upi = "9491874711@ptsbi"; // change this
    let payLink = "upi://pay?pa=" + upi + "&pn=Silk%20Group&am=" + total + "&cu=INR";
    window.open(payLink);
}

}
