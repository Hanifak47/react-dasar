// import { useImmer } from "use-immer";
// import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";


let id = 0;
const initialNote = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: true },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn ReactJS", done: false },
];

function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: text,
            done: false
        });
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNote);


    function handleAddNote(text) {
        dispatch({
            type: 'ADD_NOTE',
            text: text
        });
    }

    function handleChangeNote(note) {
        dispatch({
            ...note,
            type: 'CHANGE_NOTE'
        });
    }

    function handleDeleteNote(note) {
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id
        });
    }

    return (
        <>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </>
    )
}