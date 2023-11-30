import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Note from './components/Note';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  const[mode, setMode] = useState("light")

  const[alert,setAlert] = useState(null);

  const[myStyle, setStyle] = useState({ color: "black",
  backgroundColor: "white"})

  // to remove Link properties in Link tag used instaed of a tag
  const[myLink, setLink] = useState({color:"black",margin: "1rem",
  textDecoration: "none",})

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
        setLink({color:"white",margin: "1rem",
        textDecoration: "none",})
        showAlert("Dark Mode has been Enabled","warning");
      }
      else
      {
        setMode("light");
        setToggle({text : "Enable Dark Mode", color : "dark"})
        document.body.style.backgroundColor = "white";
        setStyle({ color: "black",
        backgroundColor: "white"})
        setLink({color:"black",margin: "1rem",
        textDecoration: "none",})
        showAlert("Light Mode has been Enabled","primary");
      }
  }

  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar title = "LightNote" mode={mode} toggleMode={toggleMode} toggle={toggle} link={myLink}/>
      <Alert alert = {alert} />
      <Note></Note>
      {/* routes list inside */}
      <Routes>
              <Route exact path="/about" element={ <About myStyle={myStyle} />}></Route>
              <Route exact path="/textform" element={<TextForm myStyle={myStyle} toggle={toggle}/> }></Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
