import React from "react";
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom"
import brand_icon from "../../../assets/images/brand_icon.png"

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
          <img className="pokeball-navbar-left" src={brand_icon} alt='pokeball-image'/>
            <NavItem>
              <NavLink className="header-buttons" to="/">Home</NavLink>
            </NavItem>         
            <NavItem>
              <NavLink  className="header-buttons" to="/AboutUs">About Us</NavLink>
            </NavItem>         
            <NavItem>
              <NavLink  className="header-buttons" to="/pokemonindex">Pokellection</NavLink>
            </NavItem>
          {logged_in &&
            <>             
                <NavItem>
                  <NavLink className="header-buttons" to="/mycollection">My Collection</NavLink>
                </NavItem>  
              
                <NavItem>
                  <a className="header-buttons" href={sign_out_route}>Sign Out</a>
                </NavItem> 
            </>
          }
          {!logged_in &&
          <>           
              <NavItem>
                <a className="header-buttons" href={sign_in_route}>Sign In</a>
              </NavItem>           
              <NavItem>
                <a className="header-buttons" href={new_user_route}>Sign Up</a>
              </NavItem>
          </>
          }
          <img className="pokeball-navbar-right" src={brand_icon} alt='pokeball-image'/>
        </Nav>
      </div>
    </>
  )
}
export default Header;