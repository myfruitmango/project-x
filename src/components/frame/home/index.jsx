// ** React Imports
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeFrame = () => {
	// ! dependency
	const navigate = useNavigate()

	// ! hooks
	// * effect
	useEffect(() => {
		const timer = setTimeout(() => {
			const confirmed = window.confirm('Terjadi kesalahan')
			if (confirmed) {
				navigate('/error')
			}
		}, 3000)

		return () => clearTimeout(timer)
	}, [navigate])

	return (
		<div>
			<h2 className="text-gray-500">Memanggil...</h2>
			<span>Tamu Undangan</span>
		</div>
	)
}

export default HomeFrame
