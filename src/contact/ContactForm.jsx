import { useState } from "react";

const initialData = {
    name: "",
    message: "",
    greetings: ""
}; 

// state object

export default function ContactForm() {
    const [contact, setContact] = useState(initialData);

    function handleNameChange(e) {
        setContact({ ...contact, name: e.target.value })
    }

    function handleMessageChange(e) {
        setContact({ ...contact, message: e.target.value })
    }

    function handleGreetingsChange(e) {
        setContact({ ...contact, greetings: e.target.value })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} />
                <br />
                <input type="text" placeholder="Greetings" value={contact.greetings} onChange={handleGreetingsChange} />

            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
            <p>Greetings: {contact.greetings}</p>
        </div>
    )
}