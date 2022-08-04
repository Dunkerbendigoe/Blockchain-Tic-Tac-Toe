import {React, useState} from 'react'


const NewGame = (props) => {

    const [address, setAddress] = useState('')


     

    return (
        <>
            <form>
                <input type="text" value={address} onChange={(event) => setAddress(event)}></input>

            </form>

        </>
    )
}


export default NewGame;
