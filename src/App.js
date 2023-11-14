import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light")

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
      if(mode==="light")
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
        setMode("light");
        setToggle({text : "Enable Dark Mode", color : "dark"})
        document.body.style.backgroundColor = "white";
        setStyle({ color: "black",
        backgroundColor: "white"})
        showAlert("Light Mode has been Enabled","primary");
      }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title = "SIPO" mode={mode} toggleMode={toggleMode} toggle={toggle}/>
      <Alert alert = {alert}/>
      {/* routes list inside */}
      <Routes>
              <Route exact path="/about" element={ <About myStyle={myStyle} />}></Route>
              <Route exact path="/textform" element={<TextForm myStyle={myStyle} toggle={toggle}/> }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
