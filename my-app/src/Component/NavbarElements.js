import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #363636;
	display: flex;
	justify-content: space-end;
	padding: 0.2rem;
	z-index: 12;
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #4d4dff;
	}
`;

export const Bars = styled(FaBars)`
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

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-end;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
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
