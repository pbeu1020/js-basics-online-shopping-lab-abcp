var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var itemPrice = Math.floor(1+(Math.random()*99));
  var x = {[item] : itemPrice}; // converts item into an Object 
  cart.push(x); // adds key/value pair to cart
  cart[item] = itemPrice;
  //cart.shift()
  console.log (item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
	var cartContents = "In your cart, you have ";
    var contentTerm = ", ";
    var i = 0;
	for (i=0; i<cart.length; i++) {
    
    if (cart.length>2 && cart[i] === cart[cart.length-2]) {
      contentTerm = ", and ";
      }
    if (cart[i] === cart[0] && cart.length === 2) {
      contentTerm = " and ";
      }
    
    if (cart[i] === cart[cart.length-1]) {
      contentTerm = ".";
      }
	  
	 
    cartContents = cartContents + Object.keys(cart[i]) + " at $" + Object.values(cart[i]) +  contentTerm;
	//i++;
    }
	  return console.log(cartContents);	
  }
  else {
	  return console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  
  var i = 0;
	for (i=0; i<cart.length; i++) {
	 
    totalCost = totalCost + parseInt(Object.values(cart[i]));
  }

	return  totalCost;	
}	  

function removeFromCart(item) {
  // write your code here
  
  var i = 0;
  for(i=0; i < cart.length;  i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice (i, 1);
      
    }
  }
  if (!cart.hasOwnProperty(item)) {
    console.log ("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  //var totalCost = total();
  //var i = cardNumber.length;
  if (cardNumber === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }  
    else
  {
    var totalCost = total();
    console.log ("Your total cost is $" + totalCost + ", which will be charged to the card " + cardNumber +".");
    cart = [];
    return cart;
  }
}
