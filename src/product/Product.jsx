export default function product({ product }) {
    return (
        <>
            <h2>{product.id} : {product.name}</h2>
            <p>Harga : {product.price}</p>
        </>
    )
}