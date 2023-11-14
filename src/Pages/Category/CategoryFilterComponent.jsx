import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data";

function CategoryFilterComponent() {
    const { category } = useParams();
    console.log(category);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(resp => {
                // Filtrar productos por la categoría actual
                const filteredProducts = resp.filter(product => product.category.toLowerCase() === category.toLowerCase());
                setProducts(filteredProducts);
            })
            .catch(err => console.log(err));
    }, [category]);

    return (
        <>
            {products.length ? (
                <div>
                    <h2>{category} Products</h2>
                    {products.map(product => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>cargando...</p>
            )}
        </>
    );
}

export default CategoryFilterComponent;
