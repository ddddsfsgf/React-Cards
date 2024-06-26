import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./CardTable.css";

// Renders cards lists for cards and pokemon
function CardTable() {
    return (
        <div className="CardTable">
            <header>
            <h1 className="CardTable-heading">Check Out My Cards!</h1>
            </header>
            <main>
                <PlayingCardList />
                <PokeDex />
            </main>
        </div>
    )
}

export default CardTable;