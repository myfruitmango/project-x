import styled, { keyframes } from 'styled-components'

const wave = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
`

export const Shape = styled.div`
	clip-path: path(
		'M23.6,0c-3.4,0-6.4,2.2-7.6,5.3C14.8,2.2,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
     c0,9.2,16,21.2,16,21.2s16-12,16-21.2C32,3.8,28.2,0,23.6,0z'
	);
`

export const Liquid = styled.div`
	animation: rise 3s ease forwards;
	transition: transform 0.5s ease-in-out;
`

export const Wave = styled.div`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 45%;
	animation: ${wave} 4s linear infinite;
`

export const Wave2 = styled(Wave)`
	animation-delay: -2s;
	opacity: 0.5;
`

export const ProgressText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	font-size: 1.4rem;
	color: white;
	z-index: 2;
	pointer-events: none;
`
