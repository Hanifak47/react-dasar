import { useState } from "react";
import Counter from './Counter';

export default function CounterKey() {
    const [check, setCheck] = useState(true);

    function handleCheck(e) {
        setCheck(e.target.checked);
    }

    return (
        <>

            {check == true ? <Counter key={"jos"} name="Hanif" /> : <Counter key={"bos"} name="Kusuma" />}
            <input type="checkbox" onChange={handleCheck} checked={check} />
        </>
    )
}