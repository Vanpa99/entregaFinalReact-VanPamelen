import { Link } from "react-router-dom";
import Cart from "./CartWidget";
import imgCart from "../assets/imgCart.svg"
// import logo from "../assets/logo.jpg"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'}
                    className="navbar-brand">
                    <img
                        src=""
                        alt="img logo"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'}
                                className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to={'/productos'}>
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contacto'}
                                className="nav-link">
                                Contactate
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to={'/carrito'}
                                className="nav-link">
                                <Cart cartImg={imgCart} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
