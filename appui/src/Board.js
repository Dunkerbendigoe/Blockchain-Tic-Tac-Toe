import {React, useEffect, useState, useRef} from 'react'
import { web3, account0, account1} from './config'

const Board =  ({parentState, setParentState}) => {

  const ref = useRef(null)
  const [boardElements, setBoardElements] = useState([0,0,0,0,0,0,0,0,0])
  //const [gameOver, setGameOver] = useState(false) can have this be global state later


  useEffect(() => {
    const interval = setInterval(() =>{
      if(typeof parentState[1] != 'undefined'){
        parentState[1].methods.displayBoard().call().then(function(res){
          setBoardElements(res)
        })
      }


    }, 2000)
    return () => clearInterval(interval)
  }, [parentState[1]])

  const BoardElement = (props) =>{
    const clickHandler = (event) =>{
      if(typeof parentState[1] != 'undefined'){
        if(checkWin()){
          return;
        }
        const target = event.target.getAttribute("data-pos")
        console.log(target)
        let accnt;
            if(parentState[0].playerNumber == 1){
              accnt = account0;
            }else{
              accnt = account1;
          }
          console.log("playing as")
            console.log(parentState[0].playerNumber)
        parentState[1].methods.validMove(target).call({from:accnt}).then(function(res){
          if(res){
            let accnt;
            if(parentState[0].playerNumber == 1){
              accnt = account0;
            }else{
              accnt = account1;
            }
            console.log(parentState[0])
            parentState[1].methods.play(target).send({from: accnt, gas:'3000000'}).catch(function(err){
              console.log('something went wrong ' + String(err))
            }).then(function(res){
              // Tried to remove event listener
              //const element = ref.current;
              //element.removeEventListener('click', clickHandler)
              // + then force update or render whichever, not needed since we can't remove event listener yet
            })
          }else{
            console.log("playing as")
            console.log(parentState[0].playerNumber)
            console.log('valid move is false')
          }
        })
      }
    }
    let character = ''
    if(props['statevalue']==1){
      character = 'x'
    }
    if(props['statevalue']==2){
      character = 'o'
    }
    return <li ref={ref} data-pos={props['data-pos']} statevalue = {props['statevalue']} onClick={(event) =>clickHandler(event)}>{character}</li>
  }


  const checkWin = () =>{
    if(typeof parentState[1] != 'undefined'){
      var win;
      parentState[1].methods.winner().call().then(function(res){
        win = res;
        var displayResult;
        if(win > 0){
          if(win == 3){
            displayResult = "Draw ! game is over"
          } else if (win == 2){
            displayResult = "Player 2 wins ! game is over"
          } else if (win == 1){
            displayResult = "Player 1 wins ! game is over"
          }
          //setGameOver(true)
        }
      })
      if(win > 0){
        return true
      } else{
        return false
      }
    } else {
      return false;
    }
  }

  return (
        <>

          <ul id="game">
            <BoardElement data-pos={0} statevalue={boardElements[0]}/>
            <BoardElement data-pos={1} statevalue={boardElements[1]}/>
            <BoardElement data-pos={2} statevalue={boardElements[2]}/>
            <BoardElement data-pos={3} statevalue={boardElements[3]}/>
            <BoardElement data-pos={4} statevalue={boardElements[4]}/>
            <BoardElement data-pos={5} statevalue={boardElements[5]}/>
            <BoardElement data-pos={6} statevalue={boardElements[6]}/>
            <BoardElement data-pos={7} statevalue={boardElements[7]}/>
            <BoardElement data-pos={8} statevalue={boardElements[8]}/>
          </ul>
          
        </>
    
  )
}

export default Board;
