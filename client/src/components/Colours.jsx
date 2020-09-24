import React, { useState } from 'react';
import './Colours.css';


const Colours = () => {
    const [colours, setColours] = useState([]);
    const [currentColour, setCurrentColour] = useState('#ffffff');

    const handleClick = (colour) => {
        const newColours = colours.slice(0, 3);
        console.log(colours, newColours);
        newColours.unshift(currentColour);
        console.log(colours, newColours);
        setCurrentColour(colour);
        setColours(newColours);
    };

    return (
        <div className="flex">
            <input
                type="color"
                onChange={(e) => handleClick(e.target.value)} />

            {colours.map((colour) => {
                return (<div className="colour-tile"
                    style={{ backgroundColor: colour }} />);
            })}
        </div>
    );
};

export default Colours;