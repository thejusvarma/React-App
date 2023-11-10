import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState("white")


  const[myStyle, setStyle] = useState({ color: "black",
  backgroundColor: "white"})

  const[toggle,setToggle] = useState({text : "Enable Dark Mode", color : "dark"})

  const toggleMode=()=>
  {
      if(mode==="white")
      {
        setMode("dark");
        setToggle({text : "Enable Light Mode", color : "light"})
        document.body.style.backgroundColor = '#1a1a1a';
        setStyle({ color: "white",
        backgroundColor: "#1a1a1a",
        borderColor: "grey"})
      }
      else
      {
        setMode("white");
        setToggle({text : "Enable Dark Mode", color : "dark"})
        document.body.style.backgroundColor = "white";
        setStyle({ color: "black",
        backgroundColor: "white"})
      }
  }

  return (
    <>
    <Navbar title = "SIPO" mode={mode} toggleMode={toggleMode} toggle={toggle}/>
    <TextForm myStyle={myStyle} toggle={toggle}/> 
    <About myStyle={myStyle} />
    </>
  );
}

export default App;
