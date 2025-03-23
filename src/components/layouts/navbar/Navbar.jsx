import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="title">
      <h2>Servicio de Computación</h2>
      <ul>
        <li>Inicio </li>
        <li>Componentes Informáticos</li>
        <li>Reparación de PC</li>
      </ul>
      <CartWidget />
    </nav>
  );
};