import React, { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import Frame from 'components/frame/error'
import Backsound from 'assets/backsound.mp3'
import LoveSong from 'assets/music.mp3'

const ErrorPage = () => {
	const backsoundRef = useRef(null)
	const loveSoundRef = useRef(null)

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

	const handleSuccess = () => {
		backsoundRef.current?.stop()

		loveSoundRef.current = new Howl({
			src: [LoveSong],
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
