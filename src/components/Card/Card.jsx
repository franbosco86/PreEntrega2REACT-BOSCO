import React from 'react';

function Card({ title, characteristics, price }) {
    console.log(title)

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px' }}>
            <h2>{title}</h2>
            <h2>{characteristics}</h2>
            <p>Precio: {price} </p>
        </div>
    );
}

export default Card;