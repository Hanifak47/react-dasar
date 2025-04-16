import Row from './Row.jsx';

// import Todo from './Todo.jsx';


export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text='Satu' />
                <Row id="2" text='Dua' />
                <Row id="3" text='Tiga' />
            </tbody>
        </table>
    )
}