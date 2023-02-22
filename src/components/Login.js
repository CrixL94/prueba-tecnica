const Login = () => {
  return (
    <div className="container m-5 mx-auto p-5 ">
      <h2 className="text-center">Login</h2>
      <form>
        <div className="form-outline mb-2 col-6 mx-auto">
          <input
            type="email"
            id="usuario"
            className="form-control"
            placeholder="Usuario"
            required
          />
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <input
            type="password"
            id="contraseña"
            className="form-control"
            placeholder="Contraseña"
            required
          />
        </div>

        <div className="d-grid col-4 mx-auto">
          <button className="btn btn-primary" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
