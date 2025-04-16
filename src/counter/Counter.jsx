import { useState } from "react";

export default function Counter({name = "hanif cool"}) {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }
  
    return (
        <>
            <h1>hitung {name} : {count}</h1>
            <button onClick={handleCount}>Hitung</button>
        </>
    )
}