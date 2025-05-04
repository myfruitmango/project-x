// ** React Imports
import React, { useEffect, useRef } from 'react'

// ** Style Imports
import './styles.css'

const HeartAnimation = ({ children }) => {
	// ! hooks
	// * ref
	const bgRef = useRef(null)

	// * effect
	useEffect(() => {
		const interval = setInterval(() => {
			const bgEl = bgRef.current
			if (!bgEl) return

			const r_num = Math.floor(Math.random() * 40) + 1
			const r_size = Math.floor(Math.random() * 65) + 10
			const r_left = Math.floor(Math.random() * 100) + 1
			const r_bg = Math.floor(Math.random() * 25) + 100
			const r_time = Math.floor(Math.random() * 5) + 5

			const heart1 = document.createElement('div')
			heart1.className = 'heart absolute -top-1/2'
			heart1.style.cssText = `
        width: ${r_size}px;
        height: ${r_size}px;
        left: ${r_left}%;
        background: rgba(255, ${r_bg - 25}, ${r_bg}, 1);
        animation: love ${r_time}s ease;
      `

			const heart2 = document.createElement('div')
			heart2.className = 'absolute -top-1/2 heart'
			heart2.style.cssText = `
        width: ${r_size - 10}px;
        height: ${r_size - 10}px;
        left: ${r_left + r_num}%;
        background: rgba(255, ${r_bg - 25}, ${r_bg + 25}, 1);
        animation: love ${r_time + 5}s ease;
      `

			bgEl.appendChild(heart1)
			bgEl.appendChild(heart2)

			const hearts = bgEl.querySelectorAll('.heart')
			hearts.forEach((heart) => {
				const top = parseFloat(getComputedStyle(heart).top)
				const width = parseFloat(getComputedStyle(heart).width)
				if (top <= -100 || width >= 150) {
					heart.remove()
				}
			})
		}, 500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="bg-black absolute top-0 left-0 h-full w-full overflow-hidden z-0 pointer-events-none" ref={bgRef}>
			<div className="relative z-[1] p-5 font-white">{children}</div>
		</div>
	)
}

export default HeartAnimation
