// ** React Imports
import React from 'react'

// ** Frame Imports
import TypingText from 'components/elements/text'

const Text = ({ complate, words, loop }) => {
	// ! others
	const res = () => {
		if (complate) {
			complate(true)
		}
	}
	return <TypingText words={words} typingSpeed={150} pauseTime={350} deletingSpeed={50} onComplete={res} loop={loop} />
}

export default Text
