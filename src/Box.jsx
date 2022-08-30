import { React, useState } from "react";

export default function Box({
    id,
    firstValue,
    currUser,
    setCurrUser,
    setBoxes,
    boxes,
    checkWinner
}) {
    const onClick = () => {
        if (value == null) {
            setValue(currUser);
            setCurrUser(currUser === "X" ? "O" : "X");
            
            const newBox = boxes.find((box) => box.id === id);
            const index = boxes.indexOf(newBox);
            
            boxes[index].value = currUser;
            setBoxes(boxes);
        }
        checkWinner(boxes)
    };
    const [value, setValue] = useState(firstValue);

    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    );
}
