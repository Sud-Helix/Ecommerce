import React from "react";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import CheckOutItems from "../../components/checkoutItems/CheckoutItems";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, totalCount } = useContext(CartDropdownContext);

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Products</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckOutItems key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className="total">Total: ${totalCount}</span>
      </div>
    </>
  );
};

export default Checkout;
