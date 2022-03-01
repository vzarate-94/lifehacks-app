import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className='navbar'>
			<div>
			{user ? (
				<ul>
					<li>Welcome, {user.name}</li>
					<li>
						<NavLink to='' onClick={handleLogout}>Log out</NavLink>
					</li>
					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<NavLink to="/login">Log In</NavLink>
					</li>
					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
				</ul>
			)}
			</div>
		</nav>
	)
}

export default NavBar
