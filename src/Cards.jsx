import "./Cards.css";

function Cards() {
  return (
    // mx-auto centraliza automaticamente o componente. o g-4 dá um gap entre os cards
    <div class="container row mx-auto g-4">
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-camiseta.png"
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-camiseta.png"
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-camiseta.png"
            alt="Camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Camisetas</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-bolsas.png"
            alt="Bolsa feminina de couro na cor marrom, com cortes quadrados, e alça dourada em formato de corrente com detalhe verde, em fundo verde limão."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-bolsas.png"
            alt="Bolsa feminina de couro na cor marrom, com cortes quadrados, e alça dourada em formato de corrente com detalhe verde, em fundo verde limão."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-bolsa.png"
            alt="Bolsa feminina de couro na cor marrom, com cortes quadrados, e alça dourada em formato de corrente com detalhe verde, em fundo verde limão."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Bolsas</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-calcados.png"
            alt="Par de tênis unissex com cor predominante branca e traços na cores laranja, azul, verde e cadarço vermelho, em fundo verde limão."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-calcados.png"
            alt="Par de tênis unissex com cor predominante branca e traços na cores laranja, azul, verde e cadarço vermelho, em fundo verde limão."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-calcados.png"
            alt="Par de tênis unissex com cor predominante branca e traços na cores laranja, azul, verde e cadarço vermelho, em fundo verde limão."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Calçados</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-calcas.png"
            alt="Quatro calças jeans dobradas e organizadas uma acima da outra, em fundo verde limão."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-calcas.png"
            alt="Quatro calças jeans dobradas e organizadas uma acima da outra, em fundo verde limão."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-calcas.png"
            alt="Quatro calças jeans dobradas e organizadas uma acima da outra, em fundo verde limão."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Calças</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-casacos.png"
            alt="Casaco masculino na cor marrom em fundo verde limão."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-casacos.png"
            alt="Casaco masculino na cor marrom em fundo verde limão."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-casacos.png"
            alt="Casaco masculino na cor marrom em fundo verde limão."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Casacos</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            class="d-md-none d-block"
            src="./Mobile/categorias/categoria-oculos.png"
            alt="Óculos de Sol com lentes arredondadas e armação dourada, em fundo verde limão."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src="./Tablet/categorias/categoria-oculos.png"
            alt="Óculos de Sol com lentes arredondadas e armação dourada, em fundo verde limão."
          />
          <img
            class="d-none d-xl-block"
            src="./Desktop/categorias/categoria-oculos.png"
            alt="Óculos de Sol com lentes arredondadas e armação dourada, em fundo verde limão."
          />
          <div class="card-header bg-black text-bg-dark">
            <p class="text-center card-text">Óculos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
