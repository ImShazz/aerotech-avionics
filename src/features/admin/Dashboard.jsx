import { Link } from 'react-router';

function Dashboard() {
  return (
    <section className="container py-5">
      <h1>Panel de Administración</h1>

      <p className="text-secondary">
        Sistema interno de gestión de AeroTech Avionics.
      </p>

      <div className="row g-4 mt-3">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5">Gestión de Clientes</h2>

              <p>
                Administra las empresas clientes registradas.
              </p>

              <Link to="/clientes" className="btn btn-primary">
                Ver clientes
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5">Gestión de Proyectos</h2>

              <p>
                Consulta y administra proyectos de aviónica.
              </p>

              <button className="btn btn-secondary" disabled>
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;