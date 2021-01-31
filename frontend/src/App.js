import React,{useState, useEffect} from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [bae, setBae] = useState(5);
  const [data, setData] = useState();

  const socket = io.connect('http://localhost:5000/');

  function clicked(){
    setCount((prevcount)=>{
      if(prevcount + 1 === 5){
       return <span>Oh my God it's 5</span>
      }
      return prevcount + Math.random()*10 + 1;
    });
  }

  function clickbae(){
    setBae(bae + 5);
  }

  useEffect(()=>{

    console.log('useEffect');
    socket.on('message', (data)=>{
      console.log(data);
    })
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={clicked}>Click Here</button>
        <button onClick={clickbae}>Click Bae</button>
        Count:{count}<br></br>
        Bae:{bae}
      </header>
    </div>
  );
}

export default App;
