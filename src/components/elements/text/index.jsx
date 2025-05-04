// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Styles Import
import './styles.css'

const TypingText = ({
	words = [],
	typingSpeed = 100,
	pauseTime = 1000,
	deletingSpeed = 50,
	onComplete = () => {},
	loop = false,
	stop = false
}) => {
	// ! hooks
	// * state
	const [wordIndex, setWordIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const [currentText, setCurrentText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)
	const [paused, setPaused] = useState(false)
	const [hasCompleted, setHasCompleted] = useState(false)

	// * effect
	useEffect(() => {
		if (words.length === 0 || stop || hasCompleted) return

		const currentWord = words[wordIndex]

		const timeout = setTimeout(
			() => {
				if (!paused) {
					if (!isDeleting) {
						const nextText = currentWord.substring(0, charIndex + 1)
						setCurrentText(nextText)
						setCharIndex((prev) => prev + 1)

						if (nextText === currentWord) {
							setPaused(true)
							setTimeout(() => {
								setIsDeleting(true)
								setPaused(false)
							}, pauseTime)
						}
					} else {
						const nextText = currentWord.substring(0, charIndex - 1)
						setCurrentText(nextText)
						setCharIndex((prev) => prev - 1)

						if (nextText === '') {
							if (wordIndex === words.length - 1) {
								setHasCompleted(true)
								onComplete()

								if (loop) {
									setWordIndex(0)
									setHasCompleted(false)
								}
								return
							}

							setIsDeleting(false)
							setWordIndex((prev) => prev + 1)
						}
					}
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		)

		return () => clearTimeout(timeout)
	}, [
		charIndex,
		isDeleting,
		wordIndex,
		words,
		typingSpeed,
		pauseTime,
		deletingSpeed,
		paused,
		hasCompleted,
		onComplete,
		loop,
		stop
	])

	return (
		<h3 className="text-white text-center">
			{currentText}
			<h2 className="blinking-cursor">|</h2>
		</h3>
	)
}

export default TypingText
