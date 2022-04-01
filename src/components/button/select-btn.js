import React from "react";
import "./button.css";
import { useState } from 'react';

function SButton({statusSelect, removeFromList, addToList, id}) {

    const [isSelected, setSelected] = useState(statusSelect);

    const showMessage = () => {
        setSelected(!isSelected);
        console.log(!isSelected);
        if (isSelected) {
            removeFromList(id);
        } else {
            addToList(id);
        }
    }

    return (
        <>
          <button className="btn-select" onClick={showMessage}>{!isSelected ? "Select" : "Deselect"}</button>
        </>
    )
}

export default SButton;
