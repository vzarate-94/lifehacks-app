

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App/App.js'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route>
        <App />
      </Route>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)

