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
        <div>
            <img 
                src={producto.imagen} 
                alt={producto.titulo} />
            <h6>
                {producto.titulo}
            </h6>
            <p>
                {producto.descripcion}
            </p>
            <p>
                Precio: ${producto.precio}
            </p>
            <p>
                Categoría: {producto.categoria}
            </p>
        </div>
    );
};


export default ItemDetailContainer;