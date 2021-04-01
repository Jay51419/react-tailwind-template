import React from "react"
import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler"
interface Props  {
	isLight?: boolean,
	toggleLight: ()=>void
}
function NavBar({ isLight, toggleLight }: Props) {
	return (
		<div style={{ height: 70 }} className="block md:hidden bg-primary fixed top-0 z-10 w-full flex justify-between	 items-center px-4  transition duration-500" >
			<NavLink to="/" className="text-secondary font-bold text-lg" >Team Alfa</NavLink>
			<ThemeToggler isLight={isLight} toggleLight={toggleLight} />
		</div>
	)
}

export default NavBar;
