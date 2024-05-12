import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="w-100 img-fluid d-md-none"
            src="./Mobile/banner1-mobile.png"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás."
          />
          <img
            class="w-100 img-fluid d-none d-md-block d-xl-none"
            src="./Tablet/banner1-tablet.png"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás."
          />
          <img
            class="w-100 img-fluid d-none d-xl-block"
            src="./Desktop/banner1-desktop.png"
            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás."
          />
        </div>
        <div class="carousel-item position-relative">
          <img
            class="w-100 img-fluid d-md-none"
            src="./Mobile/banner2-mobile.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <img
            class="w-100 img-fluid d-none d-md-block d-xl-none"
            src="./Tablet/banner2-tablet.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <img
            class="w-100 img-fluid d-none d-xl-block"
            src="./Desktop/banner2-desktop.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <div class="carousel-caption position-absolute posicao">
            <h5 class="fs-1">COLEÇÃO ATEMPORAL</h5>
            <p class="fs-4">Estilo e qualidade para durar.</p>
          </div>
        </div>
        <div class="carousel-item position-relative">
          <img
            class="w-100 img-fluid d-md-none"
            src="./Mobile/banner3-mobile.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <img
            class="w-100 img-fluid d-none d-md-block d-xl-none"
            src="./Tablet/banner3-tablet.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <img
            class="w-100 img-fluid d-none d-xl-block"
            src="./Desktop/banner3-desktop.png"
            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa."
          />
          <div class="carousel-caption position-absolute posicao">
            <h5 class="fs-1">COLEÇÃO ATEMPORAL</h5>
            <p class="fs-4">Alto impacto visual, baixo impacto ambiental!</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}

export default Carousel;
