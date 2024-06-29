import { useContext, useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito)

    const [cantidad, setCantidad] = useState(0);

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad >= 0 && setCantidad(cantidad + 1); 
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
                <ItemQuantitySelector
                    cantidad={cantidad}
                    handleRestar={handleRestar}
                    handleSumar={handleSumar}
                    handleAgregar={ () => 
                        { agregarAlCarrito( producto, cantidad )} 
                    }
                />
            </div>
        </div>
    )
};

export default ItemDetail;