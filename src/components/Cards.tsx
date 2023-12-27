import React, {  } from 'react'
import Card from './Card'
import Overlay from './Overlay';
import styled from 'styled-components'
import { Button, Text } from '../styles/globalStyles';
import useCards from '../hooks/useCards';

const Cards = () => {
  const { cards, score, disabled, handleCardClick, resetGame, isGameOver } = useCards()

  return(
    <GameWrapper>
      <RightSideWrapper>
        <Button disabled={disabled} onClick={resetGame}>New Game</Button>
        <Text>{`Score: ${score}`}</Text>
      </RightSideWrapper>

      <CardsContainer>
        {cards.map((card, index) =>
          <Card key={index} index={index} card={card} onClick={handleCardClick} />
        )}
      </CardsContainer>
      {isGameOver && (
        <Overlay onClick={resetGame} score={score} />
      )}
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  display: flex;

  @media (max-width: 400px) {
    display: block;
  }
`
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  gap: 20px;
`
const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 150px;
  @media (max-width: 400px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
  }
`
export default Cards
