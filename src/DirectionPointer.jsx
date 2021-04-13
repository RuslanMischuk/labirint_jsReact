import React from "react";

export const DirectionPointer = ({ arrMovesForDisplay, setArrMovesForDisplay, maxMoves }) => {

    return (
        <div className='grid-ArrowPointer' style={{ gridTemplateColumns: `repeat( 5, 1fr)` }} >
            {(arrMovesForDisplay.reverse().map((value, index) => {
                return <img src={value} key={index} width="125" height="125" alt={'arrow'} />
            }))}
        </div>
    );
}