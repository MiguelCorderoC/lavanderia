import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/HomeView.css";

function HomeView() {
  const [ventas, setVentas] = useState([]);
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);
  const [ventaAEliminar, setVentaAEliminar] = useState(null);

  const eliminarVenta = async (id) => {
    try {
      await axios.delete(`http://192.168.1.6:3000/api/ventas/${id}`);
      setVentas(ventas.filter((venta) => venta.id !== id));
      setConfirmacionVisible(false);
      setVentaAEliminar(null);
    } catch (error) {
      console.error("Error al eliminar la venta:", error);
    }
  };

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await axios.get("http://192.168.1.6:3000/api/ventas");
        setVentas(response.data);
      } catch (error) {
        console.error("Error al establecer conexión con la API:", error);
      }
    };

    fetchVentas();
  }, []);

  const mostrarConfirmacion = (id) => {
    const ventaSeleccionada = ventas.find((venta) => venta.id === id);

    setVentaAEliminar(ventaSeleccionada);
    setConfirmacionVisible(true);
  };

  const cancelarEliminacion = () => {
    setConfirmacionVisible(false);
    setVentaAEliminar(null);
  };

  return (
    <>
      <main className="container mt-5">
        <div
          className={`alert alert-danger div-mensaje-confirmacion ${
            confirmacionVisible ? "visible" : "oculto"
          }`}
        >
          {ventaAEliminar && (
            <>
              <h4>
                ¿Seguro que deseas eliminar la venta del cliente <br />
                {ventaAEliminar.cliente}?
              </h4>
              <p></p>
            </>
          )}
          <div className="div-confirmar-eliminacion">
            <button
              className="btn btn-danger"
              onClick={() => eliminarVenta(ventaAEliminar.id)}
            >
              Eliminar
            </button>
            <button className="btn btn-primary" onClick={cancelarEliminacion}>
              Cancelar
            </button>
          </div>
        </div>
        <section className="card">
          <article className="card-header art-encabezado">
            <h4>Ventas</h4>
            <article className="art-opciones">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar por nombre"
              />
              <Link to="/ventas/agregar" className="btn btn-success">
                Agregar
              </Link>
            </article>
          </article>
          <article className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Folio</th>
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
                      <td>{venta.id}</td>
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
                        <button
                          className="btn btn-danger"
                          onClick={() => mostrarConfirmacion(venta.id)}
                        >
                          Eliminar
                        </button>
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
