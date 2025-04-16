
// keyword children berfungsi sebagai pendanda bahwa component ini berperan sebagai parent dari component yang lain
export default function Container({ children }) {
    return (
        <div>
            <h1>Programmer JOSS</h1>
            {children}
            <footer>
                <p>2024 Programmer Zaman Now</p>
            </footer>
        </div>
    )
}