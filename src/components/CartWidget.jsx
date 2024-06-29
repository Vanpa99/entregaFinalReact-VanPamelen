import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ cartImg }) => {

    const { numeroCarrito } = useContext(CartContext)
    return (
        <div>
            <img src={cartImg} 
            alt=" Img Carrito" 
            className="imgCart"
            />
            <span className="contador">{ numeroCarrito() }</span>
        </div>
    )
}

export default Cart; 

// VERSION CON NUMERO DE CARRITO ACTUALIZABLE(NO requestAnimationFrame, SOLO SUMA)
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Cart = ({ cartImg }) => {

//     const { numeroCarrito } = useContext(CartContext)
//     return (
//         <div>
//             <img src={cartImg} 
//             alt=" Img Carrito" 
//             className="imgCart"
//             />
//             <span className="contador">{ numeroCarrito() }</span>
//         </div>
//     )
// }

// export default Cart; 