
import React from "react";
import { useEffect, useState } from 'react';
import './App.css';
import { GameField } from "./GameField";
import { DirectionPointer } from "./DirectionPointer";
import { getStartCoordinates } from "./utils/getStartCoordinates";
import { getIndexFromCoordinate } from "./utils/getIndexFromCordinate";
import { calculateMoves } from "./utils/calculateMoves";

const App = () => {

  const sizeOfBoard = 3;
  const maxMoves = 10;
  const gameBoard = Array(sizeOfBoard).fill(0).map(() => Array(sizeOfBoard).fill("0"));

  const [startCord, setStartCord] = useState({});
  const [finishIndex, setFinishIndex] = useState();
  const [arrMoves, setArrMoves] = useState([]);
  const [arrMovesForDisplay, setArrMovesForDisplay] = useState([]);
  const [arrowCounter, setArrowCounter] = useState(0);
  const [userChooseIndex, setUserChooseIndex] = useState();
  const [userWrongChoose, setUserWrongChoose] = useState(false);
  const [isNewGame, setІsNewGame] = useState(true);

  useEffect(() => {
    if (isNewGame) {
      setFinishIndex();

      const line = getStartCoordinates(sizeOfBoard);
      const column = getStartCoordinates(sizeOfBoard);
      const index = getIndexFromCoordinate(sizeOfBoard, line, column);
      const arrMov = calculateMoves(sizeOfBoard, line, column, maxMoves, finishIndex, setFinishIndex);

      setUserChooseIndex();
      setArrowCounter(0);
      setUserWrongChoose(false);
      setStartCord({ startLine: line, startColumn: column, startIndex: index })
      setArrMoves(arrMov);
      setІsNewGame(false);
    }
  }, [isNewGame, finishIndex]);

  useEffect(() => {
    if (arrMoves.length !== 0 && arrowCounter <= maxMoves) {
      setArrMovesForDisplay(arrMoves.slice(0, arrowCounter));
    }
  }, [arrowCounter, arrMoves]);

  if (arrMoves.length !== 0 && arrowCounter < maxMoves) {
    setTimeout(() => {
      setArrowCounter(arrowCounter + 1);
    }, 600)  
  }

  return (
    <div className='grid-main'>
      <GameField gameBoard={gameBoard}
        finishIndex={finishIndex}
        userChooseIndex={userChooseIndex}
        setUserChooseIndex={setUserChooseIndex}
        userWrongChoose={userWrongChoose}
        setUserWrongChoose={setUserWrongChoose}
        arrowCounter={arrowCounter}
        maxMoves={maxMoves}
        sizeOfBoard={sizeOfBoard}
        startCord={startCord}
      />

      <button
        className={(userChooseIndex) ? 'buttonNewGame' : 'buttonNewGameDisabled'}
        onClick={() => {
          if (userChooseIndex) setІsNewGame(true);
        }}>
        NEW GAME
     </button>

      {(arrMovesForDisplay.length !== 0) &&
        <DirectionPointer
          arrMovesForDisplay={arrMovesForDisplay}
          maxMoves={maxMoves}
          startCord={startCord}
        />}
    </div>
  );
}
export default App;