import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = ({ greeting }) => {
  let nombreDeUsuario = "pepe";
  const saludar = () => {
    console.log(nombreDeUsuario);
  };

  return (
    <section>
      <h2> {greeting} </h2>

      {console.log("Hola")}

      <h2>Mis productos</h2>

      <ProductCard title="Notebook" price="precio 100000" />
      <ProductCard title="Teclado" price="precio 15000" />
      <ProductCard title="Mouse" price="precio 20000" />
    </section>
  );
};