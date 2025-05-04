// ** React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// ** App Imports
import App from './App'

// ** Styles Imports
import './index.css'

// ** Others Imports
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router>
		<App />
	</Router>
)

reportWebVitals()
