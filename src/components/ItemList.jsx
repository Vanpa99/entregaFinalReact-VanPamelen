import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";


const ItemList = ({ productos }) => {


    return (
        <section className="contenedor-card">
            {productos.map((element) => (
                <div key={element.id} className="card-marg">
                    <div className="card">
                        <Link to={`/item/${element.id}`}>
                            <img className="img-prod" src={element.imagen} alt={element.titulo} />
                        </Link>
                        <div className="cuerpo-card">
                            <Link to={`/item/${element.id}`}>
                                <h3 className="titulo-card">{element.titulo}</h3>
                            </Link>
                            <h6 className="precio-card">Precio: ${element.precio}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ItemList;