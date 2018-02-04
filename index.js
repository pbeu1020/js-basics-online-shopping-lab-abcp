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
  return cart  ;
}