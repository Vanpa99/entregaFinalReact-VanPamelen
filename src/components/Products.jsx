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
            <h1>Nuestros productos</h1>
            <section className="contenedor-cat" >
                <h6>Ver por categoria</h6>

                <button onClick={() => handlerCategoryChange('todos')}
                    type="button"
                    className="btn btn-primary btn-sm btn-cat">
                    Todos
                </button>

                <button onClick={() => handlerCategoryChange('Panes')}
                    type="button"
                    className="btn btn-primary btn-sm btn-cat">
                    Panes
                </button>
                <button onClick={() => handlerCategoryChange('Pastelería')}
                    type="button"
                    className="btn btn-primary btn-sm btn-cat">
                    Pastelería
                </button>
                <button onClick={() => handlerCategoryChange('Bebidas')}
                    type="button"
                    className="btn btn-primary btn-sm btn-cat">
                    Bebidas
                </button>
            </section>

            {loading ? (
                <h1>Cargando...</h1>
            ) : (

                <section className="contenedor-card">
                    {
                        productosFiltrados.map((element) => (
                            <div key={element.id} className="card-marg">
                                <div className="card">
                                    <Link to={`/item/${element.id}`}>

                                        <img className="img-prod"
                                            src={element.imagen}
                                            alt={element.titulo} />
                                    </Link>
                                    <div className="cuerpo-card">
                                        <Link to={`/item/${element.id}`}>
                                            <h3 className="titulo-card">
                                                {element.titulo}
                                            </h3>
                                        </Link>

                                        <h6 className="precio-card">
                                            Precio: ${element.precio}
                                        </h6>
                                        <button className="producto-agregar">
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            )}
        </>
    )
}


export default Productos;