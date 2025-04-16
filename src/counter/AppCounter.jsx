import { useState } from "react";
import Counter from "./Counter";

export default function AppCounter () {
    const [check2, setCheck] = useState(true);

    function handleCheck(e) {
        // console.log(e.target.checked);

        // set cekbox true or false
        setCheck(e.target.checked);
    }

    return (
        <>
            {check2 && <Counter />}
            <input type="checkbox" onChange={handleCheck} checked={check2} /> tampilkan counter
        </>
    )
}