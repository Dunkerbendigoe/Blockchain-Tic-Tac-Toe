import './App.css';
import {React, useState} from 'react'
import JoinGame from './JoinGame';
import NewGame from './NewGame';
import Board from './Board';



function App() {

  const [playerNumber, setPlayerNumber] = useState({playerNumber: 0, hidden : true})
  const [TicTacToe, setTicTacToe] = useState()
  const [TicTacToeContract, setTicTacToeContract] = useState()


  const testVars = () =>{
    console.log(playerNumber)
    console.log(TicTacToe)
  }

  return (
   <>

    Welcome to Tic Tac Toe!

    <NewGame  parentState={[playerNumber, TicTacToe, TicTacToeContract]} setParentState={[setPlayerNumber, setTicTacToe, setTicTacToeContract]}></NewGame>
    <JoinGame parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></JoinGame>

    <button onClick={() => testVars()}>Click me</button>

    <br></br>

    <Board></Board>
    
   </>
  );
}

export default App;
