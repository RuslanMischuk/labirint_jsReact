import upPointer from "../images/arrows/up.png";
import downPointer from "../images/arrows/down.png";
import leftPointer from "../images/arrows/left.png";
import rightPointer from "../images/arrows/right.png";
import { getIndexFromCoordinate } from "./getIndexFromCordinate";

export const calculateMoves = (sizeOfBoard, line, column, maxMoves, finishIndex, setFinishIndex) => {

  let arrMoves = [];
  let movesСounter = 0;
  
  while (movesСounter < maxMoves) {

    movesСounter++;
    let availableMoves = new Map();
    let counter = 0;

    line < (sizeOfBoard - 1) && availableMoves.set(++counter, "down");
    line > 0 && availableMoves.set(++counter, "up");
    column > 0 && availableMoves.set(++counter, "left");
    column < (sizeOfBoard - 1) && availableMoves.set(++counter, "right");

    let moveDirection = availableMoves.get(Math.floor(Math.random() * availableMoves.size) + 1);

    switch (moveDirection) {
      case "up":
        line -= 1;
        arrMoves.push(upPointer);
        break;
      case "down":
        line += 1;
        arrMoves.push(downPointer);
        break;
      case "left":
        column -= 1;
        arrMoves.push(leftPointer);
        break;
      case "right":
        column += 1;
        arrMoves.push(rightPointer);
        break;
      default: console.log("switch calculateMoves зламався");
    }
  }

  let іndex = getIndexFromCoordinate(sizeOfBoard, line, column);
  setFinishIndex(іndex);

  return arrMoves;
}