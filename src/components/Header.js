import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo"src='/images/logo2.png' alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #d3d9e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;  /* Use fixed instead of sticky */
  top: 0;           /* Stick to the top */
  width: 100%;      /* Ensure it spans the full width */
  z-index: 1000;    /* Ensure it stays above other content */

  .logo {
    height: 6rem;
  }
`;
export default Header;