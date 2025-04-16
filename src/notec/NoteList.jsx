import Note from "./Note.jsx";
import { useContext} from "react";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
    const notes = useContext(NotesContext);
    return (
        <>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </>
    )
}


// import Note from "./Note.jsx";
// import { useContext, useMemo, useState } from "react";
// import { NotesContext } from "./NoteContext.jsx";

// export default function NoteList() {
//     const notes = useContext(NotesContext);
//     const [search, setSearch] = useState("");
//     const searchInput = useRef(null);

//     // isi dari memo ditriger ulang jika ada notes dan searchnya
//     const filteredNotes = useMemo(() => {
//         console.info("filtering notes")
//         return notes.filter(note => note.text.includes(search))
//     }, [notes, search])

//     // isi value dari variabel search berdasarkan texbox yang sudah menggunakan referrence
//     function handleSearch() {
//         console.info("search")
//         setSearch(searchInput.current.value);
//     }

//     return (
//         <>
//             <input ref={searchInput} placeholder="Search" />
//             <button onClick={handleSearch}>Search</button>
//             <ul>
//                 {filteredNotes.map(note => (
//                     <li key={note.id}>
//                         <Note note={note} />
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }
