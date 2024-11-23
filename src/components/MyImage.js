import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const uniqueImages = imgs.filter((img, index, self) =>
    index === self.findIndex((t) => t.url === img.url)
  );

  if (!imgs || imgs.length === 0) {
    return <p>No images available</p>; 
  }

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {uniqueImages.map((curImg, index) => (
          <figure key={index}>
            <img
              src={curImg.url}
              alt={curImg.filename}
              className="box-image--style"
              onClick={() => handleImageClick(curImg)}
            />
          </figure>
        ))}
      </div>
      <div className="main-screen">
        {mainImage && (
          <img src={mainImage.url} alt={mainImage.filename} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      max-width: 100%;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid transparent;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .main-screen {
    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
`;

export default MyImage;
