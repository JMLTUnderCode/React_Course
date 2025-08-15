import React from "react";
import { TURNS } from "../constants";
import { Square } from "./Square";

type TurnProps = {
  turn: string;
}

export const Turn: React.FC<TurnProps> = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};
