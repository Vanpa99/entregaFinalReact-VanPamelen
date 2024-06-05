import prod from "../carpProd/prod.json"
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import Promesa from "./Promesa";


const Productos = () => {
    const { categoria } = useParams();
    const navigate = useNavigate();
    const [filtroCategoria, setFiltroCategoria] = useState(categoria || 'todos');
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await Promesa(prod);
            setProductos(data);
            setLoading(false);
        };
        fetchData();
    }, [prod]);

    useEffect(() => {
        const fetchFilteredData = async () => {
            setLoading(true);
            const data = await Promesa(prod);
            setFiltroCategoria(categoria || 'todos');
            setProductos(data);
            setLoading(false);
        };
        fetchFilteredData();
    }, [categoria, prod]);

    const handlerCategoryChange = (categoria) => {
        setLoading(true);
        navigate(`/productos/categoria/${categoria}`);
    };

    const productosFiltrados = filtroCategoria === 'todos' ? prod : prod.filter(prod => prod.categoria === filtroCategoria);


    return (
        <>
            <h5>Todos los productos</h5>
            <section className="contenedor-cat" >
                <h6>Ver por categoria</h6>

                <button onClick={() => handlerCategoryChange('todos')}
                    type="button"
                    className="btn btn-primary btn-sm">
                    Todos
                </button>

                <button onClick={() => handlerCategoryChange('pan')}
                    type="button"
                    className="btn btn-primary btn-sm">
                    Panes
                </button>
                <button onClick={() => handlerCategoryChange('pasteleria')}
                    type="button"
                    className="btn btn-primary btn-sm">
                    Pasteleria
                </button>
                <button onClick={() => handlerCategoryChange('bebidas')}
                    type="button"
                    className="btn btn-primary btn-sm">
                    Bebidas
                </button>
            </section>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                
                <section className="contenedor-card">
                    {
                        productosFiltrados.map((element) => (
                            <div key={element.id} className="card-marg">
                                <Link to={`/item/${element.id}`}
                                    className="card">
                                    {/* <div> {element.imagen} </div> */}
                                    <p className="titulo-card">
                                        {element.titulo}
                                    </p>
                                    <p className="precio-card">
                                        ${element.precio}
                                    </p>
                                </Link>
                            </div>

                        ))
                    }
                </section>
            )}
        </>
    )
}


export default Productos;