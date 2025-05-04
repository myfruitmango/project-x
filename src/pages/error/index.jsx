// ** React Imports
import React, { useEffect, useRef } from 'react'

// ** Howler Imports
import { Howl } from 'howler'

// ** Frame Imports
import Frame from 'components/frame/error'

// ** Assets Imports
import Backsound from 'assets/backsound.mp3'
import music from 'assets/music.mp3'

const ErrorPage = () => {
	// ! hooks
	// * ref
	const backsoundRef = useRef(null)
	const loveSoundRef = useRef(null)

	// * hooks
	useEffect(() => {
		backsoundRef.current = new Howl({
			src: [Backsound],
			loop: true,
			volume: 0.5
		})

		return () => {
			backsoundRef.current?.unload()
			loveSoundRef.current?.unload()
		}
	}, [])

	// ! handle
	const handleSuccess = () => {
		backsoundRef.current?.stop()

		loveSoundRef.current = new Howl({
			src: [music],
			loop: true,
			volume: 0.5
		})

		loveSoundRef.current.play()
	}

	const handlePlay = () => {
		backsoundRef.current?.play()
	}

	return <Frame onSuccess={handleSuccess} onPlay={handlePlay} />
}

export default ErrorPage
