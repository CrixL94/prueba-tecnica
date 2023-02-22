import React from "react";

const Producto = () => {
  return (
    <div className="bg-light">
    <div className="container m-5 mx-auto p-5 ">
      <h2 className="text-center">Crear Producto</h2>
      <form>
        <div className="form-outline mb-2 col-6 mx-auto">
          <label htmlFor="producto" className="form-label">
            Nombre del producto
          </label>
          <input type="text" id="producto" className="form-control" required />
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input type="number" id="precio" className="form-control" required />
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <label htmlFor="Textarea1" className="form-label">
            Descripcion
          </label>
          <textarea className="form-control" id="Textarea1" rows="3"></textarea>
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <label htmlFor="medida" className="form-label">
            Unidad de medida
          </label>
          <input type="text" id="medida" className="form-control" required />
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <label htmlFor="cantidad" className="form-label">
            Cantidad en Stock
          </label>
          <input type="number" id="cantidad" className="form-control" required />
        </div>

        <div className="form-outline mb-3 col-6 mx-auto">
          <label htmlFor="formFile" className="form-label">
            Seleccione imagen
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>

        <div className="form-outline mb-2 col-6 mx-auto">
          <select className="form-select" aria-label="Default select example">
            <option selected>Estado del producto</option>
            <option defaultValue="activo">Activo</option>
            <option defaultValue="inactivo">Inactivo</option>
          </select>
        </div>

        <div className="d-grid col-4 mx-auto">
          <button className="btn btn-primary" type="submit">
            Crear Producto
          </button>
        </div>
      </form>
    </div>

    </div>
  );
};

export default Producto;
