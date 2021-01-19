import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar-cus my-2" light>
      
        <NavbarToggler onClick={toggleNavbar}  />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
         
            <NavItem>
              <NavLink className="nav-link-cus" href="./."><i className="fa 	fa fa-home mx-3"></i>ورود/عضویت</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/profile"><i className="	fa fa-sitemap mx-3"></i>دسته بندی ها</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/groups"><i className="			fas fa-sign-language mx-3"></i>همکاری با ما</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/groups"><i className="		fas fa-universal-access mx-3"></i>پشتیبانی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-cus" href="/groups"><i className="		fa fa-bullhorn mx-3"></i>ثبت شکایت</NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
        <NavbarBrand href="/" className=" title">آدرس شما</NavbarBrand>
        
      </Navbar>
    </div>
  );
}

export default Example;
  