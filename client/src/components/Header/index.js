import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import '../../Style/Style.css'

  const Header = (props) => {

    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">GoogleBooks</NavbarBrand>
          <NavLink href="/components/" className="socialMedia">Search</NavLink> |
          <NavLink href="/components/" className="socialMedia">Saved</NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <h1 className="socialMedia">
                <a alt="linkedin" href="https://www.linkedin.com/in/devin-stewart-7697bb9b/" className="fa fa-linkedin"></a> 
                  |
                <a alt="github" href="https://github.com/Bigshmow/google-books" className="fa fa-github"></a>
              </h1>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
  
  export default Header;