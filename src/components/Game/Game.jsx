import React from "react";
import GameItem from "../GameItem/GameItem";

function Game(props) {
  return (
    <div className="container">
      <div className="game--start">
        <h4 className="you">ВЫ</h4>
        {props.var.map((item) => {
          return (
            <GameItem
              click={() => props.show(item.id)}
              key={item.id}
              image={item.name}
              show={item.show}
            />
          );
        })}
      </div>
      <h1 className="vs">VS</h1>
      <div className="bot">
        <img
          className="random"
          src={`images/${props.image.name}.webp`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Game;
