import styled from 'styled-components'
import { Button } from '../styles/globalStyles'

interface Props {
  onClick: () => void
  score: number
}

const Overlay: React.FC<Props> = ({onClick, score}) => {
  const won = score >= 0

  return (
    <OverlayWrapper>
      <ContentWrapper won={won}>
        <Text won={won}>{won ? (
            `Good job! you WON! \nYour score is ${score}.`
          ):(
            `Game over! You LOST! Your score is ${score}. \nTry to make it positive next time`
          )}
        </Text>
        <Button onClick={onClick}>Play Again</Button>
      </ContentWrapper>
  </OverlayWrapper>
  )
}

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0808087d;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentWrapper = styled.div<{won: boolean}>`
  background: ${(p) => p.won ? '#ffffff' : '#ffe8e7'};
  padding: 50px;
  border-radius: 5px;
  text-align: center;
`
const Text = styled.div<{won: boolean}>`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(p) => p.won ? '#282c34' : '#f1807e'};
  white-space: pre-wrap;
`
export default Overlay
