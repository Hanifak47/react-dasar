import { useState } from "react";

export default function Counter() {

    // pendefinisian state agar bisa dikounter tersu menerus
    // counter = variabel; setCounter = fungsi
    let [counter, setCounter] = useState(0);

    console.info('Render Counter');


    // function handleClick() {
    //     // penggunaan state
    //     setCounter(counter + 1);
    //     // even tho counternya 3 kali hanya dieksekusi yg pertama saja itu namanya snapshot
    //     // setCounter(counter + 1);
    //     // setCounter(counter + 1);
    //     console.log(counter)
    // }

    // jika counter ingin naik 3 sekaligus

    function handleClick() {
        setCounter((c) => c + 1);
        setCounter((c) => c + 1);
        setCounter((c) => c + 1);
    }
    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>
            <h1>Counter : {counter}</h1>
        </div>
    )
}