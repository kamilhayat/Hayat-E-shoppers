import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Welcome to our e-commerce platform, your one-stop destination for a seamless shopping experience. Our website is designed to bring convenience, variety, and quality to your fingertips. Whether you're searching for the latest gadgets, stylish apparel we have you covered with an extensive range of categories.

              Our platform features a user-friendly interface that allows for smooth navigation, product discovery, and a personalized shopping experience. With detailed product pages, multiple high-quality images, and advanced filtering options, you can easily find products that meet your needs.

              We are committed to delivering excellence, whether it's through our responsive customer service, reliable delivery system, or flexible return and exchange policies. Explore our site and enjoy features like grid and list views, advanced search filters, and the ability to save your favorites in a wish list. At our core, we aim to blend technology and convenience to redefine online shopping.

              Join us in creating a world of effortless shopping and discover why we're the preferred choice for so many customers
            </p>
            <NavLink to="/products">
              <Button>show now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
             
                src="images/home.jpg"
                alt="hero section showcasing e-commerce platform"
                className="img-style"
                />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color:#d6d1d7;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;