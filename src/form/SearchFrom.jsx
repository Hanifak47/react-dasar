export default function SearchFrom() {
    return (
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert("you search");
            }}>
                Search
            </button>
        </form>
    )
}