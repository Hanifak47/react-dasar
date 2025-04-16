// import { useImmer } from "use-immer";
import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";


let id = 0;
const initialNote = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: true },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn ReactJS", done: false },
];

function notesReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [
                ...notes,
                {
                    id: id++,
                    text: action.text,
                    done: false
                } 
            ]
        case "CHANGE_NOTE":
            return notes.map(note =>
                note.id === action.id ? { ...note, text: action.text, done: action.done } : note
            )
        case "DELETE_NOTE":
            return notes.filter(note => note.id !== action.id);
        default:
            return notes;
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useReducer(notesReducer, initialNote);


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