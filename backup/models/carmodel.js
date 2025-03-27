// models/cartModel.js

let cart = [];

exports.addProductToCart = (product) => {
  cart.push(product);
};

exports.removeProductFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
};

exports.getCart = () => {
  return cart;
};
