import React from 'react'
import { useNavigate } from 'react-router-dom'

function Category() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Categorias disponibles</h1>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <a onClick={() => navigate('/category/Calzados')}>Calzados</a>
                <a onClick={() => navigate('/category/ropa')}> Ropa</a>
            </div>
        </>

    )
}

export default Category