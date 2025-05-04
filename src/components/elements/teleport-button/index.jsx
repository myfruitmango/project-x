// ** React Imports
import React, { useState } from 'react'

const TeleportButton = () => {
	// ! hooks
	// * state
	const [position, setPosition] = useState({ Bottom: '0%', Right: '0%' })

	// ! others
	const moveButton = () => {
		const randomBottom = Math.floor(Math.random() * 80) + '%'
		const randomRight = Math.floor(Math.random() * 80) + '%'
		setPosition({ Bottom: randomBottom, Right: randomRight })
	}

	return (
		<button
			onClick={moveButton}
			className="absolute transition-all duration-300 px-5 py-2 bg-red-400 text-white"
			style={{ bottom: position.Bottom, right: position.Right }}>
			<p>Gamau 😜</p>
		</button>
	)
}

export default TeleportButton
