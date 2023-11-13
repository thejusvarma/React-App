import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState("white")

  const[alert,setAlert] = useState(null);

  const[myStyle, setStyle] = useState({ color: "black",
  backgroundColor: "white"})

  const[toggle,setToggle] = useState({text : "Enable Dark Mode", color : "dark"})

  const showAlert=(message,type)=>
  {
    setAlert({msg:message, type:type})
  }

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
        showAlert("Dark Mode has been Enabled","warning");
      }
      else
      {
        setMode("white");
        setToggle({text : "Enable Dark Mode", color : "dark"})
        document.body.style.backgroundColor = "white";
        setStyle({ color: "black",
        backgroundColor: "white"})
        showAlert("Light Mode has been Enabled","primary");
      }
  }

  return (
    <>
    <Navbar title = "SIPO" mode={mode} toggleMode={toggleMode} toggle={toggle}/>
    <Alert alert = {alert}/>
    <TextForm myStyle={myStyle} toggle={toggle}/> 
    <About myStyle={myStyle} />
    </>
  );
}

export default App;
