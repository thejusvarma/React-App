import CreateNote from "./AddNote";
import NoteList from "./NoteList";

export default function Home(prop)
{
    return(
        <>
        <CreateNote myStyle={prop.myStyle}></CreateNote>
        <NoteList></NoteList>
        </>
    )
}