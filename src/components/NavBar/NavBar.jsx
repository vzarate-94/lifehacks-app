import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/images/myLogoWhite.png'



const NavBar = ({ user, handleLogout }) => {
	// const [openOrClosed, setOpenOrClosed] = useState(false)



	return (
		<>
		<nav className={styles.NavBar}>
			<img src={logo} alt="" className={styles.img} />
			{user ? (
				<ul className={styles.Nav_Links}>
					<li>Welcome butthead, {user.name}</li>
					<li>
						<NavLink to='' onClick={handleLogout}>Log out</NavLink>
					</li>
					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
				</ul>
			) : (
				<ul className={styles.Nav_Links}>
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
			
		</nav>
	</>
	)
}

export default NavBar
