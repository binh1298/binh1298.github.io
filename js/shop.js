// Local Storage
function initializePageStorage()
{
  if(window.localStorage.getItem("numOfProductInCart") == null)
  {
    window.localStorage.setItem("numOfProductInCart", 0);
  }
  if(window.localStorage.getItem("buySuccessfully") == null)
  {
    window.localStorage.setItem("buySuccessfully", false);
  }
}
function findProductInLocalStorage(productCode)
{
  for(i=0; i<window.localStorage.length;i++)
  {
    var result = window.localStorage.getItem(productCode);
    if(result != null) return true;
  }
  return false;
}
function buyProduct(productCode)
{
  initializePageStorage();
  var result = findProductInLocalStorage(productCode);
  transformForm("translate(0, 0)");

  var buySuccessfully = window.localStorage.getItem("buySuccessfully");
  if(buySuccessfully == 'true')
  {
    checkOut();
    return;
  }

  if(result == false) // Product code doesn't exists in local
  { 
    window.localStorage.setItem(productCode, 1);
    var numOfProductsInCart = window.localStorage.getItem("numOfProductInCart");
    numOfProductsInCart++;
    window.localStorage.setItem("numOfProductInCart", numOfProductsInCart);
  }
  else
  {
    
  }
}
function removeProduct(productCode)
{
  var result = findProductInLocalStorage(productCode);
  if(result == false) // Product code doesn't exists in local
  { 
  }
  else
  {
    window.localStorage.removeItem(productCode);
    var numOfProductsInCart = window.localStorage.getItem("numOfProductInCart");
    numOfProductsInCart--;
    window.localStorage.setItem("numOfProductInCart", numOfProductsInCart);
  }
}
function updateVisualCart()
{
  var totalPrice = 0;
  var dmc3 = document.getElementById("dmc3-in-cart");
  var dmc4 = document.getElementById("dmc4-in-cart");
  if(findProductInLocalStorage("dmc3"))
  {
    dmc3.style.display = "block";
    dmc3.style.opacity = "1";
    totalPrice++;
  }
  else
  {
    dmc3.style.display = "none";
    dmc3.style.opacity = "0";
  }
  if(findProductInLocalStorage("dmc4"))
  {
    dmc4.style.display = "block";
    dmc4.style.opacity = "1";
    totalPrice++;
  }
  else
  {
    dmc4.style.display = "none";
    dmc4.style.opacity = "0";
  }
  document.getElementById("total-price").innerHTML = (totalPrice * 60) + "$"; 
}
function checkOut()
{
  var buySuccessfully = window.localStorage.getItem("buySuccessfully");
  if(validateForm() == false && buySuccessfully == 'false')
  {
    return;
  }

  var messenger = document.getElementById("form-messenger");
  messenger.style.visibility = "visible";
  if(window.localStorage.getItem("numOfProductInCart") <= 0)
  {
    messenger.innerHTML = "You haven't added anything to the cart!";
    return;
  }
  if(window.localStorage.getItem("numOfProductInCart") == 1)
  {
    messenger.innerHTML = "Check your email and enjoy the game!"
  }
  else
  {
    messenger.innerHTML = "Check your email and enjoy the games!"
  }
  buySuccessfully = true;
  window.localStorage.setItem("buySuccessfully", buySuccessfully);
  document.getElementById("customer-info-form").style.height = "0px";
  setTimeout(
    function(){
      document.getElementById("customer-info-form").style.display = "none";
      transformForm('translateX(-200%)');
    },
    3000
  );
}
// Buttons events and whatnot
productImgIndex = 0;
function changeProductImage(productIndex){
  if(productIndex == productImgIndex) return;
  var productArr = [
    "resources/images/buy_this_game/dante_vs_nero_gun.png",
    "resources/images/buy_this_game/dante_vs_vergil.png"
  ]
  var productImg = document.getElementById("grid-product-image-overlay");
  var x = "url('" + productArr[productIndex] + "')";
  productImgIndex = productIndex;
  productImg.style.backgroundImage = x;
}
function showInputBorder(inputField)
{
  inputField.parentElement.classList.add("max-width-pseudo");
}
function hideInputBorder(inputField)
{
  inputField.parentElement.classList = "form-text-field-container";
}
function transformForm(translate)
{
  document.getElementById("shop-form-container").style.transform = translate;
}
