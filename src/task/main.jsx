import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Task from "./Task.jsx";
// import TaskForm from "./TaskForm.jsx";
import TaskObjetct from "./TaskObject.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            {/* <Task /> */}
            <TaskObjetct />
        </StrictMode>
    )