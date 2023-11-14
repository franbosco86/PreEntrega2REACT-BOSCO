import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContainerBox from './components/ContainerBox/ContainerBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Category from './Pages/Category/Category';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryFilterComponent from './Pages/Category/CategoryFilterComponent';

//componente para notfound
const NotFound = () => <h1>404 - Not Found</h1>;

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ContainerBox />} />
          <Route path={'/category'} element={<Category />} />
          <Route path={'/category/:category'} element={<CategoryFilterComponent />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;