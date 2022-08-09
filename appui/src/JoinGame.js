import {React, useState} from 'react'
import { TicTacToeABI, web3, account1} from './config'

const JoinGame = ({parentState, setParentState}) => {

    const [address, setAddress] = useState('')


    const attachToContract = (address) =>{
        setParentState[0]({playerNumber: 2, hidden : true})
        setParentState[1](new web3.eth.Contract(TicTacToeABI, address))

        // Although I setParent, the parentState passed is the previous, so I cannot access what I've just set. 
        let tttCaller = new web3.eth.Contract(TicTacToeABI, address)
        tttCaller.methods.myTurn(2).call({from:account1.address}).then(function(res){
            if(res){
                setParentState[2]('Your turn!')
            }else{
                setParentState[2]('Not Your Turn!')
            }
        })
    }
     

    return (
        <>
            Enter Your Friend's Game Here, Paste Their Game's Contract Address and press Go!
            <form>
                <input type="text" onChange={(event) => setAddress(event.target.value)}></input>
            </form>
            <button onClick = {()=>attachToContract(address)}>Go!</button>

        </>
    )
}

export default JoinGame;
