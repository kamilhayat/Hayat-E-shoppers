import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="footer-section logo-section">
          <NavLink to='/'>
            <img className="logo" src="./images/logo2.png" alt="Logo" />

          </NavLink>
          <h4>Contact</h4>
          <p><strong>Address:</strong> Abul Fazal Enclave, New Delhi</p>
          <p><strong>Phone:</strong> +01 2222 365 / +91-1234567890</p>
          <p><strong>Hours:</strong> Mon-Sat 10:00 - 18:00</p>
          <div className="social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a className="facebook" href="https://www.facebook.com/kamil.hayat.562?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                < FaFacebook />
              </a>
              <a className="twitter" href="https://twitter.com/Kamilhayat19?t=xSKFMpgkbqhcYvbCfO4KaA&s=09" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a className="instagram" href="https://instagram.com/__kamil___hayat___?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/kamil-hayat" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4>About</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="#">Delivery Information</NavLink>
          <NavLink to="#">Privacy Policy</NavLink>
          <NavLink to="#">Terms & Conditions</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="footer-section links-section">
          <h4>My Account</h4>
          <NavLink to="/cart">View Cart</NavLink>
          <NavLink to="#">My Wishlist</NavLink>
          <NavLink to="#">Track My Order</NavLink>
          <NavLink to="#">Help</NavLink>
        </div>

        <div className="footer-section payment-section">
          <h4>Secured Payment Gateway</h4>
          <img src="./images/payment-methods.png" alt="Payment Methods" />
        </div>
      </footer>
      <div className="copyright">
        <p>@{new Date().getFullYear()} www.Eshoppers.com All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #2e3b4e; 
    color: #f3f4f6;
    padding: 2rem 5%;
    position: relative;
  }

  .footer-section {
    flex: 1 1 200px;
    margin: 1rem;
    
  }
    

  .logo-section img {
    max-width: 150px;
    margin-bottom: 1rem;
  }

  .logo-section h4 {
    margin-top: 1rem;
    color: #26a69a;
  }

.social {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-top: 2rem;
}
    .social h4,
    footer-section, h4 {
    margin-bottom: 2rem;
    font-size:1.3rem;
    color: #f3f4f6;
    }

 .social-icons {
  display: flex;
  gap: 1.9rem;
  height:2.8rem;
  justify-content: center;
  font-size: 1.9rem;
}

 .social-icons a {
  transition: transform 0.3s ease;
}

  .social-icons a:hover {
  transform: scale(1.2); 
}


.social-icons .facebook {
  color: #1877f2; 
}

.social-icons .twitter {
  color: #1da1f2; 
}

.social-icons .instagram {
  color: #e1306c;
}

.social-icons .linkedin {
  color: #0077b5; 
}

  .links-section h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #26a69a;
  }

  .links-section a {
    display: block;
    color: #90caf9;
    margin-bottom: 1.5rem;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s;
  }

  .links-section a:hover {
    color: #ff6e40;
  }

  .payment-section h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #26a69a;
  }

  .payment-section img {
    max-width: 100%;
    margin-top: 1rem;
    border: 2px solid #ff6e40; 
  border-radius: 10px;
  }

 .copyright {
  text-align: center;
  padding: 1rem 0;
  color: #90caf9; 
  font-size: 0.9rem;
  border-top: 1px solid #ff6e40; 
}


  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-section {
      flex: none;
      width: 100%;
    }

    .social-icons {
      justify-content: center;
    }
  }
`;

export default Footer;
