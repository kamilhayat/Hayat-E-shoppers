import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);

 

  if (!imgs || imgs.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <Wrapper>
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

  .main-screen {
    img {
      object-fit: contain;
      align-items: center;
      justify-content: center;
      width: 300%; 
      height: 300%;
      margin-top:-15rem;
    }
  }
`;

export default MyImage;
