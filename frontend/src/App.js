import React,{useState, useEffect} from 'react';
import {io} from 'socket.io-client';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [bae, setBae] = useState(5);

  useEffect(()=>{
        const socket=io('http://localhost:5000/')
        socket.on('message', (arg)=>{
            console.log(arg);
        })
    },[])

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

  return (
    <div className="App">
        <button onClick={clicked}>Click Here</button>
        <button onClick={clickbae}>Click Bae</button>
        Count:{count}<br></br>
        Bae:{bae}
    </div>
  );
}

export default App;
