// ** React Imports
import React from 'react'

// ** Style Imports
import { Button } from './styles'

const ShakeButton = ({ name, onClick }) => {
	return (
		<Button onClick={onClick} className="shake-button cursor-pointer py-3 px-5 border-t-4 border-t-red-400">
			<p className="text-black">{name}</p>
		</Button>
	)
}

export default ShakeButton
