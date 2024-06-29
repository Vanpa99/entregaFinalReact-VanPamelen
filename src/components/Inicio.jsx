import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="body-home">
        <div className="card-home">
            <div class="card-content-home">
                <h2 className="card-title-home">
                    Descubre el Sabor de la Tradición
                </h2>
                <p className="card-description-home">
                    En <strong>Bakery</strong>, combinamos lo mejor de la panadería artesanal con la calidez de una cafetería de barrio. Nuestra pasión por los ingredientes frescos y las recetas tradicionales se refleja en cada bocado de nuestros panes y cada sorbo de nuestros cafés.
                </p>
                <p className="card-description">
                    Desde los crujientes croissants hasta el aroma irresistible del café recién molido, cada visita a <strong>Bakery</strong> es una experiencia única. Ya sea para un desayuno rápido, una reunión con amigos, o simplemente un momento para ti, nuestra cafetería y panadería es el lugar perfecto para disfrutar de esos pequeños placeres de la vida.
                </p>
                <p className="card-description">
                    Te invitamos a explorar nuestra variedad de productos, conocer nuestro proceso de elaboración y sentirte como en casa. ¡Ven y descubre por qué <strong>Bakery</strong> es el lugar favorito de nuestra comunidad!
                </p>
                <Link to={"/productos"} className="btn-home">
                    Ver Nuestro Menú
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Inicio; 