import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1>Carrito</h1>

            {
                carrito.map((element) => (
                    <div key={element.id}>
                        <h2>{element.titulo} </h2>
                        <p>Precio: ${element.precio} </p>
                        <p>Cantidad: {element.cantidad} </p>
                        <p>Precio total: ${element.precio * element.cantidad} </p>

                    </div>

                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar Carrito</button>
                        <Link to={"/checkout"}>Realizar Compra</Link>
                    </> :
                    <>
                        <h2>Su carrito esta vacio.</h2>
                        <h2>Seleciona un producto aqui.</h2>
                    </>
            }

        </div>
    )
}

export default Carrito;