import React from "react";
import {DirectoryContainer , Body , BackgroundImage ,Header , Paragraph } from './directoryItemsStyles.jsx'

const DirectoryItems = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <DirectoryContainer>
        <BackgroundImage
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <Body>
          <Header>{title}</Header>
          <Paragraph>SHOP NOW</Paragraph>
        </Body>
      </DirectoryContainer>
    </>
  );
};

export default DirectoryItems;
