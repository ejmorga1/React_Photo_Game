import React from "react";
import "./Game.css";

const Game = props => (
    <div className="card">
        <div className="img-container">
            <span onClick={() => props.photoClicked(props.id)}>
                <img alt={props.name} src={props.image} />
            </span>
        </div>
    </div>
);

export default Game;
