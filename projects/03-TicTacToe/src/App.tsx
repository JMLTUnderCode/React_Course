import React from 'react'
import { useState } from 'react'
import { Game } from './components/Game'
import { Turn } from './components/Turn'
import { TURNS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { getFromLocalStorage } from './logic/Storage'
import { resetGame } from './logic/ResetGame'

import './App.css'

export function App() {
  const [board, setBoard] = useState<(string | null)[]>(() => {
    const boardFromStorage = getFromLocalStorage('board')
    return boardFromStorage ? boardFromStorage : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getFromLocalStorage('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [winner, setWinner] = useState<string | null>(null)

  const handleResetGame = () => {
    resetGame(setBoard, setWinner, setTurn)
  }

  return (
    <div className="project-tic-tac-toe">
      <div className="project-tic-tac-toe-info">
        <h1>Tic Tac Toe</h1>
        <p>Welcome to the Tic Tac Toe game!</p>
        <span>Player 1 ({TURNS.X}) vs Player 2 ({TURNS.O})</span>
      </div>

      <div className="board">
        <button onClick={handleResetGame}>Restart</button>
        <Game board={board} winner={winner} turn={turn} setBoard={setBoard} setWinner={setWinner} setTurn={setTurn} />
        <Turn turn={turn} />
        <WinnerModal winner={winner} resetGame={handleResetGame} />
      </div>

    </div>
  )
}