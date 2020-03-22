import React from 'react'
import logo from '../../assets/logo.png'
import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
        <div className='icons'></div>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/containers/App/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a><br />
				<small>
					<a
						className='App-link'
						href='https://parceljs.org'
						target='_blank'
						rel='noopener noreferrer'
					> 
						Parcel
					</a>
				</small>
			</header>
		</div>
	)
}

export default App
