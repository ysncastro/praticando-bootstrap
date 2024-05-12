import "./FacilidadesSection.css";

function FacilidadesSection() {
  return (
    <section class="pb-5 bg-black py-4">
      <h2 class="text-center text-light">
        Conheça todas as nossas facilidades
      </h2>

      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3">
        <div class="divs-facilidades d-flex align-items-center">
          <div>
            <i class="bi bi-x-diamond fs-1 verde-limao"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 verde-limao">PAGUE PELO PIX</div>
            <div class="texto-menor ms-3 text-light">
              Ganhe 5% OFF em pagamentos via PIX
            </div>
          </div>
        </div>

        <div class="divs-facilidades d-flex align-items-center">
          <div>
            <i class="bi bi-arrow-repeat fs-1 verde-limao"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 verde-limao">TROCA GRÁTIS</div>
            <div class="texto-menor ms-3 text-light">
              Fique livre para trocar em até 30 dias.
            </div>
          </div>
        </div>

        <div class="divs-facilidades d-flex align-items-center">
          <div>
            <i class="bi bi-flower1 fs-1 verde-limao"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 verde-limao">SUSTENTABILIDADE</div>
            <div class="texto-menor ms-3 text-light">
              Moda responsável, que respeita o meio ambiente.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilidadesSection;
