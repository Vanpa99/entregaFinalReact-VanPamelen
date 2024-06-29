import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Promesa from './Promesa';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/fireBbase"

const ItemDetailContainer = () => {

    const id = useParams().id;
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setProducto(
                    { ...resp.data(), id: resp.id }
                );
            })

    }, [id])

    // const fetchData = async () => {
    //     setLoading(true);
    //     const data = await Promesa(prod);
    //     const productoEncontrado = data.find((p) => p.id === parseInt(id));
    //     setProducto(productoEncontrado);
    //     setLoading(false);
    // };
    // fetchData();

    // if (loading) {
    //     return <h1>Cargando...</h1>;
    // }

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <ItemDetail producto={producto} />
    );
};

export default ItemDetailContainer;
