export default function TaskList({ items = [] }) {
    return (
         <div>
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