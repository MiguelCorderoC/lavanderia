function MensajeExito({ accion }) {
  return (
    <>
      <section className="sect-contenedor">
        <article className="alert alert-success">
          <h4>{accion} realizada con exito!</h4>
        </article>
      </section>
    </>
  );
}

export default MensajeExito;
