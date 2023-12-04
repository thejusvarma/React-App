import { useContext, useState } from "react"
import noteContext from "../context/notes/noteContext"

export default function AddNote(prop)
{
    const context = useContext(noteContext);
    const {notes,addNote} = context;

    const [note, setNote] = useState({title:"",content:"",tag:""})

    let handleonSave = () =>
    {   
        
    }

    let onInputChange=(e)=>
    {
        setNote({...note,[e.target.name]:e.target.value})
    }





    return(
        <>
        {/* Button trigger modal */}
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-secondary mt-4 justify-content-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add note
            </button>
        </div>

        {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" style={prop.myStyle}>
            <div className="modal-content " style={prop.myStyle}>
            <div className="modal-header"style={prop.myStyle}>
                <h5 className="modal-title" id="staticBackdropLabel">New Note</h5>
            </div>
            <div className="modal-body">
            {/* Form inside modal */}
            <form>
            <div className="form-group mb-4 mt-3">
                <label className="mb-1" htmlFor="title">Title</label>
                <input type="text" className="form-control" style={prop.myStyle} onChange={onInputChange} name="title" id="title" placeholder=""/>
            </div>
            <div className="form-group mb-3">
                <label className="mb-1" htmlFor="content">Content</label>
                <textarea className="form-control" style={prop.myStyle} onChange={onInputChange} id="content" name="content" rows="3"></textarea>
            </div>
            <div className="form-group mb-3">
                <label className="mb-1" htmlFor="tag">Tag</label>
                <input type="text" className="form-control" style={prop.myStyle} onChange={onInputChange} id="tag" name="tag" placeholder=""/>
            </div>
            </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleonSave}>Save</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}