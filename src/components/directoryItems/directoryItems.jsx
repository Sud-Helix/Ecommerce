import React from "react";
import "./directoryItems.scss";

const DirectoryItems = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <div className="directory-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="body">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    </>
  );
};

export default DirectoryItems;
