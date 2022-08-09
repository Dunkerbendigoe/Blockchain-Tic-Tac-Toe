import {React, useState} from 'react'
import { TicTacToeContract, web3, account0, TicTacToeABI } from './config'



const NewGame = ({parentState, setParentState}) => {


    const [opponentAddress, setOpponentAddress] = useState('')
    const [receiptContractAddress, setReceiptContractAddress] = useState('')

    const initializeContract = (opponentAddress) =>{

        if (typeof parentState[1] != 'undefined'){
            console.log('There seems to be an ongoing game already!')
        }    
        else{
            TicTacToeContract.methods.newGame(opponentAddress).send({from:account0}, (error, txHash) =>{
                web3.eth.getTransactionReceipt(txHash, function(err, receipt){
                    setParentState[1](new web3.eth.Contract(TicTacToeABI, receipt.to))
                    setParentState[0]({playerNumber:1, hidden:false})
                    setReceiptContractAddress(receipt.to)
                    setParentState[2]('Your Turn!')
                })
            });
        }
        
    
    }
    
    return (
        <>
                    
            
            <h1>Share this address with your opponent once you press new game :  {receiptContractAddress ? receiptContractAddress : ""}</h1>

            Enter opponent Address and Press New Game<br/><br/>
            <form>
                <input type="text" onChange={(event)=>setOpponentAddress(event.target.value)}></input>
            </form>
            <button onClick={()=>initializeContract(opponentAddress)}>New Game</button>
        </>
    )
}


export default NewGame;
