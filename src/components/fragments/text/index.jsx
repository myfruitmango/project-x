// ** React Imports
import React from 'react'

// ** Frame Imports
import TypingText from 'components/elements/text'

const Text = ({ complate, words, loop }) => {
	const res = () => {
		if (complate) {
			complate(true)
		}
	}
	return <TypingText words={words} typingSpeed={150} pauseTime={350} deletingSpeed={80} onComplete={res} loop={loop} />
}

export default Text
