import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Cards from "./Components/Cards/Cards";
import CardsProdutos from "./Components/CardsProdutos/CardsProdutos";
import FacilidadesSection from "./Components/FacilidadesSection/FacilidadesSection";
import FormNovidades from "./Components/FormNovidades/FormNovidades";
import Rodape from "./Components/Rodape/Rodape";

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
