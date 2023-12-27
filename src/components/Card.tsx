import React from 'react'
import draftit from '../assets/images/draftit.png'
import { CardType } from '../types/CardType'
import styled from 'styled-components'

interface Props {
  card: CardType
  index: number
  onClick: (id: number) => void
}

const Card: React.FC<Props> = ({ card, index, onClick}) => {

  return(
    <CardContainer state={card.state} onClick={() => onClick(index)}>
      {card.state === "flipped" && (
        <FrontCard color={card.color}></FrontCard>
      )}
      <BackCard state={card.state}>
        <img src={draftit} alt='draftit img' />
      </BackCard>
    </CardContainer>
  )
}

const CardContainer = styled.div<{state: "" | "flipped" | "matched"}>`
  display: flex;
  height: 175px;
  width: 125px;
  position: relative;
  border-radius: 6px;
  background-color: ${(p) => p.state === "matched" ? '#969696' : ''}
`
const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.2s;
`
const BackCard = styled(CardStyle)<{state: "" | "flipped" | "matched"}>`
  background-color: #f5f5dc;
  transform: ${(p) => (p.state === "matched" || p.state === "flipped") ? 'rotateY(180deg)' : 'rotateY(0)'};
`

const FrontCard = styled(CardStyle)<{color: string}>`
  background: ${(p => p.color)};
`

export default Card
