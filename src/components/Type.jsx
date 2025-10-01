import React, { useState } from "react";

function Type({guess, setGuess}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        let val = e.target.value.toLowerCase();
        if (val.startsWith("#")) {
            val = val.slice(1);
        }
        setGuess(val);
    }
    return (<div className={`type ${isFocused ? "focused" : ""}`}>
    <input type="text" style={{backgroundColor: 'transparent', border: 0, outline:'none',
    fontSize: 34, width: 200, fontWeight: "bold", color: 'white'}} value={guess}
    onChange={handleChange}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    placeholder="#" maxLength={6} />
    </div>);
    
}

export default Type;