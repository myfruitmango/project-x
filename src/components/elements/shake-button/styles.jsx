// ** Styled Imports
import styled, { keyframes } from 'styled-components'

const wiggle = keyframes`
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`

export const Button = styled.button`
	animation: ${wiggle} 2s linear infinite;
	background: #fffff0;
	border: none;
	padding: 0.75rem 1.5rem;
	cursor: pointer;
	border-radius: 0.5rem;
`
