import React from "react";
import "./checkoutItems.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";

const CheckOutItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearCartFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartDropdownContext);

  const clearCartHandler = () => clearCartFromCart(cartItem);
  const addtoCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          {/* &#10094; */} -
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addtoCartHandler}>
          {/* &#10095; */} +
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItems;
