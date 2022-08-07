import {React, useState} from 'react'

const JoinGame = ({parentState, setParentState}) => {

    const [address, setAddress] = useState('')


    const attachToContract = (address) =>{
        setParentState[0]({playerNumber: 2, hidden : true})
        setParentState[1](address)
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
