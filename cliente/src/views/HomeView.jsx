import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/HomeView.css";

function HomeView() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await axios.get("http://192.168.1.6:3000/api/ventas");
        setVentas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVentas();
  }, []);

  return (
    <>
      <main className="container mt-5">
        <section className="card">
          <article className="card-header art-encabezado">
            <h4>Ventas</h4>
            <article className="art-opciones">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar por nombre"
              />
              <button className="btn btn-success">Agregar</button>
            </article>
          </article>
          <article className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Servicio</th>
                    <th>Piezas</th>
                    <th>Recibido</th>
                    <th>Entrega</th>
                    <th>Telefono</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map((venta) => (
                    <tr key={venta.id}>
                      <td>{venta.cliente}</td>
                      <td>{venta.servicio}</td>
                      <td>{venta.pieza} pzs</td>
                      <td>{venta.recibido}</td>
                      <td>{venta.entrega}</td>
                      <td>{venta.telefono}</td>
                      <td>${venta.precio}</td>
                      <td className="th-acciones">
                        <Link to="#" className="btn btn-primary">
                          Editar
                        </Link>
                        <Link to="#" className="btn btn-danger">
                          Eliminar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default HomeView;
