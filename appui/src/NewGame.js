import {React, useState} from 'react'


const NewGame = (props) => {

    const initializeContract = () =>{
        console.log('web3 transaction of constructor call and using setStates to update parent states')
    }
    
    return (
        <>
            <button onClick={()=>initializeContract()}></button>
        </>
    )
}


export default NewGame;
