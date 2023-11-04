import React, { useEffect, useState } from 'react'
import Square from './Square'
import Piece from './Piece'
import { useDrop } from 'react-dnd'
import { handleMove } from './Game'
import { gameSubject } from './Game'
export default function BoardSquare({
  piece,
  black,
  position,
}) {
  return (
    <div className="board-square">
          <Square black={black}>
          {piece && <Piece piece={piece}></Piece>}
      </Square>
    </div>
  )
}