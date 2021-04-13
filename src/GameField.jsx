import React from "react";
import start from "./images/markers/start.png";
import finish from "./images/markers/finish.png";
import wrong from "./images/markers/wrong.png";
import victory from "./images/markers/victory.png";

export const GameField = (props) => {
   const { gameBoard, finishIndex, userChooseIndex, setUserChooseIndex,
      userWrongChoose, setUserWrongChoose, arrowCounter, maxMoves, sizeOfBoard, startCord
   } = props;

   const userChoose = (index) => {
      setUserChooseIndex(index);
      index !== finishIndex && setUserWrongChoose(true);
   }

   return (
      <div className='grid-container' style={{ gridTemplateColumns: ` repeat(${sizeOfBoard}, 1fr)` }}  >
         { gameBoard.flat().map((value, index) => {

            const isDisabled = userChooseIndex || (arrowCounter < maxMoves);
            const backgroundColor = ((userChooseIndex || userChooseIndex === 0) && index === userChooseIndex) ? '#4CAF50' : '#034769';

            const getImgType = () => {
               if (!userChooseIndex && userChooseIndex !== 0 && index === startCord.startIndex) return start;
               if (userWrongChoose && index === finishIndex) return finish;
               if ((userChooseIndex || userChooseIndex === 0) && index === userChooseIndex) {
                  return finishIndex === userChooseIndex ? victory : wrong;
               }
            }

            return (
               <button className='button' disabled={isDisabled}
                  style={{ backgroundColor }}
                  onClick={() => userChoose(index)} key={index}  >
                  {(getImgType()) && <img src={getImgType()} width="85%" height="70%" position='absolute' top='100%' left='100%' alt="" />}
               </button>
            )
         })}
      </div>
   );
}

