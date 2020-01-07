import { useState, useEffect } from "react";
import utils from "../math-utils";

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
      return () => clearTimeout(timerId);
    }, 1000);
  });

  const setGameState = newCandidateNums => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        num => !newCandidateNums.includes(num)
      );
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9));
    }
  };

  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};

export default useGameState;
