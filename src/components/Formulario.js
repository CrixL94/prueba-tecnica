
const Formulario = () => {
  return (
    <div className="bg-light">
      <div className="container m-5 mx-auto p-5 ">
        <h2 className="text-center">Crear Usuario</h2>
        <form>
          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="nombre" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="correo" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              id="correo"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="celular" className="form-label">
              Numero Celular
            </label>
            <input
              type="tel"
              id="celular"
              className="form-control"
              required
            />
          </div>
          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="celular" className="form-label">
              Genero
            </label>
            <input
              type="tel"
              id="genero"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-2 col-6 mx-auto">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              class="form-control"
              required
            />
          </div>

          <div className="d-grid col-4 mx-auto">
            <button className="btn btn-primary" type="submit">
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
