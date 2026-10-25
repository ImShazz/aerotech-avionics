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
  const [clientes, setClientes] = useState(clientesIniciales);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoCliente, setNuevoCliente] = useState({
  empresa: '',
  contacto: '',
  correo: '',
});

  const clientesFiltrados = clientes.filter((cliente) =>
  cliente.empresa.toLowerCase().includes(busqueda.toLowerCase())
);
const guardarCliente = () => {
  if (
    !nuevoCliente.empresa.trim() ||
    !nuevoCliente.contacto.trim() ||
    !nuevoCliente.correo.trim()
  ) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const clienteAgregado = {
    id: Date.now(),
    empresa: nuevoCliente.empresa.trim(),
    contacto: nuevoCliente.contacto.trim(),
    correo: nuevoCliente.correo.trim(),
    estado: 'Activo',
  };

  setClientes((clientesActuales) => [
    ...clientesActuales,
    clienteAgregado,
  ]);

  setNuevoCliente({
    empresa: '',
    contacto: '',
    correo: '',
  });

  setMostrarFormulario(false);
};
  return (
    <section className="container py-5 clientes-page">
      <h1>Gestión de Clientes</h1>

      <p className="text-secondary">
        Administración de empresas clientes de AeroTech Avionics.
      </p>

      <div className="card shadow-sm clientes-card">
        <div className="card-body">
          <h2 className="h5">Clientes registrados</h2>
          <button
  type="button"
  className="btn btn-primary mb-3"
  onClick={() => setMostrarFormulario(!mostrarFormulario)}
>
  {mostrarFormulario ? 'Cancelar' : '+ Nuevo cliente'}
</button>
{mostrarFormulario && (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h3 className="h6 mb-3">Registrar nuevo cliente</h3>

      <div className="mb-3">
        <label htmlFor="nueva-empresa" className="form-label">
          Nombre de la empresa
        </label>
       <input
  type="text"
  id="nueva-empresa"
  className="form-control"
  placeholder="Ej: Cóndor Aerospace"
  value={nuevoCliente.empresa}
  onChange={(e) =>
    setNuevoCliente({
      ...nuevoCliente,
      empresa: e.target.value,
    })
  }
/>
      </div>

      <div className="mb-3">
        <label htmlFor="nuevo-contacto" className="form-label">
          Nombre del contacto
        </label>
        <input
  type="text"
  id="nuevo-contacto"
  className="form-control"
  placeholder="Ej: Juan Pérez"
  value={nuevoCliente.contacto}
  onChange={(e) =>
    setNuevoCliente({
      ...nuevoCliente,
      contacto: e.target.value,
    })
  }
/>
      </div>

      <div className="mb-3">
        <label htmlFor="nuevo-correo" className="form-label">
          Correo electrónico
        </label>
        <input
  type="email"
  id="nuevo-correo"
  className="form-control"
  placeholder="Ej: contacto@condor.cl"
  value={nuevoCliente.correo}
  onChange={(e) =>
    setNuevoCliente({
      ...nuevoCliente,
      correo: e.target.value,
    })
  }
/>
      </div>

      <button
  type="button"
  className="btn btn-success"
  onClick={guardarCliente}
>
  Guardar cliente
</button>
    </div>
  </div>
)}
          
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