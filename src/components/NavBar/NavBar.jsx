import React from 'react';
import UserWidget from '../UserWidget/UserWidget';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';



function NavBar() {

    const navigate = useNavigate()

    return (
        <header style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 onClick={() => navigate('/')}>Logo</h1>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', padding: 0, margin: 0, gap: '10px', alignItems: 'center' }}>
                        <li>
                            <a onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/category/')}>Categorias</a>
                        </li>
                        <li >
                            <a onClick={() => navigate('/about')}>About</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <Input />
                            <Button palabra={'Buscar'} />
                        </li>
                        <li>
                            <UserWidget />
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default NavBar;

