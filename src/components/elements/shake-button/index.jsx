// ** React Imports
import React from 'react'

// ** Style Imports
import './styles.css'

const ShakeButton = ({ name, onClick }) => {
	return (
		<button onClick={onClick} className="shake-button cursor-pointer py-3 px-5 border-t-4 border-t-red-400">
			<p className="text-black">{name}</p>
		</button>
	)
}

export default ShakeButton
