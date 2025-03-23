import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <main>
        <h1>Mi primera app</h1>
        <Navbar/>
        <ItemListContainer greeting="Hola como estas" />
        <Footer/>
      </main>
      
    </>
  );
}
export default App;

