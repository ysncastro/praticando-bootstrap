import "./App.css";
// Bootstrap CSS
// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import CardsProdutos from "./CardsProdutos";
import FacilidadesSection from "./FacilidadesSection";
import FormNovidades from "./FormNovidades";
import Rodape from "./Rodape";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <h2 class="text-center my-3 my-xl-5">Busque por categoria:</h2>
      <Cards />
      <h2 class="container text-center my-3 my-xl-5">
        Produtos que estão bombando!
      </h2>
      <CardsProdutos />
      <FacilidadesSection />
      <FormNovidades />
      <Rodape />
    </div>
  );
}

export default App;
