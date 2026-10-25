import { useState } from 'react';
import './Clientes.css';
const clientesIniciales = [
  {
    id: 1,
    empresa: 'AeroSur Ingeniería',
    contacto: 'Carlos Pérez',
    correo: 'contacto@ejemplo.cl',
    estado: 'Activo',
  },
  {
    id: 2,
    empresa: 'Andes Aerospace',
    contacto: 'María González',
    correo: 'andes@ejemplo.cl',
    estado: 'Inactivo',
  },
];
function Clientes() {
  const [busqueda, setBusqueda] = useState('');

  const clientesFiltrados = clientesIniciales.filter((cliente) =>
    cliente.empresa.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="container py-5 clientes-page">
      <h1>Gestión de Clientes</h1>

      <p className="text-secondary">
        Administración de empresas clientes de AeroTech Avionics.
      </p>

      <div className="card shadow-sm clientes-card">
        <div className="card-body">
          <h2 className="h5">Clientes registrados</h2>
          <div className="mb-3">
  <label htmlFor="buscar-cliente" className="form-label">
    Buscar empresa
  </label>

  <input
    type="text"
    id="buscar-cliente"
    className="form-control"
    placeholder="Escribe el nombre de una empresa..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
</div>

          <div className="table-responsive">
  <table className="table table-hover align-middle">
    <thead>
      <tr>
        <th>Empresa</th>
        <th>Contacto</th>
        <th>Correo</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
  {clientesFiltrados.map((cliente) => (
    <tr key={cliente.id}>
      <td>{cliente.empresa}</td>
      <td>{cliente.contacto}</td>
      <td>{cliente.correo}</td>
      <td>
        <span
          className={`badge ${
            cliente.estado === 'Activo'
              ? 'bg-success'
              : 'bg-secondary'
          }`}
        >
          {cliente.estado}
        </span>
      </td>
    </tr>
  ))}
</tbody>
  </table>
</div>
        </div>
      </div>
    </section>
  );
}

export default Clientes;