const cart = [
    101,
    { item: "shoes", price: 4000 },
    { item: "shirt", price: 700 },
    { item: "watch", price: 10000 }
  ];
  
  createOrder(cart)
    .then(function ({ orderId, sum }) {
      console.log("OrderId:", orderId);
      return sum;
    })
    .then(function (sum) {
      return proceedToPayment(sum);
    })
    .then(function (sum) {
      return orderSummary(sum);
    },(error)=>{

    })
    .then(function (sum) {
      return walletBalance(sum);
    })
    .then(function (balance) {
      console.log(balance);
    })
    
    .catch(function (err) {
      console.error("Error encountered:", err.message); 
    })
  
  function walletBalance(sum) {
    return new Promise((resolve, reject) => {
      let amount = 100000;
      if (sum <= amount) { 
        const remainingBalance = amount - sum;
        return resolve(`The remaining balance in wallet: ${remainingBalance}`);
      }
      reject(new Error("Insufficient balance"));
    });
  }
  
  function orderSummary(sum) {
    return new Promise((resolve, reject) => {
      console.log("Order summary:", sum);
      resolve(sum);
    });
  }
  
  function proceedToPayment(sum) {
    return new Promise((resolve, reject) => {
      if (!paymentResolved()) {
        return reject(new Error("Payment failed")); 
      }
      console.log("Payment resolved.");
      setTimeout(function(){
        resolve(sum);
      },2000)
      
    });
  }
  
  function createOrder(cart) {
    return new Promise((resolve, reject) => {
      if (!validateOrder(cart)) {
        return reject(new Error("Cart is not valid"));  
      }
  
      let orderId = cart[0];
      let sum = 0;
      for (let i = 1; i < cart.length; i++) {
        if (cart[i].price) { 
          sum += cart[i].price;
        }
      }
      setTimeout(function(){
        resolve({ orderId, sum });
      },5000)
      
    });
  }
  
  function validateOrder(cart) {
    return cart.length > 1; 
  }
  
  function paymentResolved() {
    return true;
  }
  