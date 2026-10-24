import './Clientes.css';
function Clientes() {
  return (
    <section className="container py-5 clientes-page">
      <h1>Gestión de Clientes</h1>

      <p className="text-secondary">
        Administración de empresas clientes de AeroTech Avionics.
      </p>

      <div className="card shadow-sm clientes-card">
        <div className="card-body">
          <h2 className="h5">Clientes registrados</h2>

          <p className="mb-0">
            Aquí mostraremos el listado de clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clientes;