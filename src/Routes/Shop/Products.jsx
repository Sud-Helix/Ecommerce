import React from "react";
// import shopData from "../../shopdata.json";
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./Products.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
