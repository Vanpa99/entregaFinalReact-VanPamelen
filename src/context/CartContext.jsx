import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const almLocal = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(almLocal);

    const agregarAlCarrito = (producto, cantidad) => {
        const itemAgregado = { ...producto, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const numeroCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider
            value={{
                carrito, agregarAlCarrito, numeroCarrito,
                precioTotal, vaciarCarrito,
            }}>
                {children}
        </CartContext.Provider>
    )
}

// // VERSION CON NUMERO DE CARRITO ACTUALIZABLE(NO RESTA, SOLO SUMA)
// import { createContext } from "react";

// export const CartContext = createContext();