import React from "react";
import { Nav, NavLink, NavMenu,NavBtnLink, NavBtn } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<NavLink className={"logo"} to="/" activeStyle>Bookie</NavLink>
			<NavLink to="/Books" activeStyle>Books</NavLink>
			<NavLink to="/UserDetails" activeStyle>User Details</NavLink>
			<NavLink to="/Profile" activeStyle>Profile</NavLink>
			<NavLink to="/Addbook" activeStyle>Add Book</NavLink>
			<NavLink to="/History" activeStyle>History</NavLink>
			<NavLink to="/History" activeStyle>History</NavLink>
		</NavMenu>
		<NavBtn>
          <NavBtnLink to='/Login'activeStyle>Login</NavBtnLink>
		  <NavBtnLink to='/Register' activeStyle>Register</NavBtnLink>
        </NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
