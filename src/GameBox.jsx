import React from "react";
import Box from "./Box";
import { useState } from "react";

export default function gameBox() {


    const [currUser, setCurrUser] = useState("X");

    const [boxes, setBoxes] = useState([
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null },
    ]);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]


    const checkWinner = (boxes) => {
        let winner = null;

        winningCombinations.forEach((combination) => {
                const user = boxes[combination[0]].value;
                if(user !== null && user === boxes[combination[1]].value && user === boxes[combination[2]].value) {
                    winner = user
                }
                else if(isDraw()){
                    winner = "draw"
                }
            }
        )

        if(winner==="draw"){
            alert("It's a draw")
            window.location.reload()
        }

        if(winner!==null && winner!=="draw"){
            alert("User - " + winner + " won")
            window.location.reload()
        }
    }

    const isDraw = () => {
        let isDraw = true;
        boxes.forEach((box) => {
            if(box.value === null) {
                isDraw = false;
            }
        }
        )
        return isDraw;
    }
    return (
        <div className="gameBox">
            {boxes.map(({ id, value }) => (
                <Box
                    key={id}
                    id={id}
                    firstValue={value}
                    currUser={currUser}
                    setCurrUser={setCurrUser}
                    boxes={boxes}
                    setBoxes={setBoxes}
                    checkWinner={checkWinner}
                />
            ))}
        </div>
    );
}
