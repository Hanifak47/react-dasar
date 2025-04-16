import { useRef, useState } from "react";

export default function Timer() {
    // deklarasi state waktu mulai
    const [start, setStart] = useState(null);
    // deklarasi state waktu sekarang
    const [now, setNow] = useState(null);
    // deklarasi ref timer agar tidak perlu reset ulang
    const timer = useRef(null)

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            {/* now -start agar direset */}
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}