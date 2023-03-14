import { Card } from "./card.model"

export interface Cards {
  toDoCards: Card[] 
  doingCards: Card[]
  doneCards: Card[] 
}