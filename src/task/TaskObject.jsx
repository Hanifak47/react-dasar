// memanfaatkan komponen task form sebagai form inpuytan
//memanfaatkan komponen task list sebagai form menampilkan list 

//sharing state 

import { useImmer } from 'use-immer';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function TaskObjetct() {
    const [items, setItems] = useImmer([]);

    function handleSubmit(item) {
        setItems((draft) => {
            draft.push(item);
        })
    }

    return (
        <div>
            <TaskForm onSubmit={handleSubmit} />
            <TaskList items={items} />
        </div>
    )
}