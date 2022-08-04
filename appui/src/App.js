import './App.css';
import {React} from 'react'
import JoinGame from './JoinGame';
import NewGame from './NewGame';

function App() {
  return (
   <>

    <h>Welcome to Tic Tac Toe</h>

    <NewGame></NewGame>

    <JoinGame></JoinGame>
    
   </>
  );
}

export default App;
