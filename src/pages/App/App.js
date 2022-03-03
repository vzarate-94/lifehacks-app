/** @jsxRuntime classic */

import React, { useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Signup from '../Signup/Signup.jsx'
import Login from '../Login/Login.jsx'
import Landing from '../Landing/Landing.jsx'
import Users from '../Users/Users.jsx'
import * as authService from '../../services/authService.js'
import Counter from '../../components/Counter/Counter.jsx'

const App = () => {
	const history = useHistory()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		history.push('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout}/>
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/counter'>
				<Counter />
			</Route>
			<Route exact path='/signup'>
				{user ? 
					<Redirect to='/' /> : 
					<Signup handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/login'>
				{user ? 
					<Redirect to='/' /> : 
					<Login handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/users'>
				{user ? <Users /> : <Redirect to='/login' />}
			</Route>
		</>
	)
}

export default App