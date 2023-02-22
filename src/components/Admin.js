import React from "react";
import Formulario from "./Formulario";

const Admin = () => {
  return (
    <div>
        <h2 className="text-center m-3">Listado de productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Unidad de medida</th>
            <th scope="col">Cantidad en Stock</th>
            <th scope="col">Imagen</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-primary btn m-2">
        Crear Usuario
      </button>
      <button type="button" className="btn btn-primary btn">
        Crear Producto
      </button>
    </div>
  );
};

export default Admin;
