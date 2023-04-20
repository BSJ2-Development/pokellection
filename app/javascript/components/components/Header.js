import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';

const Header = ({
  logged_in, 
  current_user, 
  new_user_route, 
  sign_in_route, 
  sign_out_route,
}) => {

  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/">Pokellection</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/AboutUs">About Us</NavLink>
        </NavItem>
        {logged_in &&
          <>
            <NavItem>
              <NavLink to="/">My Collection</NavLink>
            </NavItem>
            <NavItem>
              <a href={sign_out_route}>Sign Out</a>
            </NavItem>
          </>
        }
        {!logged_in &&
        <>
          <NavItem>
            <a href={sign_in_route}>Sign In</a>
          </NavItem>
          <NavItem>
            <a href={new_user_route}>Sign Up</a>
          </NavItem>
        </>
        }
      </Nav>
    </>
  )
}
export default Header;