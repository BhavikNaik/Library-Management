import React, { useContext, useEffect, useState } from "react";
import { Nav, NavLink, NavMenu,NavBtnLink, NavBtn,UserData,NavLink1 } from "./NavbarElements";
import jwt from 'jsonwebtoken';
import Context from "../store/Context";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
	const {state,dispatch} = useContext(Context)
	
	const navigate = useNavigate();
	const [admin, setAdmin] = useState(false)
	const [username,setUser] = useState('')
	
	// console.log(username);
	// console.log(state.name);
	useEffect(()=>{
		const token = localStorage.getItem('token')
		
		if(token){
			
			const userdata = jwt.decode(token)
			if(!userdata){
				localStorage.removeItem('token')
				navigate('/login')
			}
			else{
				setUser(userdata.user.name)
				const fname = userdata.user.name.split(' ')[0]
				dispatch({type:'UPDATE_NAME',payload:fname})
				if(userdata.user.admin==true){
					setAdmin(true)
				}
				console.log(userdata.user.admin);
			}
			
		}
	},[localStorage.getItem('token')])

	

	function logOut(){
		localStorage.clear()
		navigate('/login')
		window.location.reload()
	}
	

return (
	
	<>
	{state.name &&
	<Nav>
		<NavMenu>
			<NavLink1 className="logo" to="/" ><img src="./images/logo.png" width="100px" height="80px"/></NavLink1>
			<NavLink to="/Books" >Books</NavLink>
			
			{admin?<>
				<NavLink to="/Profile" >Issues</NavLink>
				<NavLink to="/Addbook" >Add</NavLink>
			</>:
			<>
			</>}
			<NavLink to="/History" >History</NavLink>
			
		</NavMenu>
		<NavBtn>
			{state.name?
					<>
					<NavLink to="/UserDetails" >{state.name}</NavLink>
					<button
					className="foote"
					onClick={logOut}>
						Log Out
					</button>
					</>
				:
					<>
				
					</> 
			}
        </NavBtn>
	</Nav>
}
	</>
);
};

export default Navbar;
