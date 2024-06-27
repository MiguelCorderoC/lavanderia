function MensajeError({ accion }) {
  return (
    <>
      <section className="sect-contenedor">
        <article className="alert alert-danger">
          <h1>Error al {accion} los datos</h1>
        </article>
      </section>
    </>
  );
}

export default MensajeError;
