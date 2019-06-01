var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName:item,itemPrice:Math.floor(Math.random()*100)+1}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0) {
    return 'Your shopping cart is empty.'
  } else {
    var message = ['In your cart, you have ']
    for (let i=0,i<cart.length-1,i++) {
      message.push(`${cart[i].itemName} at $ ${cart[i].itemPrice}, `)
    }
    var lastItem = cart.slice(-1)
    message.push(` and ${cart.slice(-1)[0].} at ${}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
