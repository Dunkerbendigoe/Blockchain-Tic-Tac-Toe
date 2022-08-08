import {React, useEffect, useState, usePrevious} from 'react'

const Board =  () => {

  const [boardElements, setBoardElements] = useState([0,0,0,0,0,0,0,0,0])

  const prevBoard = usePrevious(boardElements)

  useEffect(() =>{
    setTimeout(()=>{
      console.log('fetching data. If board data is the same as previous, then do not setState')
    })
  });

  const BoardElement = (props) =>{

    const clickHandler = () =>{
      console.log('checking tictac toe, valid move, and then play')
    }

    return <li data-pos={props} onClick={() =>clickHandler()}></li>
  }

  return (
        <>

          <ul>
            <BoardElement props={boardElements[0]}/>
            <BoardElement props={boardElements[1]}/>
            <BoardElement props={boardElements[2]}/>
            <BoardElement props={boardElements[3]}/>
            <BoardElement props={boardElements[4]}/>
            <BoardElement props={boardElements[5]}/>
            <BoardElement props={boardElements[6]}/>
            <BoardElement props={boardElements[7]}/>
            <BoardElement props={boardElements[8]}/>
          </ul>
          
        </>
    
  )
}

export default Board;
