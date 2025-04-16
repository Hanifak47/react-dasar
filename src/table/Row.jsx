// bukan pure function karena pakai counter ++

// let counter = 0;

// export default function Row({ text }) {
//     counter++;
//     return (
//         <tr>
//             <td>{counter}</td>
//             <td>{text}</td>
//         </tr>
//     )
// }

// pure function

export default function Row({ id, text }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}