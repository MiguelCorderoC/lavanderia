import MensajeConfirmacion from "../components/MensajeConfirmacion";
import axios from "axios";
import "./css/VentaEditarView.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VentaEditarView() {
  const [venta, setVenta] = useState({
    id: "",
    cliente: "",
    pieza: "",
    servicio: "",
    telefono: "",
    recibido: "",
    entrega: "",
    precio: "",
  });
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const { id } = useParams();

  const obtenerVenta = () => {
    axios
      .get(`http://192.168.1.8:3000/api/ventas/${id}`)
      .then((res) => {
        setVenta(res.data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la venta:", error);
      });
  };

  const actualizarVenta = () => {
    axios
      .put(`http://192.168.1.8:3000/api/ventas/${venta.id}`, venta)
      .then((res) => {
        console.log("Venta actualizada exitosamente:", res.data);
      })
      .catch((error) => {
        console.error("Error al actualizar la venta:", error);
      });
  };

  useEffect(() => {
    obtenerVenta();
  }, [id]);

  return (
    <>
      {mostrarMensaje && (
        <MensajeConfirmacion
          accion="editar"
          fondo="primary"
          onAceptar={() => {
            actualizarVenta;
          }}
          onCancelar={() => setMostrarMensaje(false)}
        />
      )}
      <section className="container">
        <article className="card">
          <article className="card-header">
            <h4>Editar venta</h4>
          </article>
          <article className="card-body">
            <div className="mb-3">
              <span>Folio</span>
              <input
                disabled={true}
                className="form-control"
                type="text"
                name="id"
                value={venta.id}
                onChange={(e) => setVenta({ ...venta, id: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <span>Cliente</span>
              <input
                className="form-control"
                type="text"
                name="cliente"
                value={venta.cliente}
                onChange={(e) =>
                  setVenta({ ...venta, cliente: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <span>Piezas</span>
              <input
                className="form-control"
                type="text"
                name="pieza"
                value={venta.pieza}
                onChange={(e) => setVenta({ ...venta, pieza: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <span>Servicio</span>
              <input
                className="form-control"
                type="text"
                name="servicio"
                value={venta.servicio}
                onChange={(e) =>
                  setVenta({ ...venta, servicio: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <span>Teléfono</span>
              <input
                className="form-control"
                type="text"
                name="telefono"
                value={venta.telefono}
                onChange={(e) =>
                  setVenta({ ...venta, telefono: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <span>Recibido</span>
              <input
                className="form-control"
                type="text"
                name="recibido"
                value={venta.recibido}
                onChange={(e) =>
                  setVenta({ ...venta, recibido: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <span>Entrega</span>
              <input
                className="form-control"
                type="text"
                name="entrega"
                value={venta.entrega}
                onChange={(e) =>
                  setVenta({ ...venta, entrega: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <span>Precio</span>
              <input
                className="form-control"
                type="text"
                name="precio"
                value={venta.precio}
                onChange={(e) => setVenta({ ...venta, precio: e.target.value })}
              />
            </div>
            <article className="art-actualizar">
              <button
                className="btn btn-primary"
                onClick={() => setMostrarMensaje(true)}
              >
                Actualizar
              </button>
            </article>
          </article>
        </article>
      </section>
    </>
  );
}

export default VentaEditarView;
