function GColor({guess}) {
    const valid = /^([0-9a-f]{6})$/i.test(guess);

    return (<div className="gcolor" style={{backgroundColor: valid ? `#${guess}` : "transparent"}}>
    </div>);
}

export default GColor;