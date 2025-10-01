import Board from "./Board";
import Instructions from "./Instructions";

function HexGuessr(){
    return (
        <div>
            <header>
            <Instructions />
            <h1>HexGuess</h1>
            </header>
            <Board />
        </div>
    );
}

export default HexGuessr;