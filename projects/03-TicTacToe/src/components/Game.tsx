import React from "react"
import { Square } from "./Square"
import { TURNS } from '../constants'
import { CheckWinner } from '../logic/CheckWinner'
import { CheckDraw } from '../logic/CheckDraw'
import { saveToLocalStorage } from "../logic/Storage"
import confetti from 'canvas-confetti'

interface GameProps {
  board: (string | null)[]
  winner: string | null
  turn: string
  setBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>
  setWinner: React.Dispatch<React.SetStateAction<string | null>>
  setTurn: React.Dispatch<React.SetStateAction<string>>
}

export const Game: React.FC<GameProps> = ({ board, winner, turn, setBoard, setWinner, setTurn }) => {
  const UpdateBoard = (index: number) => {
    if (board[index] || winner) return // Ignore if the square is already filled
    const newBoard = [...board] // Copy the board
    newBoard[index] = turn // Fill the square with the current player's turn
    setBoard(newBoard) // Update the board state
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // Update the turn

    // Save localstorage
    saveToLocalStorage('board', newBoard)
    saveToLocalStorage('turn', newTurn)

    // Check for a winner
    const findWinner = CheckWinner(newBoard)
    if (findWinner) {
      confetti() // Trigger confetti animation
      setWinner(findWinner)
      return
    }

    // Check for a draw
    const findDraw = CheckDraw(newBoard)
    if (findDraw) {
      setWinner('draw')
      return
    }
  }

	return (
		<section className="game">
		  {board.map((square, index) => (
  			<Square
  			  key={index}
  			  index={index}
  			  updateBoard={UpdateBoard}
  			>
  			  {square}
  			</Square>
		  ))}
		</section>
	)
}