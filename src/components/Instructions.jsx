import React, { useState } from "react";

function Instructions() {

    const [show, setShow] = useState(false);
    return (<div> <button className="instructions" onClick={() => setShow(true)}>?</button>
        {show && (<div className="overlay" onClick={() => setShow(false)}>
        <div className="content" onClick={e => e.stopPropagation()}>
            <h2>Let's Play HexGuess!</h2>
            <p> A color will appear on the right side. In the input field, guess its
                hexadecimal color code (like <code>#fa3dc9</code>). Click the 'Guess' button
                to see your accuracy </p>
            <ul>
                <li>The correct hexcode will appear above the color.</li>
                <li>Your accuracy can be seen above your guessed color.</li>
                <li>Your overall accuracy is shown at the bottom.</li>
            </ul>
            <button className="close" onClick={() => setShow(false)}>Close</button>
        </div>
        </div>)}
    </div>);
}

export default Instructions;