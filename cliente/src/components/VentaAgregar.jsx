import axios from "axios";
import "./css/VentaAgregar.css";

function VentaAgregar() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const cliente = event.target.elements.cliente.value;
    const servicio = event.target.elements.servicio.value;
    const pieza = event.target.elements.piezas.value;
    const recibido = event.target.elements.recibido.value;
    const entrega = event.target.elements.entrega.value;
    const telefono = event.target.elements.telefono.value;
    const precio = event.target.elements.precio.value;

    const nuevaVenta = {
      cliente,
      servicio,
      pieza,
      recibido,
      entrega,
      telefono,
      precio,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.6:3000/api/ventas",
        nuevaVenta
      );

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al hacer POST a la API:", error);
    }
  };

  return (
    <>
      <section className="container">
        <article className="card">
          <article className="card-header art-encabezado">
            <h4>Agregar venta</h4>
            <button className="bi bi-x-lg text-danger btn-salir"></button>
          </article>
          <article className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <span>Cliente</span>
                <input className="form-control" type="text" name="cliente" />
              </div>
              <div className="mb-3">
                <span>Servicio</span>
                <input className="form-control" type="text" name="servicio" />
              </div>
              <div className="mb-3">
                <span>Piezas</span>
                <input className="form-control" type="number" name="piezas" />
              </div>
              <div className="mb-3">
                <span>Recibido</span>
                <input className="form-control" type="date" name="recibido" />
              </div>
              <div className="mb-3">
                <span>Entrega</span>
                <input className="form-control" type="date" name="entrega" />
              </div>
              <div className="mb-3">
                <span>Telefono</span>
                <input className="form-control" type="text" name="telefono" />
              </div>
              <div className="mb-3">
                <span>Precio</span>
                <input className="form-control" type="text" name="precio" />
              </div>
              <div className="div-guardar">
                <button type="submit" className="btn btn-success">
                  Agregar e imprimir
                </button>
              </div>
            </form>
          </article>
        </article>
      </section>
    </>
  );
}

export default VentaAgregar;
