import React from 'react'

const Board =  () => {

  const BoardElement = (prop) =>{


    const clickHandler = () =>{
      console.log('checking tictac toe, valid move, and then play')
    }

    return <li data-pos={prop} onClick={() =>clickHandler()}/>
  }

  return (
    <>
        <ul>
            <BoardElement props={'0'}/>
            <BoardElement props={'1'}/>
            <BoardElement props={'2'}/>
            <BoardElement props={'3'}/>
            <BoardElement props={'4'}/>
            <BoardElement props={'5'}/>
            <BoardElement props={'6'}/>
            <BoardElement props={'7'}/>
            <BoardElement props={'8'}/>
        </ul>
    </>
  )
}

export default Board;
