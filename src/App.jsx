import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Products';
import ItemDetailContainer from './components/ItemDetCont';
import Contacto from './components/contacto';
import Carrito from './components/Carrito';
import Error from './components/Error';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={<ItemListContainer />} />

        <Route
          path='/productos'
          element={<Productos />} />

        <Route
          path='/productos/categoria/:categoria'
          element={<Productos />} />

        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} />

        <Route path='/contacto' element={<Contacto />} />

        <Route path='/carrito' element={<Carrito />} />

        <Route path='/*' element={<Error />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
