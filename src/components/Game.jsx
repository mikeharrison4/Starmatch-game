import React from "react";
import "../App.css";
import StarGenerator from "./StarGenerator";
import PlayNumber from "./PlayNumber";
import PlayAgain from "./PlayAgain";
import utils from "../math-utils";
import useGameState from "./GameState";

function Game(props) {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const isCandidateWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used" || gameStatus !== "active") return;
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter(c => c !== number);

    setGameState(newCandidateNums);
  };

  const setNumberStatus = number => {
    if (!availableNums.includes(number)) return "used";
    if (candidateNums.includes(number)) {
      return isCandidateWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== "active" ? (
              <PlayAgain onReset={props.startNewGame} gameStatus={gameStatus} />
            ) : (
              <StarGenerator stars={stars} utils={utils} />
            )}
          </div>
          <div className="right">
            {utils.range(1, 9).map(number => (
              <PlayNumber
                key={number}
                number={number}
                numberStatus={setNumberStatus(number)}
                onClick={onNumberClick}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    </div>
  );
}

export default Game;
