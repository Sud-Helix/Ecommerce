import React from "react";
import { CartItemContainer , ItemDetails ,Name } from "./cartItemsStyles.jsx"; 

const CartItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <>
      <CartItemContainer>
        <img src={imageUrl} alt={name} />
        <ItemDetails>
          <Name>{name}</Name>
          <span className="price">
            {quantity} X ${price}
          </span>
        </ItemDetails>
      </CartItemContainer>
    </>
  );
};

export default CartItems;
