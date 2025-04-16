import { useState } from "react";
import Counter from './Counter.jsx';

export default function CounterTernary() {
    const [check2, setCheck] = useState(true);

    function handleCheck(e) {
        setCheck(e.target.checked);
    }
    
    return (
        <>
            {check2 == true ? <Counter name="Hanif" /> : <Counter name="kusuma" />}
            <input type="checkbox" onChange={handleCheck} checked={check2} />
        </>
    )
}