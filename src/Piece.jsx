import React from "react";
import { useDrag } from "react-dnd";

const Piece = ({ piece: { type, color }, position }) => {
  const pieceImg = require(`./assets/${type}_${color}.png`);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'piece',
      id: `${position}_${type}_${color}`,
    },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() }
    },
  })
  return (
    <div className="piece-container">
      <img src={pieceImg} alt="" className="piece" />
    </div>
  );
};

export default Piece;
