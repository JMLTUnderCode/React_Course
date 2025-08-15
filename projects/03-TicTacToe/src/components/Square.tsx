import React from "react"

type SquareProps = {
  children?: React.ReactNode
  isSelected?: boolean
  updateBoard?: (index: number) => void
  index?: number
}

export const Square: React.FC<SquareProps> = ({
  children = null,
  isSelected = false,
  updateBoard = () => {},
  index = 0
}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => { updateBoard(index) }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}