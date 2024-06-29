import React from "react";

const ItemQuantitySelector = ( {cantidad, handleSumar, handleRestar, handleAgregar} ) => {

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <h2>{cantidad}</h2>
                <button onClick={handleSumar}>+</button>
            </div>
            <button 
                className="agregar-al-carrito"
                onClick={handleAgregar}>
                Agregar Al Carrito
            </button>
        </div>
    )
};

export default ItemQuantitySelector;
