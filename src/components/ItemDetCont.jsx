import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import prod from "../carpProd/prod.json"
import Promesa from './Promesa';



const ItemDetailContainer = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await Promesa(prod);
            const productoEncontrado = data.find((p) => p.id === parseInt(id));
            setProducto(productoEncontrado);
            setLoading(false);
        };
        fetchData();
    }, [id, prod]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className='cont-det'>
            <img className='img-det'
                src={producto.imagen}
                alt={producto.titulo} />
            <div className='cuerpo-card-det'>
                <h3 className='titulo-det'>
                    {producto.titulo}
                </h3>
                <h5 className='desc-det'>
                    {producto.descripcion}
                </h5>
                <h6 className='precio-det'>
                    Precio: ${producto.precio}
                </h6>
                <p className='cat-det'>
                    Categoría: {producto.categoria}
                </p>
            </div>
        </div>
    );
};


export default ItemDetailContainer;