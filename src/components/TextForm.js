import React, {useState} from "react";

export default function TextForm()
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
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="text" value={text} onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" onClick={handleOnClick} className="btn btn-primary">Uppercase</button>
            <button type="submit" onClick={handleLoClick} className="btn btn-primary">Lowercase</button>
        </form>
        <div>
            <h4>{text.split(" ").length} words and {text.length} characters</h4>
            <h4>{text.split(" ").length * 0.008} minutes read</h4>
        </div>
        </div>
    )
}