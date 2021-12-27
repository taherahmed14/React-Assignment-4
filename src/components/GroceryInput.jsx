import { useState } from "react";
import "./GroceryInput.css";

export const GroceryInput = ({ getData }) => {
    const [inputVal, setInputVal] = useState("");
    const handleOnchange = (e) => {
        // console.log(e.target.value);
        setInputVal(e.target.value);
    };
    const handleOnclick = () => {
        getData(inputVal);
    };

    return(
        <div className="main">
            <input type="text" placeholder="Enter list" onChange={handleOnchange} />
            <button onClick={handleOnclick}>Add</button>
        </div> 
    );
};