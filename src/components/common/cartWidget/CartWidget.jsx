import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <div>
      <FaShoppingCart size={24} color="black"/>
      <h3 style={{ color: "black" }}>{total}</h3>
    </div>
  );
};