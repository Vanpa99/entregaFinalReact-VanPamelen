import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetCont';
import Contacto from './components/contacto';
import Carrito from './components/Carrito';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import { CheckOut } from './components/CheckOut';

function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path='/'
            element={<Inicio />} />

          <Route
            path='/productos'
            element={<ItemListContainer />} />

          <Route
            path='/productos/:categoria'
            element={<ItemListContainer />} />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />} />

          <Route path='/contacto' element={<Contacto />} />

          <Route path='/carrito' element={<Carrito />} />

          <Route path='/checkout' element={<CheckOut />} />


          <Route path='/*' element={<Error />} />


        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;

// VERSION CON NUMERO DE CARRITO ACTUALIZABLE(NO RESTA, SOLO SUMA)
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from './components/NavBar';
// import Inicio from './components/Inicio';
// import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetCont';
// import Contacto from './components/contacto';
// import Carrito from './components/Carrito';
// import Error from './components/Error';
// import { CartContext } from './context/CartContext';
// import { useState } from 'react';

// function App() {

//   const [carrito, setCarrito] = useState([]);

//   const agregarAlCarrito = (producto, cantidad) => {
//     const itemAgregado = { ...producto, cantidad };

//     const nuevoCarrito = [...carrito];
//     const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id);

//     if (estaEnElCarrito) {
//         estaEnElCarrito.cantidad += cantidad;
//     } else {
//         nuevoCarrito.push(itemAgregado);
//     }
//     setCarrito(nuevoCarrito);
// }

// const numeroCarrito = () => {
//   return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
// }

//   return (
//     <CartContext.Provider value={{ carrito, agregarAlCarrito, numeroCarrito }}>
//       <BrowserRouter>
//         <NavBar />

//         <Routes>
//           <Route
//             path='/'
//             element={<Inicio />} />

//           <Route
//             path='/productos'
//             element={<ItemListContainer />} />

//           <Route
//             path='/productos/:categoria'
//             element={<ItemListContainer />} />

//           <Route
//             path="/item/:id"
//             element={<ItemDetailContainer />} />

//           <Route path='/contacto' element={<Contacto />} />

//           <Route path='/carrito' element={<Carrito />} />

//           <Route path='/*' element={<Error />} />


//         </Routes>
//       </BrowserRouter>
//     </CartContext.Provider>

//   )
// }

// export default App;