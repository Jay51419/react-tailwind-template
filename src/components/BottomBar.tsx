import React from "react"
import { NavLink } from "react-router-dom";



interface Props {
	routes: {
		component: JSX.Element,
		path: string,
		name: string,
		icon: JSX.Element
	}[],
	isLight?: boolean,
	toggleLight: () => void
}

function BottomBar({ routes, isLight, toggleLight }: Props) {
	return (
		<div>
			<div style={{ height: 70 }} className="flex md:hidden fixed bottom-0 bg-primary w-full justify-evenly items-center shadow-2xl transition duration-500 " >
				{routes.map(route => (
					<NavLink activeClassName="text-secondary" className="transition duration-500 text-light my-4 hover:text-secondary link flex flex-col items-center" to={route.path} >{route.icon}
						<span>{route.name}</span>
					</NavLink>))}
			</div>
		</div>
	)
}

export default BottomBar;