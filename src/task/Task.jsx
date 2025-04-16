import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    // fungsi untuk memasukkan nilai
    function handleChange(e) {
        setItem(e.target.value);
    }

    //fungsi untuk menampung nilai yang sudah dimasukkan 
    function handleClick(e) {
        e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        })
        setItem("");
    }  

    return (
        <div>
            <h1>Buat Tugas</h1>
            <form>
                <input value={item} onChange={handleChange} />
                <button onClick={handleClick}>Tambah</button>
            </form>
            <h1>Daftar Tugas</h1>
            <ul>
                {/* mirip dengan foreach seluruh elemen dalam items dikeluarkan */}
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
} 