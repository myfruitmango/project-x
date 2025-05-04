// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

import Background from 'components/elements/background'

import Text from 'components/fragments/text'
import TeleportButton from 'components/elements/teleport-button'
import ShakeButton from 'components/elements/shake-button'
import HeartLiquidLoading from 'components/elements/loading'

const ErrorFrame = ({ onSuccess, onPlay }) => {
	const [showButton, setShowButton] = useState(false)
	const [success, setSuccess] = useState(false)
	const [showText, setShowText] = useState(false)
	const [loading, setLoading] = useState(true)
	const [complateLoad, setComplateLoad] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowText(true)
		}, 3000)

		return () => clearTimeout(timer)
	}, [])

	const words = [
		'Hi...',
		'Ya kamu',
		'Nadilla Asifa Salma',
		'Kamu sibuk ga sekarang?',
		'Aku',
		'Cuman ingin menyampaikan sesuatu',
		'Ini penting!',
		'Jadi tolong disimak ya!',
		'Okee?',
		'Jadi gini, ga enak sebenarnya aku bilang',
		'Hahaha, canda',
		'Kamu tau ga?',
		'Awal pertama kita bertemu',
		'Aku awalnya cukup guggup',
		'Hahaha',
		'Tapi kamu sungguh cantik dihari itu',
		'Setelah cukup lama',
		'Lama banget malah',
		'Aku jatuh cinta sama sesorang',
		'Ya...',
		'Itu kamu',
		'Kamu juga harus tahu',
		'Bukan tempe 😇 ',
		'Mungkin tidak ada yang sempurna didunia ini',
		'Tapi kamu istimewa bagiku',
		'dan aku mau bilang juga',
		'Ini yang trakhir janji',
		'Terima kasih ya udah sudah hadir didekat ku',
		'Menjadi tempat ternyaman',
		'Aku akan selalu usahain',
		'Apapun selagi aku mampu, buat kamu dan untuk kita',
		'Tapi maaf kalo terkadang aku...',
		'Masih gagal jadi apa yang kamu harapkan',
		'Dan izinkan aku pula',
		'Untuk menemani hari hari mu',
		'Menjadi css dalam hidupku',
		'Mau tau 1 fakta?',
		'Aku memang tidak sempurna',
		'Aku bukan superman',
		'Atau',
		'Superhero lainnya',
		'I am ultramen',
		'Intinya gini...'
	]

	const congrats = [
		'Yippieee',
		'Selamat kamu telah terpilih',
		'Menjadi pacar orang ter-tengilllll',
		'Hahaha',
		'Semoga Sukses yaaa',
		'Dan...',
		'Aku akan dekelarsikan',
		'Pada tanggal 5 Mei 2025',
		'Kamu menjadi bagian dalam hidupku'
	]

	const handleClick = () => {
		setSuccess(true)
		onSuccess?.()
	}

	const play = () => {
		setLoading(false)
		onPlay?.()
	}

	return (
		<Fragment>
			{loading ? (
				<Fragment>
					{complateLoad ? (
						<div className="h-screen w-screen grid content-center justify-items-center gap-4 bg-black">
							<span className="text-white">Memanggil...</span>
							<h2 className="text-white">Jamal</h2>
							<ShakeButton name="Kamu diundang" onClick={play} />
						</div>
					) : (
						<HeartLiquidLoading
							onComplete={() => {
								setTimeout(() => setComplateLoad(true), 3000)
							}}
						/>
					)}
				</Fragment>
			) : success ? (
				<Background>
					<div className="h-screen w-screen flex justify-center items-center">
						{showText && <Text words={congrats} loop={true} />}
					</div>
				</Background>
			) : (
				<div className="bg-black h-screen w-screen flex justify-center items-center">
					{showButton ? (
						<Fragment>
							<div className="grid content-center justify-items-center gap-4">
								<h2 className="text-white">Will you be my girlfriend?</h2>
								<ShakeButton name="Iya Mau!" onClick={handleClick} />
							</div>
							<TeleportButton />
						</Fragment>
					) : (
						<Text
							words={words}
							complate={() => {
								setTimeout(() => setShowButton(true), 3000)
							}}
						/>
					)}
				</div>
			)}
		</Fragment>
	)
}

export default ErrorFrame
