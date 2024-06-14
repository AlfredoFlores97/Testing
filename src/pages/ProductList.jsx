import React, { useEffect, useState } from 'react';
import { getProduct, getProducts } from '../service/Api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    const fetchProducts = async () => {
        const productsData = await getProducts();
        setProducts(productsData);
    };

    const fetchProduct = async (id) => {
        const productsData = await getProduct(id);
        setProduct(productsData);
    };

    useEffect(() => {
        fetchProducts()
        fetchProduct(2);
    }, []);

    return (
        <div>
        <h1>Product List</h1>
        <button onClick={fetchProducts}>Click me</button>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;
