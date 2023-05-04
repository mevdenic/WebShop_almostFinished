//cart
let cartOpen = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let cartClose = document.querySelector('#cart-close');


//opening and closing cart
cartOpen.onclick = () =>{
    cart.classList.add("active");
    updateTotal();
};

cartClose.onclick = () =>{
    cart.classList.remove("active");
};


//on page item counter
var itemCounter = 1;
function adding(){
    itemCounter ++;
    document.getElementById("item-counter").innerHTML = itemCounter;
};

function subtracting(){
    
    if (itemCounter > 1){
        itemCounter--;
        document.getElementById("item-counter").innerHTML = itemCounter;
    }
};




var cartAmmount = document.getElementById('cart-ammount');

//removing items
var removeCartButton = document.getElementsByClassName('cart-remove')
for(let i = 0; i<removeCartButton.length; i++){
    let button = removeCartButton[i];
    button.addEventListener('click', removeCartItem);
    console.log(removeCartButton.length)
    cartAmmount.innerHTML = removeCartButton.length;  
}
function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal(); 
    cartAmmount.innerHTML = removeCartButton.length;
    if(removeCartButton.length == 0){
        var emptyCart = document.createElement('div');
        emptyCart.id = 'empty-div'
        var parent = document.getElementById("cart-content");
        parent.appendChild(emptyCart);
        emptyCart.innerHTML = 'Cart is empty.'
        document.getElementsByClassName('total-price')[0].innerHTML = '$0';
    }    
}


//total price
function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0; 
    for(let i = 0; i<cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-product-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerHTML.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + price * quantity;
        result = total.toFixed(2);
        document.getElementsByClassName('total-price')[0].innerHTML = '$' + result;
    }
};

let quantityInputs = document.getElementsByClassName('cart-quantity');

for(let i = 0; i<quantityInputs.length; i++){
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

function quantityChanged(){
    updateTotal();
}



//Adding items
function addToCartFunc(){
    if(removeCartButton.length == 0){
        let emptyCart = document.getElementById('empty-div')
        emptyCart.remove();
    }
    let parent = document.getElementById("cart-content");
    var productName = document.getElementById('product-name').innerHTML;
    var productPrice = document.getElementById('product-price').innerHTML;
    var productImg = document.getElementById('product-img').src;

    if (parent.innerHTML.includes(productName)) {
        alert('Item already added to cart.');
    }
    else{
        let newDiv = document.createElement('div');
        newDiv.className = 'cart-box';
            
        parent.appendChild(newDiv);
            
        let newDivContent = ` 
            <img src=${productImg} alt="" class="cart-img">
            <div class="detail-box">
            <div class="cart-product-name">${productName}</div>
            <div class="cart-product-price">${productPrice}</div>
            <input type="number" value="${itemCounter}" min="1" max="99" class="cart-quantity">
            </div>
            <i class="fa-solid fa-trash icon-link cart-remove"></i>`
            
        newDiv.innerHTML = newDivContent;
        itemCounter = 1;
        document.getElementById("item-counter").innerHTML = itemCounter;
    }

    for(let i = 0; i<removeCartButton.length; i++){
        let button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
        console.log(removeCartButton.length)
        cartAmmount.innerHTML = removeCartButton.length; 
    }
    
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for(let i = 0; i<quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    
    function quantityChanged(){
        updateTotal();
    }
    
    updateTotal()
    
};












