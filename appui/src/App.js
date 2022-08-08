import './App.css';
import {React, useState} from 'react'
import JoinGame from './JoinGame';
import NewGame from './NewGame';
import Board from './Board';
import { TicTacToeContract } from './config';



function App() {

  const [playerNumber, setPlayerNumber] = useState({playerNumber: 0, hidden : true})
  const [TicTacToe, setTicTacToe] = useState()


  const testVars = () =>{
    console.log(playerNumber)
    console.log(TicTacToe)
  }

// New Game
  const [opponentAddress, setOpponentAddress] = useState('')
    const [receiptContractAddress, setReceiptContractAddress] = useState('')

    const initializeContract = (opponentAddress) =>{

        if (typeof parentState[1] != 'undefined'){
            console.log('There seems to be an ongoing game already!')
        }    
        else{
            TicTacToeContract.methods.newGame(opponentAddress).send({from:account0}, (error, txHash) =>{
                web3.eth.getTransactionReceipt(txHash, function(err, receipt){
                    setParentState[1](receipt.to)
                    setParentState[0]({playerNumber:1, hidden:false})
                    setReceiptContractAddress(receipt.to)
                })
            });
        }
        
    
    }


    // Join Game
    const [address, setAddress] = useState('')


    const attachToContract = (address) =>{
        setParentState[0]({playerNumber: 2, hidden : true})
        setParentState[1](address)
    }

  return (
   <>

    Welcome to Tic Tac Toe!
    <br/><br/>
    {/* <NewGame  parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></NewGame> */}
    <h1>Share this address with your opponent once you press new game :  {receiptContractAddress ? receiptContractAddress : ""}</h1>

            Enter opponent Address and Press New Game<br/><br/>
            <form>
                <input type="text" onChange={(event)=>setOpponentAddress(event.target.value)}></input>
            </form>
            <button onClick={()=>initializeContract(opponentAddress)}>New Game</button>
    
    <br/><br/>
    {/* <JoinGame parentState={[playerNumber, TicTacToe]} setParentState={[setPlayerNumber, setTicTacToe]}></JoinGame> */}

    Enter Your Friend's Game Here, Paste Their Game's Contract Address and press Go!
            <form>
                <input type="text" onChange={(event) => setAddress(event.target.value)}></input>
            </form>
            <button onClick = {()=>attachToContract(address)}>Go!</button>


    <button onClick={() => testVars()}>Click me</button>

    <br></br>

    <Board></Board>
    
   </>
  );
}

export default App;
