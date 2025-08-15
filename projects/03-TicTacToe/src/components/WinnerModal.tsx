import React from "react"
import { Square } from "./Square"

type WinnerModalProps = {
	winner?: string | null
	resetGame?: () => void
}

export const WinnerModal: React.FC<WinnerModalProps> = ({
  winner,
  resetGame
}) => {
  if (winner === null) return null

  const winnerText = winner !== 'draw' && winner ? `Winner: ${winner}` : "It's a draw!"
	return (
		<section className="winner">
			<div className="message">
			  <h2>{winnerText}</h2>
			  <header className="win">
				{winner && winner !== 'draw' && <Square>{winner}</Square>}
			  </header>
			  <footer>
				<button onClick={resetGame}>Play Again</button>
			  </footer>
			</div>
	  </section>
	)
}