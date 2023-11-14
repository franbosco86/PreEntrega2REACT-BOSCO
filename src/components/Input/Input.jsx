import React from 'react';

function Input() {
    return (
        <input
            style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '10px',
                width: '250px',
            }}
            placeholder="Ingrese su texto aqui"
        />
    );
}

export default Input;