import React from "react";
import CategoryItems from "../categoryItems/CategoryItems";
import "../categoryItems/CategoryItems.scss";
import "../directory/CategoryMenu.scss";

const DirectoryMenu = ({ items }) => {
  return (
    <div className="categories-container">
      {items.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
