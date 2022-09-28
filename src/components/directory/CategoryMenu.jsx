import React from "react";
import DirectoryItems from "../directoryItems/directoryItems";
import "../directoryItems/directoryItems.scss";
import "../directory/CategoryMenu.scss";

const DirectoryMenu = ({ items }) => {
  return (
    <div className="categories-container">
      {items.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
