import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { getProducts } from '../../data';

function ContainerBox() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <>cargando</>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                    {products.map((product, index) => (
                        <Link key={index} to={`/item/${index + 1}`}>
                            <Card title={product.name} characteristics={product.description} price={product.price} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

export default ContainerBox;
