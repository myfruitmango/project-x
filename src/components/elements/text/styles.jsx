// ** Styled Imports
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`

export const BlinkingCursor = styled.h2`
  display: inline-block;
  width: 1ch;
  color: #ff4d6d;
  animation: ${blink} 0.7s steps(1) infinite;
`
