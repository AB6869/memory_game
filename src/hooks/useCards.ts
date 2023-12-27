import { useRef, useState } from "react";
import { CardType } from "../types/CardType";
import { shuffledCards } from "../utils/ShuffleArray";

const useCards = () => {
  const [cards, setCards] = useState<CardType[]>(shuffledCards);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false)
  const prevIndex = useRef(-1)

  const resetGame = () => {
    if(disabled) return

    setCards(shuffledCards)
    prevIndex.current = -1
    setScore(0)
    setDisabled(false)
  }

  const handleCardClick = (index: number) => {
    const currCard = cards[index];
    const prevCard = cards[prevIndex.current];

    if (currCard.state === 'matched' || disabled) return;

    updateStatus([currCard], 'flipped');

    if (!prevCard || prevIndex.current === index) {
      prevIndex.current = index;
      return;
    }

    setDisabled(true)
    setTimeout(() => {
      if (currCard.id === prevCard.id) {
        updateStatus([currCard, prevCard], 'matched');
        setScore((prevScore) => prevScore + 1);
        setDisabled(false)
      } else {
        updateStatus([currCard, prevCard], '')
        setScore((prevScore) => prevScore - 1);
        setDisabled(false)
      }
    }, 2000)

      prevIndex.current = -1;
  };

  const updateStatus = (newCards: CardType[], state: 'flipped' | 'matched' | '') =>{
      newCards.forEach((card) => (card.state = state))
      setCards([...cards])
  }

  const isGameOver = cards.every((card) => card.state === 'matched');

  return {cards, score, disabled, handleCardClick, resetGame, isGameOver}
}

export default useCards
