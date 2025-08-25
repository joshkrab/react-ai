import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 70px; /* Adjust this value to match the header's height */
  }
`;

const StyledHeader = styled.header`
  background: linear-gradient(to right, #83a4d4, #b6fbff);
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color:rgb(41, 105, 123);
  }
`;

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/page1">Page 1</NavLink>
            </li>
            <li>
              <NavLink to="/page2">Page 2</NavLink>
            </li>
          </NavList>
        </Nav>
      </StyledHeader>
    </>
  );
};

export default Header;
