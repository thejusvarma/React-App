import React, {useState} from "react";

export default function TextForm(prop)
{
    const[text, setText] = useState('Set Text here');
    // setText("New Value");

    const handleOnClick=()=>
    {   
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>
    {   
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>
    {
        console.log("changed")
        setText(event.target.value)
    }

    return (
        <div className="container">
        <form>
            <div className="mb-4">
            <input type="text" value={text} onChange={handleOnChange} className="form-control my-3" style={prop.myStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>

            </div>
            <button type="submit" onClick={handleOnClick} className="btn btn-secondary">Uppercase</button>
            <button type="submit" onClick={handleLoClick} className="btn btn-secondary">Lowercase</button>
        </form>
        <div>
            <p className={`text-${prop.toggle.color}`}>{text.split(" ").length} words and {text.length} characters</p>
            <p className={`text-${prop.toggle.color}`}>{text.split(" ").length * 0.008} minutes read</p>
        </div>
        </div>
    )
}