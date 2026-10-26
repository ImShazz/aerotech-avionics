
import { Link } from 'react-router'
import { Building2, FolderKanban, ArrowUpRight } from 'lucide-react'

import './Dashboard.css'

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="container dashboard-contenido">

        <div className="dashboard-encabezado">
          <span className="dashboard-etiqueta">
            AEROTECH AVIONICS / SISTEMA INTERNO
          </span>

          <h1>Panel de Administración</h1>

          <p>
            Gestión centralizada de operaciones y proyectos aeronáuticos.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <article className="dashboard-tarjeta">
              <div className="dashboard-icono">
                <Building2 size={28} strokeWidth={1.6} />
              </div>

              <h2>Gestión de Clientes</h2>

              <p>
                Administra las empresas clientes registradas
                y su información corporativa.
              </p>

              <Link to="/clientes" className="dashboard-enlace">
                Ver clientes
                <ArrowUpRight size={18} />
              </Link>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article className="dashboard-tarjeta">
              <div className="dashboard-icono">
                <FolderKanban size={28} strokeWidth={1.6} />
              </div>

              <h2>Gestión de Proyectos</h2>

              <p>
                Consulta y administra los proyectos
                de ingeniería y aviónica.
              </p>

              <Link
                to="/admin/proyectos"
                className="dashboard-enlace"
              >
                Ver proyectos
                <ArrowUpRight size={18} />
              </Link>
            </article>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Dashboard
