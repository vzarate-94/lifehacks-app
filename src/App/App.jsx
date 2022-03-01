import React, { useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import Users from '../pages/Users/Users'
import * as authService from '../services/authService'

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
			<Nav user={user} handleLogout={handleLogout}/>
			<Route exact path='/'>
				<Landing user={user} />
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
