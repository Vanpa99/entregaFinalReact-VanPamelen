import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/fireBbase';

export const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidoRef = collection(db, "pedidos");

        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1>Gracias por su compra</h1>
                <h6>Su numero de referencia es: {pedidoId} </h6>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Finalizar Compra</h1>
            <form className="formilario" onSubmit={handleSubmit(comprar)}>
                <input type="text"
                    placeholder='Ingresa tu nombre completo'
                {...register("nombre") }
                />
                <input type="text"
                    placeholder='Ingresa tu E-mail'
                {...register("email") }
                />
                <input type="text"
                    placeholder='Ingresa tu telefono'
                {...register("telefono") }
                />

                <button className='enviar' type='submit'>Confirmar</button>
            </form>
        </div>
    )
}
