import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container.jsx";
import HelloWorld from "./HelloWorld.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import Alert from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import ToolBar from "../button/ToolBar.jsx";
import SearchFrom from "../form/SearchFrom.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            {/* <HelloWorld /> */}
            <Container>
                <HelloWorld />
                <TodoList />
                <Table />
                <Alert text="Click Me" message="You Click Me" />
                <MyButton text="Smash Me" onSmash={() => alert("You Smash Me")} />

                <ToolBar onClick={(e) => {
                    e.stopPropagation();
                    alert("You Click Toolbar");
                }} />
                <SearchFrom />
                <SayHelloForm />
                <Counter />
                <Counter />
            </Container>
        </StrictMode>
    )