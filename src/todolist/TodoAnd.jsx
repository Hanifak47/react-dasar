export default function TodoAnd({ text, isCompleted, isDeleted }) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li>
                {text} {isCompleted && 'V'}
            </li>
        )
    }
}