productImgIndex = 0;
function changeProductImage(productIndex){
  if(productIndex == productImgIndex) return;
  var productArr = [
    "resources/images/buy_this_game/dante_vs_nero_gun.png",
    "resources/images/buy_this_game/dante_vs_vergil.png"
  ]
  var productImg = document.getElementById("product-image-overlay");
  var x = "url('" + productArr[productIndex] + "')";
  console.log(x);

  productImgIndex = productIndex;
  productImg.style.backgroundImage = x;
}