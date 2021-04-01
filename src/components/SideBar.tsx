import React from "react"
import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler"


interface Props {
	routes:{
		component:JSX.Element,
		path:string,
		name:string,
		icon:JSX.Element
	}[],
	isLight?: boolean,
	toggleLight: ()=>void
}

function SideBar({routes,isLight,toggleLight}:Props){
	return(
		<div>
			<div style={{ width: 70 }} className="transition duration-500 hidden md:flex bg-primary h-screen  flex-col  items-center shadow-2xl  " >
				{routes.map(route=>(
					<NavLink activeClassName="text-secondary" className="transition duration-500 text-light my-4 hover:text-secondary link flex flex-col items-center" to={route.path} >{route.icon}
						<span>{route.name}</span>
					</NavLink>))}
				<ThemeToggler isLight={isLight} toggleLight={toggleLight} />
			</div>
		</div>
		)
}

export default SideBar;