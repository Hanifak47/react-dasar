import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ContactForm from "./ContactForm.jsx";
import ContactImmer from "./ContactImmer.jsx";
// import HelloWorld from "./HelloWorld.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ContactForm />
            <ContactImmer />
        </StrictMode>
    )