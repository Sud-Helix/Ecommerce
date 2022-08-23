import React from "react";
import "./productCard.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cartDropdownContext";
import Button from "../button/button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropdownContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <>
      <div className="product-card-container ">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
