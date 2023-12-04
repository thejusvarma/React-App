import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesdata = [
        {
            "_id": "6566af23wffb7eger28a7d6a160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af68dfvdf102289dfdg2a0f958b2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:26:32.918Z",
            "__v": 0
        },
        {
            "_id": "6566afsf23b728a7d6aewrw160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af2wf3b728a7d6egea160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af2wff3b728a7d6wrgra160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566afa51fw4e55364dfefwgr47cd",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:27:33.017Z",
            "__v": 0
        }
    ]


    const[notes,setNotes] = useState(notesdata)

    // Add Note
    const addNote=(note)=>{
        setNotes(notes.push(note))
    }

    // Delete Note
    const deleteNote=(id)=>{

    }

    // Get all notes
    const getNote=()=>
    {

    }

    return(
        <noteContext.Provider value={{notes,setNotes,addNote,deleteNote,getNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;