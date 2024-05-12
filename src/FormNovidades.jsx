import "./FormNovidades.css";

function FormNovidades() {
  return (
    <form className="container border border-secondary my-3 my-xl-5 p-3 text-center">
      <h5>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </h5>
      <div className="input-group my-3">
        <input
          className="form-control border-secondary rounded-0"
          type="email"
          placeholder="Digite seu e-mail"
          aria-label="Digite seu e-mail"
          aria-describedby="button-addon2"
        />
        <button
          type="button"
          id="button-addon2"
          className="botao-lilas text-light border-0"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormNovidades;
