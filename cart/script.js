function createCartItem(cartItemData) {
    const { img,country,title, price, quantity } = cartItemData;
    
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
      
    const cartItemLeft = document.createElement("div");
    cartItemLeft.classList.add("cart-item-left");
    
    const imgi = document.createElement("img");
    imgi.src = img;
    imgi.alt = "";
    
    const cartItemLeftActions = document.createElement("div");
    cartItemLeftActions.classList.add("cart-item-left-actions");
    
    const itemNameLink = document.createElement("strong");
    itemNameLink.textContent =country;

    const descrip=document.createElement("p")
    descrip.textContent=title
    
    const cartItemAmount = document.createElement("div");
    cartItemAmount.classList.add("cart-item-amount");
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML =
      cartItemData.quantity > 1
        ? '<ion-icon name="remove"></ion-icon>' // тернарный оператор
        : '<ion-icon name="trash-outline"></ion-icon>';
    trashButton.addEventListener("click",()=>{decreaseQuantity(cartItemData)})    
    
    const amountText = document.createElement("p");
    amountText.textContent = quantity;
      
    
    const addButton = document.createElement("button");
    addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
    addButton.addEventListener("click",()=>{increaseQuantity(cartItemData)})
    
    cartItemAmount.appendChild(trashButton);
    cartItemAmount.appendChild(amountText);
    cartItemAmount.appendChild(addButton);
    
    cartItemLeftActions.appendChild(itemNameLink);
    cartItemLeftActions.appendChild(descrip)
    cartItemLeftActions.appendChild(cartItemAmount);
    
    cartItemLeft.appendChild(imgi);
    cartItemLeft.appendChild(cartItemLeftActions);
    
    const cartItemRight = document.createElement("div");
    cartItemRight.classList.add("cart-item-right");
    
    const closeButton = document.createElement("button");
    closeButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'; 
    closeButton.addEventListener("click",()=>{removeProduct(cartItemData)}) //корзинада бар заттарды удалить ету
    
    const priceText = document.createElement("span");
    priceText.textContent = "$"+getPrice(price*quantity);
    
    cartItemRight.appendChild(closeButton);
    cartItemRight.appendChild(priceText);
    
    cartItem.appendChild(cartItemLeft);
    cartItem.appendChild(cartItemRight);
    
    return cartItem;
  }
  
  function removeProduct(destinations) {
    let cart = JSON.parse(localStorage.getItem("travel"))  || [] ;
    cart = cart.filter((p) => p.id != destinations.id);
    localStorage.setItem("travel", JSON.stringify(cart));
    window.location.reload(); //корзинадан бир обьектты удалить етемиз
  }
  
  
  function getPrice(price) {
    let priceStr = String(price);
    if (priceStr.length > 4) {
      const priceSlices = [];
      for (let i = priceStr.length - 3; i >= 0; i -= 3) {
        priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));
        priceStr = priceStr.slice(0, i);
      }
      priceSlices.unshift(priceStr);
      priceStr = priceSlices.join(" ");
    }
    return priceStr;
  }
  
  
  
  function increaseQuantity(destinations) { // корзинада заттарды косу
    let cart = JSON.parse(localStorage.getItem("travel")) || [];
    cart = cart.map((p) =>
      p.id == destinations.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    localStorage.setItem("travel", JSON.stringify(cart));
    window.location.reload();
  }
  
  function decreaseQuantity(destinations) { //корзинадан заттарды минус ету
    let cart = JSON.parse(localStorage.getItem("travel"))   || [];
    if (destinations.quantity > 1) {
      cart = cart.map((p) =>
        p.id == destinations.id ? { ...p, quantity: p.quantity - 1 } : p
      );
    } else {
      cart = cart.filter((p) => p.id !== destinations.id);
    }
    localStorage.setItem("travel", JSON.stringify(cart));
    window.location.reload();
  }
  
  
  const cart=localStorage.getItem("travel")
  const cartItems=JSON.parse(cart)
  console.log(cartItems)
  for(const item of cartItems){
    const card=createCartItem(item)
    document.querySelector(".cart-items").appendChild(card)
  }
  
  
  
  // PRICE FIND AND SHOW
  
  let clear=document.querySelector("#clear-cart")  //empty trash
  function clearCart(destinations) {
    let cart = JSON.parse(localStorage.removeItem("travel"))  || [];
    localStorage.setItem("paris", JSON.stringify(cart));
    window.location.reload();
  }





  const productsPriceBox = document.querySelector("#products-price");

const totalPriceTextBox = document.querySelector("#total-price");
console.log(getPrices());
const { productsPrice, deliveryPrice, totalPrice } = getPrices();

productsPriceBox.textContent = "$"+getPrice(productsPrice) ;

totalPriceTextBox.textContent ="$"+ getPrice(totalPrice);



function getPrices(destinations) {
  let cart = JSON.parse(localStorage.getItem("travel")) ||  [];
  if (cart.length == 0) {
    return {
      productsPrice: 0,
      totalPrice: 0
    };
  } else {
    const itemPrices = cart.map((p) => p.price * p.quantity);
    let productsPrice = 0;
    itemPrices.forEach((p) => (productsPrice += p));
    // const deliveryPrice = productsPrice > 8000 ? 0 : 700;
    return {
      productsPrice: productsPrice,
      // deliveryPrice: deliveryPrice,
      totalPrice: productsPrice ,
    };
  }
}






// DELETE FROM CART
function gerCartSize(){
  const cart=JSON.parse(localStorage.getItem("travel")) || []
  return cart.length
}
const cartSize=document.querySelector("#cart-size")
cartSize.textContent=gerCartSize()















// function createCartItem(cartItemData) {
//     const { imgUrl, location, priceRange, quantity } = cartItemData;
    
//     const cartItem = document.createElement("div");
//     cartItem.classList.add("cart-item");
      
//     const cartItemLeft = document.createElement("div");
//     cartItemLeft.classList.add("cart-item-left");
    
//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "";
    
//     const cartItemLeftActions = document.createElement("div");
//     cartItemLeftActions.classList.add("cart-item-left-actions");
    
//     const itemNameLink = document.createElement("strong");
//     itemNameLink.textContent = location;
    
//     const cartItemAmount = document.createElement("div");
//     cartItemAmount.classList.add("cart-item-amount");
    
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML =
//       cartItemData.quantity > 1
//         ? '<ion-icon name="remove"></ion-icon>' // тернарный оператор
//         : '<ion-icon name="trash-outline"></ion-icon>';
//     trashButton.addEventListener("click",()=>{decreaseQuantity(cartItemData)})    
    
//     const amountText = document.createElement("p");
//     amountText.textContent = quantity;
      
    
//     const addButton = document.createElement("button");
//     addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
//     addButton.addEventListener("click",()=>{increaseQuantity(cartItemData)})
    
//     cartItemAmount.appendChild(trashButton);
//     cartItemAmount.appendChild(amountText);
//     cartItemAmount.appendChild(addButton);
    
//     cartItemLeftActions.appendChild(itemNameLink);
//     cartItemLeftActions.appendChild(cartItemAmount);
    
//     cartItemLeft.appendChild(img);
//     cartItemLeft.appendChild(cartItemLeftActions);
    
//     const cartItemRight = document.createElement("div");
//     cartItemRight.classList.add("cart-item-right");
    
//     const closeButton = document.createElement("button");
//     closeButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'; 
//     closeButton.addEventListener("click",()=>{removeProduct(cartItemData)}) //корзинада бар заттарды удалить ету
    
//     const priceText = document.createElement("span");
//     priceText.textContent = "$"+getPrice(priceRange*quantity);
    
//     cartItemRight.appendChild(closeButton);
//     cartItemRight.appendChild(priceText);
    
//     cartItem.appendChild(cartItemLeft);
//     cartItem.appendChild(cartItemRight);
    
//     return cartItem;
//   }

//   // Вызываем функцию для создания элементов корзины
//   const cart = localStorage.getItem("travel");
//   const cartItems = JSON.parse(cart);
//   for (const item of cartItems) {
//     const card = createCartItem(item);
//     document.querySelector(".cart-items").appendChild(card);
//   }
