import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar-primery my-2" light>
        <NavbarToggler onClick={toggleNavbar}  />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link-cus" href="./."><i className="fa 	fa fa-home mx-3"></i>خانه</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/profile"><i className="fa fa-user-circle mx-3"></i>پروفایل</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/groups"><i className="	fas fa-comments mx-3"></i>گروه ها</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand href="/" className="mx-auto">ویرایش پروفایل</NavbarBrand>
        <button type="button" className="btn">
  
                  <i className="fa fa-arrow-left"></i>
        </button>
      </Navbar>
    </div>
  );
}

export default Example;
  