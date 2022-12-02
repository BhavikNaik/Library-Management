import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
// #E5E5E5
// #224957;
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);	
export const Nav = styled.nav `
    background: #E5E5E5;
	display: flex;
	justify-content: space-end;
	padding: 0.2rem;
	z-index: 12;
	font-size: 35px;
	
	
`;

//border-bottom: 2px solid #20DF7F;

export const NavLink = styled(Link)
`
	color: black;
	text-transform:capitalize;
	font-family: 'Trebuchet MS', sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0px 5px;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	height: 58px;
	cursor: pointer;
	box-sizing: border-box;
	transition: transform .2s;
	&.active {
		color: #181c66;
		font-weight:bold;
		
	}
	&:hover{
		color:#181c66;
		font-weight:bold;
		transform: scale(1.1);
	}
`;
export const NavLink1 = styled(Link)
`
	color: #E5E5E5;
	font-family: 'Trebuchet MS', sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	cursor: pointer;
	box-sizing: border-box;
	transition: transform .2s;
	&.active {
		color: #20DF7F;
		
		
	}
	&:hover{
		color:#20DF7F;
		transform: scale(1.2);
		
	}
`;

export const Bars = styled(FaBars)
`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const UserData = styled.div `
	color: #E5E5E5;
	font-family: 'Trebuchet MS', sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&:hover {
		color: #20DF7F
	},
	
`;

export const NavMenu = styled.div `
display: flex;
align-items: center;
justify-content: space-end;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
  border-radius: 4px;
  font-size: 18px;
  background: #808080;
  color: white;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;