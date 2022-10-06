import React, { useEffect, useState } from "react";
import "./Category.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import ProductCard from "../../components/productCard/ProductCard";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
