import { useState } from "react";
import Counter from './Counter';

export default function CounterAmbush() {
    const [check, setCheck] = useState(true);

    function handleCheck(e) {
        setCheck(e.target.checked);
    }

    return (
        <>
            {check == true ? <Counter /> : "hilang"}
            <input type="checkbox" onChange={handleCheck} checked={check} />
        </>
    )
}