import { useState, useRef, useEffect } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    // const loaded = useRef(false);
    const [load, setLoad] = useState(false);
    function handleClick() {
        setLoad(true);
    }

    // parameter [] menandakan bahwa effect ini hanya dirender 1 kali, jika dihlangkan maka dirender berkali kali

    useEffect(() => {
        console.info('Call Use Effect With []')
    }, []);


    // jika ada parameter seperti [load] hanya tertriger saat event tertentu saja
    // useEffect(() => {
    //     // apakah pernah diload atau tidak
    //     // jika belum maka ambil data jsonnya
    //     console.info('Call Use Effect');
    //     if (load) {
    //         fetch("/products.json")
    //             .then((response) => response.json())
    //             .then((data) => setProduct(data))
    //     }

    //     return () => {
    //         console.info("Product List component unmounted");
    //     }
    // }, [load]);

    // menerapkan async effect
    useEffect(() => {
        console.info('Call Use Effect');

        async function fetchProducts() {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }

        if (load) {
            fetchProducts();
        }
        return () => {
            console.info("Product List component unmounted");
        }
    }, [load]);

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </>
    )
}