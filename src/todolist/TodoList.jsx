import Todo from './Todo.jsx';
import TodoTernary from './TodoTernary.jsx';
import TodoAnd from './TodoAnd.jsx';

export default function TodoList() {
    // disarankan ada id nya
    const data = [
        {
            id: 0,
            text: "Learn REACT",
            isCompleted: true,
        },
        {
            id: 1,
            text: "Learn Laravel",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Learn CakePHP"
        }
    ]
    // memasukan masing-masing elemen dari const data kepada component Todo.jsx
    // const todos = data.map((todo) => <Todo key={todo.id} {...todo} />)
    return (
        <>
            <ul>
                {/* {todos} */}
                {
                    data.map((todo) => <Todo key={todo.id} {...todo} />)
                }
                <TodoTernary text="Belajar CakePHP" isCompleted />
                <Todo text="shalat subuh" isCompleted isDeleted />
                <Todo text="shalat dzuhur" isCompleted />
                <Todo text="shalat ashar" isCompleted />
                <Todo text="shalat maghrib" isCompleted />
                <Todo text="shalat isya" isCompleted />
                <Todo text="selesai react" />
                <TodoAnd text="SAYA TAMPAN DAN KEREN" isCompleted />
            </ul>
        </>
    )
}