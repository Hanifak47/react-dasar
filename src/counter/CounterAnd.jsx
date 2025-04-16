import { useState } from "react";
import Counter from './Counter';

export default function () {
    const [check, setCheck] = useState(true);
    function handleCheck(e) {
        setCheck(e.target.checked);
    }

    return (
        <>
            {!check && <Counter name="Hanif" />}
            {check && <Counter name="Kusuma" />}
            <input type="checkbox" onChange={handleCheck} checked={check} />
        </>
    )

}