import React from "react"

interface SquareProps {
  children?: React.ReactNode
  isSelected?: boolean
  updateBoard?: (index: number) => void
  index?: number
}

export const Square: React.FC<SquareProps> = ({
  children = null,
  isSelected = false,
  updateBoard,
  index = 0
}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => { 
    if (updateBoard) {
      updateBoard(index)
    }
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
      className={className}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
    >
      {children}
    </div>
  )
}