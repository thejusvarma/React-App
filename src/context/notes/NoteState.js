import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesdata = [
        {
            "_id": "6566af23b728a7d6a160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af681022892a0f958b2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:26:32.918Z",
            "__v": 0
        },
        {
            "_id": "6566af23b728a7d6a160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af23b728a7d6a160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566af23b728a7d6a160ce2c",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:25:23.934Z",
            "__v": 0
        },
        {
            "_id": "6566afa514e55364dfef47cd",
            "user": "65644f936fd2eb115debc389",
            "title": "thejus fwedfwef",
            "content": "wfnjorjrnfr3ffnjrribrfehieefnfebek",
            "tag": "General",
            "date": "2023-11-29T03:27:33.017Z",
            "__v": 0
        }
    ]
    const[notes,setNotes] = useState(notesdata)
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;