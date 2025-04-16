import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import Counter from "./Counter.jsx";
import AppCounter from "./AppCounter.jsx";
import CounterTernary from "./CounterTernary.jsx";
import CounterAmbush from "./CounterAmbush.jsx";
import CounterTag from "./CounterTag";
import CounterAnd from "./CounterAnd";
import CounterKey from "./CounterKey";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            {/* <Counter /> */}
            normal counter
            <Counter /> 
            <br />
            {/* state dari komponen akan direset jika komponen tersebut hilang */}
            <AppCounter />
            <br />
            {/* state dari komponen tidak akan direset jika digantikan dengan komponen yang sama */}
            <CounterTernary />
            <br />
            {/* state dari komponen akan direset jika digantikan dengan komponen yang berbeda */}
            <CounterAmbush />
            {/* state dari komponen akan direset jika digantikan dengan outer tag yang berbeda */}
            <CounterTag />
            {/* meskipun memiliki posisi yang sama state akan direset dikarenakan memliki penggunaan operator and */}
            <CounterAnd />
            {/* tambahkan argumen key agar komponen memiliki alokasi state yang berbeda meskipun pada posisi yang sama */}
            <CounterKey />
        </StrictMode>
    )