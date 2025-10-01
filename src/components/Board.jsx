import React, {useState, useEffect} from "react";
import Acc from "./Acc";
import Color from "./Color";
import GColor from "./GColor";
import Type from "./Type";
import OK from "./OK";
import Average from "./Average";
import Actual from "./Actual";

function generateHex() {
    return Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toLowerCase();
}

function Board() {
    const [color, setColor] = useState("");
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");
    const [avg, setAvg] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [act, setAct] = useState("");

    useEffect(() => {
        startGame();
        setResult("");
    }, []);

    const startGame = () => {
        const newColor = generateHex();
        setColor(newColor);
        setResult("");
        setGuess("");
        setAct("");
    };

    const checkGuess = () => {
        const clean = guess.replace("#",'').trim().toLowerCase();

        console.log(`Target: ${color}, Guess: ${clean}`);
        const red = parseInt(color.substring(0,2), 16);
        const green = parseInt(color.substring(2,4), 16);
        const blue = parseInt(color.substring(4,6), 16);

        let guessRed = parseInt(clean.substring(0,2), 16);
        let guessGreen = parseInt(clean.substring(2,4), 16);
        let guessBlue = parseInt(clean.substring(4,6), 16);

        guessRed = 100 * Math.abs(guessRed - red)/255;
        guessGreen = 100 * Math.abs(guessGreen - green)/255;
        guessBlue = 100 * Math.abs(guessBlue - blue)/255;

        let acc = (100-((guessRed+guessGreen+guessBlue)/3));

        setResult(acc.toFixed(3) + "%");
        setAct(color);

        setAvg((prev => prev + acc));
        setRounds(prev => prev + 1);

        setTimeout(startGame, 3000);
    }

    let average = "0";
    if (rounds !== 0) {
        average = (avg/rounds).toFixed(1);
    }

    return (
        <div className="board">
            <Acc result={result}/>
            <Color color={color}/>
            <GColor guess={guess}/>
            <Type guess={guess} setGuess={setGuess}/>
            <OK checkGuess={checkGuess}/>
            <Average result={average + "%"}/>
            <Actual result={act}/>
        </div>);
}

export default Board;
