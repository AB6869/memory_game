import { colors } from "../data/CardData"
import { CardType } from "../types/CardType"

export const shuffledCards = (): CardType[] => {
  return JSON.parse(JSON.stringify(colors)).sort(() => Math.random() - 0.5)
}
