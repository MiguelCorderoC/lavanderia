import "./css/MensajeConfirmacion.css";

function MensajeConfirmacion({ accion, fondo, onAceptar, onCancelar }) {
  return (
    <>
      <section className="sect-contenedor">
        <article className={`alert alert-${fondo} art-mensaje`}>
          <h4>¿Seguro que desea {accion} al cliente?</h4>
          <p></p>
          <button className="btn btn-primary" onClick={onAceptar}>
            Aceptar
          </button>
          <button className="btn btn-danger" onClick={onCancelar}>
            Cancelar
          </button>
        </article>
      </section>
    </>
  );
}

MensajeConfirmacion.defaultProps = {
  accion: "realizar esta acción",
  fondo: "success",
};

export default MensajeConfirmacion;
