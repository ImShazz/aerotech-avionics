
import { useEffect, useState } from 'react';

const proyectosIniciales = [
  {
    id: 1,
    nombre: 'Modernización de aviónica',
    cliente: 'AeroSur Ingeniería',
    estado: 'En ejecución',
  },
];

function Proyectos() {
  const [proyectos, setProyectos] = useState(() => {
  const proyectosGuardados = localStorage.getItem('aerotech-proyectos');

  if (proyectosGuardados) {
    try {
      return JSON.parse(proyectosGuardados);
    } catch {
      return proyectosIniciales;
    }
  }

  return proyectosIniciales;
});
  
useEffect(() => {
  localStorage.setItem('aerotech-proyectos', JSON.stringify(proyectos));
}, [proyectos]);

const [mostrarFormulario, setMostrarFormulario] = useState(false);

const [nuevoProyecto, setNuevoProyecto] = useState({
  nombre: '',
  cliente: '',
  estado: 'Planificación',
});

const [proyectoEditando, setProyectoEditando] = useState(null);

const guardarProyecto = () => {
  if (!nuevoProyecto.nombre.trim() || !nuevoProyecto.cliente.trim()) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (proyectoEditando !== null) {
  setProyectos((proyectosActuales) =>
    proyectosActuales.map((proyecto) =>
      proyecto.id === proyectoEditando
        ? {
            ...proyecto,
            nombre: nuevoProyecto.nombre.trim(),
            cliente: nuevoProyecto.cliente.trim(),
            estado: nuevoProyecto.estado,
          }
        : proyecto
    )
  );
} else {
  const proyectoAgregado = {
    id: Date.now(),
    nombre: nuevoProyecto.nombre.trim(),
    cliente: nuevoProyecto.cliente.trim(),
    estado: nuevoProyecto.estado,
  };

  setProyectos((proyectosActuales) => [
    ...proyectosActuales,
    proyectoAgregado,
  ]);
}

  
  setNuevoProyecto({
    nombre: '',
    cliente: '',
    estado: 'Planificación',
  });

  setProyectoEditando(null);
  setMostrarFormulario(false);
};


  return (
    <section className="container py-5">
      <h1>Gestión de Proyectos</h1>

      <p className="text-secondary">
        Administración de proyectos aeronáuticos de AeroTech Avionics.
      </p>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5">Proyectos registrados</h2>

          
<button
  type="button"
  className="btn btn-primary mb-3"
  onClick={() => setMostrarFormulario(!mostrarFormulario)}
>
  {mostrarFormulario ? 'Cancelar' : '+ Nuevo proyecto'}
</button>


{mostrarFormulario && (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h3 className="h6 mb-3">Registrar nuevo proyecto</h3>

      <div className="mb-3">
        <label htmlFor="nuevo-proyecto" className="form-label">
          Nombre del proyecto
        </label>
        <input
          type="text"
          id="nuevo-proyecto"
          className="form-control"
          placeholder="Ej: Modernización de sistemas de navegación"
          value={nuevoProyecto.nombre}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              nombre: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nuevo-cliente" className="form-label">
          Empresa cliente
        </label>
        <input
          type="text"
          id="nuevo-cliente"
          className="form-control"
          placeholder="Ej: AeroSur Ingeniería"
          value={nuevoProyecto.cliente}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              cliente: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nuevo-estado" className="form-label">
          Estado del proyecto
        </label>
        <select
          id="nuevo-estado"
          className="form-select"
          value={nuevoProyecto.estado}
          onChange={(e) =>
            setNuevoProyecto({
              ...nuevoProyecto,
              estado: e.target.value,
            })
          }
        >
          <option value="Planificación">Planificación</option>
          <option value="En ejecución">En ejecución</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <button
  type="button"
  className="btn btn-success"
  onClick={guardarProyecto}
>
  Guardar proyecto
</button>
    </div>
  </div>
)}



          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Proyecto</th>
                  <th>Cliente</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              
<tbody>
  {proyectos.map((proyecto) => (
    <tr key={proyecto.id}>
      <td>{proyecto.nombre}</td>
      <td>{proyecto.cliente}</td>
      <td>
        <span className="badge bg-success">
          {proyecto.estado}
        </span>
      </td>
      <td>
       <button
  type="button"
  className="btn btn-warning btn-sm"
  onClick={() => {
    setProyectoEditando(proyecto.id);

    setNuevoProyecto({
      nombre: proyecto.nombre,
      cliente: proyecto.cliente,
      estado: proyecto.estado,
    });

    setMostrarFormulario(true);
  }}
>
  Editar
</button>
<button
  type="button"
  className="btn btn-danger btn-sm ms-2"
  onClick={() => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar el proyecto "${proyecto.nombre}"?`
    );

    if (confirmar) {
      setProyectos((proyectosActuales) =>
        proyectosActuales.filter(
          (proyectoActual) => proyectoActual.id !== proyecto.id
        )
      );
    }
  }}
>
  Eliminar
</button>
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

export default Proyectos;
