let search = document.querySelector('.navigation__user-search');
search.onclick = function () {
  let hidemen = document.querySelector('.search-bar');
  hidemen.classList.toggle('search-bar-hide');
}

let entrance = document.querySelector('.navigation__user-login');
entrance.onclick = function(){
  let authorization = document.querySelector('.authorization');
  authorization.classList.toggle('authorization-hide');
}

let cart = document.querySelector('.navigation__user-cart');
cart.onclick = function(){
  let fullCart = document.querySelector('.cart');
  fullCart.classList.toggle('cart__full-view');
}
