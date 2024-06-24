import axios from "axios";
import { useState } from "react";
import "./css/VentaAgregarView.css";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

function VentaAgregarView() {
  const [mensaje, setMensaje] = useState(0);

  const guardarVenta = async (event) => {
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
      setMensaje(1);

      // Generar PDF después de guardar la venta
      generarPDF(nuevaVenta);
    } catch (error) {
      console.error("Error al hacer POST a la API:", error);
      setMensaje(2);
    }
    setTimeout(() => {
      setMensaje(0);
    }, 5000);
  };

  const generarPDF = (venta) => {
    const doc = new jsPDF();

    doc.text("Datos de la venta:", 10, 10);
    doc.text(`Cliente: ${venta.cliente}`, 10, 20);
    doc.text(`Servicio: ${venta.servicio}`, 10, 30);
    doc.text(`Piezas: ${venta.pieza}`, 10, 40);
    doc.text(`Recibido: ${venta.recibido}`, 10, 50);
    doc.text(`Entrega: ${venta.entrega}`, 10, 60);
    doc.text(`Teléfono: ${venta.telefono}`, 10, 70);
    doc.text(`Precio: ${venta.precio}`, 10, 80);

    doc.save("venta.pdf");
  };

  return (
    <>
      <section className="container mt-5">
        {mensaje === 1 && (
          <div className="mb-2 alert alert-success">
            <h4 className="h4-mensaje-exito">Venta agregada con éxito</h4>
          </div>
        )}
        {mensaje === 2 && (
          <div className="mb-2 alert alert-danger">
            <h4 className="h4-mensaje-error">Error al agregar la venta</h4>
          </div>
        )}
        <article className="card">
          <article className="card-header art-encabezado">
            <h4>Agregar venta</h4>
            <Link to="/" className="bi bi-x-lg text-danger btn-salir"></Link>
          </article>
          <article className="card-body">
            <form onSubmit={guardarVenta}>
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

export default VentaAgregarView;
