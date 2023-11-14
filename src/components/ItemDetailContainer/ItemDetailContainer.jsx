import { useEffect } from "react";
import { useState } from "react"
import { getProduct } from "../../data";
import { ItemDetail } from "../Item/ItemData";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct(id)
            .then(resp => setProduct(resp))
            .catch(err => console.log(err));
    }, [product])
    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    )
}