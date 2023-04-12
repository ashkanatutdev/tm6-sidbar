import React from 'react';
import {
	FaChartBar, 
	FaThLarge, 
	FaShoppingCart, 
	FaCog,
	FaSignOutAlt,
	FaBars
} from 'react-icons/fa';

import {HiMenuAlt1, HiX} from 'react-icons/hi'

import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const ICON_SIZE = 20;

function Navbar({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <HiMenuAlt1 size={30} /> : <HiX size={30} />}
				</button>
				<div>
					<div className="links nav-top">
						<NavLink to="/dashboard" className="nav-link">
							<FaThLarge size={ICON_SIZE} />
							<span>Dashboard</span>
						</NavLink>
						<NavLink to="/analytics" className="nav-link">
							<FaChartBar size={ICON_SIZE} />
							<span>Analytics </span>
						</NavLink>
						<NavLink to="/orders" className="nav-link">
							<FaShoppingCart size={ICON_SIZE} />
							<span>Orders</span> 
						</NavLink>
					</div>
				</div>

				{/* <div className="links">
					<NavLink to="/settings" className="nav-link">
						<FaCog size={ICON_SIZE} />
						<span>Settings</span> 
					</NavLink>
					<NavLink to="/Sign-out" className="nav-link">
						<FaSignOutAlt size={ICON_SIZE} />
						<span>Logout</span> 
					</NavLink>
				</div> */}
			</nav>
		</>
  );
}

export default Navbar;
