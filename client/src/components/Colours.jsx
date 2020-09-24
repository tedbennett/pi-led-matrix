import React, { useState } from 'react';
import './Colours.css';


const Colours = ({ currentColour, setCurrentColour }) => {
    const [colours, setColours] = useState([]);

    const handleClick = (colour) => {
        if (!colours.includes(currentColour)) {
            const newColours = colours.slice(0, 3);
            newColours.unshift(currentColour);
            setColours(newColours);
        }
        setCurrentColour(colour);
    };

    return (
        <div className="flex">
            <input
                type="color"
                value={currentColour}
                onChange={(e) => handleClick(e.target.value)}
            />

            {colours.map((colour) => {
                return (<div className="colour-tile"
                    style={{ backgroundColor: colour }}
                    onClick={() => handleClick(colour)} />);
            })}
        </div>
    );
};

export default Colours;