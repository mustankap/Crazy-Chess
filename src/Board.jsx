import React from 'react'
import BoardSquare from './BoardSquare'

const Board = ({ board, position }) => {

    function getXYPosition(i) {
    const x = position === 'w' ? i % 8 : Math.abs((i % 8) - 7)
    const y =
      position === 'w'
        ? Math.abs(Math.floor(i / 8) - 7)
        : Math.floor(i / 8)
    return { x, y }
  }

  function isBlack(i) {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
  }

  return (
    <div className='board'>
    {board.flat().map((piece, i) => (
        <div key={i} className='square'>
            <BoardSquare piece={piece} black={isBlack(i)} />
        </div>
        ))}
    </div>
  )
}

export default Board