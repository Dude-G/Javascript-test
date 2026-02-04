const   cart = [
  { name: "Shirt",   price: 25,  quantity: 2 },
  { name: "Jeans",   price: 60,  quantity: 1 },
  { name: "Socks",   price: 8,   quantity: 3 }
];






function calctotal(cart){
   let total = 0;               // ← number zero, not string "0"
   
   for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].price * cart[i].quantity);
        // or shorter: total += cart[i].price * cart[i].quantity;
    }
    
    if (total > 100) {
        total = total * 0.9;
    }
    
    return total;
}