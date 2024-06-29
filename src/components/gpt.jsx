//  VERSION CON FILTRADO FUNCIONAL/SI USO LA MISMA MISMA CAT NO DEVUELVE NADA
// import { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Promesa from "./Promesa";
// import ItemList from "./ItemList";
// import prod from "../carpProd/prod.json";

// const ItemListContainer = () => {
//     const { categoria } = useParams();
//     const navigate = useNavigate();
//     const [filtroCategoria, setFiltroCategoria] = useState(categoria || 'todos');
//     const [productos, setProductos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const data = await Promesa(prod); 
//             setProductos(data);
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         const fetchFilteredData = async () => {
//             setLoading(true);
//             const data = await Promesa(prod); 
//             setFiltroCategoria(categoria || 'todos');
//             setLoading(false);
//         };
//         fetchFilteredData();
//     }, [categoria]);

//     const handlerCategoryChange = (categoria) => {
//         setLoading(true);
//         navigate(`/productos/categoria/${categoria}`);
//     };

//     const productosFiltrados = filtroCategoria === 'todos' ? productos : productos.filter(prod => prod.categoria === filtroCategoria);

//     return (
//         <>
//             <h1>Nuestros productos</h1>
//             <section className="contenedor-cat" >
//                 <h5>Ver por categoría</h5>

//                 <button onClick={() => handlerCategoryChange('todos')}
//                     type="button"
//                     className={`btn btn-primary btn-sm btn-cat`}>
//                     Todos
//                 </button>

//                 <button onClick={() => handlerCategoryChange('Panes')}
//                     type="button"
//                     className={`btn btn-primary btn-sm btn-cat`}>
//                     Panes
//                 </button>

//                 <button onClick={() => handlerCategoryChange('Pastelería')}
//                     type="button"
//                     className={`btn btn-primary btn-sm btn-cat`}>
//                     Pastelería
//                 </button>

//                 <button onClick={() => handlerCategoryChange('Bebidas')}
//                     type="button"
//                     className={`btn btn-primary btn-sm btn-cat`}>
//                     Bebidas
//                 </button>
//             </section>

//             {loading ? (
//                 <h1>Cargando...</h1>
//             ) : (
//                 <ItemList productos={productosFiltrados}/>
//             )}
//         </>
//     );
// };

// export default ItemListContainer;

//     VERSION INICIAL CON ITEMLIST/NO ANDA FILTRADO
// import prod from "../carpProd/prod.json"
// import { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Promesa from "./Promesa";
// import ItemList from "./ItemList";

// const ItemListContainer = () => {
//     const { categoria } = useParams();
//     const navigate = useNavigate();
//     const [filtroCategoria, setFiltroCategoria] = useState(categoria || 'todos');
//     const [productos, setProductos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const data = await Promesa(prod);
//             setProductos(data);
//             setLoading(false);
//         };
//         fetchData();
//     }, [prod]);

//     useEffect(() => {
//         const fetchFilteredData = async () => {
//             setLoading(true);
//             const data = await Promesa(prod);
//             setFiltroCategoria(categoria || 'todos');
//             setProductos(data);
//             setLoading(false);
//         };
//         fetchFilteredData();
//     }, [categoria, prod]);

//     const handlerCategoryChange = (categoria) => {
//         setLoading(true);
//         navigate(`/productos/categoria/${categoria}`);
//     };

//     const productosFiltrados = filtroCategoria === 'todos' ? prod : prod.filter(prod => prod.categoria === filtroCategoria);


//     return (
//         <>
//             <h1>Nuestros productos</h1>
//             <section className="contenedor-cat" >
//                 <h6>Ver por categoria</h6>

//                 <button onClick={() => handlerCategoryChange('todos')}
//                     type="button"
//                     className="btn btn-primary btn-sm btn-cat">
//                     Todos
//                 </button>

//                 <button onClick={() => handlerCategoryChange('Panes')}
//                     type="button"
//                     className="btn btn-primary btn-sm btn-cat">
//                     Panes
//                 </button>
//                 <button onClick={() => handlerCategoryChange('Pastelería')}
//                     type="button"
//                     className="btn btn-primary btn-sm btn-cat">
//                     Pastelería
//                 </button>
//                 <button onClick={() => handlerCategoryChange('Bebidas')}
//                     type="button"
//                     className="btn btn-primary btn-sm btn-cat">
//                     Bebidas
//                 </button>
//             </section>

//             {loading ? (
//                 <h1>Cargando...</h1>
//             ) : (
//                 <ItemList productos={productos}/>
//             )}
//         </>
//     )
// }


// export default ItemListContainer;
