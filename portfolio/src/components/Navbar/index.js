import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Rory Mackintosh</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
