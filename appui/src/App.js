import './App.css';
import {React, useEffect, useState} from 'react'
import JoinGame from './JoinGame';
import NewGame from './NewGame';
import Board from './Board';

function App() {

  const [playerNumber, setPlayerNumber] = useState({playerNumber: 0, hidden : true})
  const [TicTacToe, setTicTacToe] = useState()


  // Purely meant for refreshing app and spreading current state.
  useEffect(() =>{
    const interval = setInterval(() =>{

    }, 2000)
    return () => clearInterval(interval)
  }, [TicTacToe])


  return (
   <>

    Welcome to Tic Tac Toe!
    <br/><br/>
    <NewGame  parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></NewGame>
    <br/><br/>
    <JoinGame parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></JoinGame>
    <br></br>

    <Board parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></Board>
    
   </>
  );
}

export default App;
