import { useState } from "react";
import Counter from "./Counter";

export default function CounterTag() {
    const [check, setCheck] = useState(true);

    function handleCheck(e) {
        setCheck(e.target.checked);
    }

    return (
        <>
            {check == true ?
                <div>
                    <Counter />
                </div>
                :
                <section>
                    <Counter />
                </section>
            }
            <input type="checkbox" onChange={handleCheck} checked={check} />
        </>
    )
}