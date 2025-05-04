// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Styles Imports
import { ProgressText, Shape, Wave, Wave2 } from './styles'

const HeartLiquidLoading = ({ onComplete }) => {
	// ! hooks
	// * state
	const [progress, setProgress] = useState(0)

	// * effect
	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => Math.min(prev + 1, 100))
		}, 80)
		return () => clearInterval(timer)
	}, [])

	useEffect(() => {
		if (progress === 100) {
			onComplete?.()
		}
	}, [progress, onComplete])

	return (
		<div className="flex justify-center items-center h-screen">
			<Shape className="relative overflow-hidden w-52 h-48 bg-gray-200">
				<liquid
					className="absolute bottom-0 left-0 w-full h-full bg-red-400 flex items-end justify-center overflow-hidden"
					style={{
						transform: `translateY(${100 - progress}%)`
					}}>
					<Wave className="absolute w-[200%] h-[200%] bottom-0" />
					<Wave2 />
				</liquid>
				<ProgressText>{progress}%</ProgressText>
			</Shape>
		</div>
	)
}

export default HeartLiquidLoading
