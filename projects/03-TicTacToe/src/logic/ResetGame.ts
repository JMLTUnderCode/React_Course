import type { Dispatch, SetStateAction } from 'react'
import { TURNS } from '../constants'
import { removeFromLocalStorage } from '../logic/Storage'

export function resetGame(
  setBoard: Dispatch<SetStateAction<(string | null)[]>>,
  setWinner: Dispatch<SetStateAction<string | null>>,
  setTurn: Dispatch<SetStateAction<string>>
) {
  setBoard(Array(9).fill(null))
  setWinner(null)
  setTurn(TURNS.X)
  removeFromLocalStorage('board')
  removeFromLocalStorage('turn')
}
