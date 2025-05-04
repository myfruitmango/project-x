import React, { useEffect, useState } from 'react'

const HeartLiquidLoading = ({ onComplete }) => {
	const [progress, setProgress] = useState(0)

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
		<div className="heart-liquid-wrapper">
			<div className="heart-shape">
				<div
					className="liquid"
					style={{
						transform: `translateY(${100 - progress}%)`
					}}>
					<div className="wave" />
					<div className="wave wave2" />
				</div>
				<div className="progress-text">{progress}%</div>
			</div>
		</div>
	)
}

export default HeartLiquidLoading
