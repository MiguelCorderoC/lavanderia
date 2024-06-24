import { Link } from "react-router-dom";
import "./css/HomeView.css";

function HomeView() {
  return (
    <>
      <main className="container mt-5">
        <section className="card">
          <article className="card-header art-encabezado">
            <h4>Ventas</h4>
            <article className="art-opciones">
              <input className="form-control" type="search" />
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
                  <tr>
                    <td>Miguel</td>
                    <td>Planchado</td>
                    <td>10pzs</td>
                    <td>23/06/2024</td>
                    <td>25/06/2024</td>
                    <td>6673214454</td>
                    <td>$70</td>
                    <td className="th-acciones">
                      <Link to="#" className="btn btn-primary">
                        Editar
                      </Link>
                      <Link to="#" className="btn btn-danger">
                        Eliminar
                      </Link>
                    </td>
                  </tr>
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
