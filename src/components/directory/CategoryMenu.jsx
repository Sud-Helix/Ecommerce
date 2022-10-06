import React from "react";
import DirectoryItems from "../directoryItems/directoryItems";
import "../directoryItems/directoryItemsStyles.jsx";
import {CategoryContainer} from './CategoryMenuStyles.jsx';

const DirectoryMenu = ({ items }) => {
  return (
    <CategoryContainer>
      {items.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </CategoryContainer>
  );
};

export default DirectoryMenu;
