export default function SayHelloForm() {

    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("nama").value;
        document.getElementById("text_hello").innerText = 'Hello '+ name;
    }
    return (
        <div>
            <form>
                <input id="nama" />
                <button onClick={handleClick}> Say Hello </button>
            </form>
            <h1 id="text_hello">Hello World</h1>
        </div>
    )
}