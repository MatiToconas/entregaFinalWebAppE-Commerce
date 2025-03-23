import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="title">
      <h2>Servicio de Computación</h2>

      <ul>
      <li><Link to="/">Mi tienda</Link></li>
      <li><Link to="/category/portatil">Portátil</Link></li>
      <li><Link to="/category/periferico">Periféricos</Link></li>
      </ul>

      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        <CartWidget />
      </Link>
    </nav>
  );
};