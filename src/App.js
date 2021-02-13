import React from 'react';
import { Button } from '@material-ui/core'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import { ReactComponent as Logo } from './logo.svg';
import InputLogo from './Logo.png';
import Treehacks from './Treehacks.png'

function handleNewButton(){
  console.log("Is this new thing working?");
}

function App() {
  return (
    <div className="App">
        <h1> Treehacks Team 276 </h1>
        
        <Button variant="outlined"onClick = {handleNewButton}> Submit</Button>
        <img src={Treehacks} alt = 'website logo' />
        /Logo />
        <Home/>
    </div>
  );
}

export default App;
