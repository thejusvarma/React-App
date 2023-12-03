import noteContext from "../context/notes/noteContext"
import { useContext } from "react"
import Note from "./Note";

export default function NoteList()
{
    const context = useContext(noteContext);
    const {notes,setNotes} = context;
    return(
    <>
        <div className="row">
        {notes.map((note, index) => {
        return (
            <div className="col-md-4">
            <Note title={note.title} content={note.content} ></Note>
            </div>
            );
        })}
        </div>
    </>
    )
}