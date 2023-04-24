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
      <div className="header-container">      
        <Nav>
          <NavItem className="nav_bar_item">
            <NavLink className="nav_links" to="/">Pokellection</NavLink>
          </NavItem>
          <NavItem className="nav_bar_item">
            <NavLink className="nav_links" to="/">Home</NavLink>
          </NavItem>
          <NavItem className="nav_bar_item">
            <NavLink  className="nav_links" to="/AboutUs">About Us</NavLink>
          </NavItem>
          {logged_in &&
            <>
              <NavItem className="nav_bar_item">
                <NavLink className="nav_links" to="/mycollection">My Collection</NavLink>
              </NavItem>
              <NavItem className="nav_bar_item">
                <a href={sign_out_route}>Sign Out</a>
              </NavItem>
            </>
          }
          {!logged_in &&
          <>
            <NavItem className="nav_bar_item">
              <a className="nav_links" href={sign_in_route}>Sign In</a>
            </NavItem>
            <NavItem className="nav_bar_item">
              <a className="nav_links" href={new_user_route}>Sign Up</a>
            </NavItem>
          </>
          }
        </Nav>
      </div>
    </>
  )
}
export default Header;