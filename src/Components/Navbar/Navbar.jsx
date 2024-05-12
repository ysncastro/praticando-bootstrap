import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="m-0">
              {/* o d-block e o m-0 esta zerando a margin extra que vem com a imagem por padrão */}
              <img
                className="d-block"
                src="logo-meteora.png"
                alt="Logo da loja Meteora"
              />
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lojas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Novidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Promoção
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-0"
                type="search"
                placeholder="Digite um produto"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light rounded-0" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
