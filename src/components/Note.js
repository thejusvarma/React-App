import React from "react";

export default function Note(props)
{
let  deleteNote = async(id) =>{
    console.log(id);
}
return(
    <>
    <div className="container mt-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.content.slice(0,200)}...</p>
                    <p className="card-text">{props.note._id}</p>
                    <div className="d-flex justify-content-between">
                    <i className="fa-regular fa-pen-to-square" title="Edit"></i>
                    <i className="fa-brands fa-readme" title="Read"></i>
                    <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(props.note._id)}} title="Delete"></i>
                    </div>
                </div>
            </div>
    </div>
    </>
)
}

