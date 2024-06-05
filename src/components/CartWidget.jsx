const Cart = ({ cartImg }) => {

    return (
        <div>
            <img src={cartImg} 
            alt=" Img Carrito" 
            className="imgCart"
            />
            <span className="contador">0</span>
        </div>
    )
}

export default Cart; 