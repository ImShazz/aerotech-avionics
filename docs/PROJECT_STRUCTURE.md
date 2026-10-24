
# AeroTech Avionics — Estructura del proyecto

## 1. Objetivo

Mantener una arquitectura organizada, reutilizable y
fácil de comprender para los tres desarrolladores.

AeroTech Avionics es una aplicación React con Vite
que combina un portal corporativo público y un
sistema administrativo.

## 2. Tecnologías

- React
- Vite
- JavaScript / JSX
- Bootstrap 5
- CSS personalizado
- Lucide React
- Git y GitHub

## 3. Estructura objetivo

aerotech-avionics/
├── docs/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── features/
│   │   ├── tecnologias/
│   │   ├── componentes/
│   │   ├── clientes/
│   │   ├── solicitudes/
│   │   └── proyectos/
│   ├── data/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── README.md

Esta estructura es una propuesta de organización.
Las carpetas se crearán cuando sean necesarias.

## 4. Responsabilidades de las carpetas

### components/

Componentes compartidos entre varias páginas.

Ejemplos:
- Navbar
- Footer
- Hero
- ServiciosDestacados

Los componentes públicos existentes permanecerán
en su ubicación actual hasta que se acuerde una
reorganización.

### layouts/

Estructuras comunes para diferentes partes
de la aplicación.

Ejemplos:
- PublicLayout: Navbar, contenido y Footer.
- AdminLayout: navegación y contenido administrativo.

### pages/

Páginas generales del portal.

Ejemplos:
- Home
- Nosotros
- Contacto

### features/

Funcionalidades agrupadas por módulo de negocio.

Cada módulo puede contener sus propios componentes,
estilos, datos y funciones.

Módulos:
- tecnologias
- componentes
- clientes
- solicitudes
- proyectos

### data/

Datos de prueba y conjuntos de información ficticia
compartidos por la aplicación.

### services/

Funciones de acceso a datos y futuras conexiones
con servicios o API.

No se implementará una arquitectura de backend
sin acuerdo previo del equipo.

## 5. Responsabilidades del equipo

### Moisés Pontigo

- Portal corporativo.
- Diseño general.
- Navbar y Footer.
- Home y páginas públicas generales.
- Layouts e integración global.

Rama:
feature/portal-corporativo

### Matías Muñoz

- Catálogo público de tecnologías.
- Gestión de componentes de aviónica.

Carpetas:
src/features/tecnologias/
src/features/componentes/

Rama:
feature/catalogo

### Vicente Bahamondes

- Gestión de clientes.
- Gestión de solicitudes.
- Gestión de proyectos.

Carpetas:
src/features/clientes/
src/features/solicitudes/
src/features/proyectos/

Rama:
feature/proyectos

## 6. Reglas de desarrollo

1. Usar componentes React reutilizables.
2. Usar PascalCase para componentes y archivos JSX.
3. Mantener los estilos específicos junto al módulo.
4. Respetar docs/DESIGN_SYSTEM.md.
5. No duplicar componentes compartidos.
6. No modificar módulos de otros integrantes
   sin coordinación.
7. Evitar cambios simultáneos en App.jsx,
   Navbar.jsx, index.css y configuración global.
8. Coordinar previamente las nuevas dependencias.
9. Utilizar Bootstrap para el diseño responsivo.
10. Documentar las decisiones de arquitectura.

## 7. Integración entre módulos

Los módulos deben poder desarrollarse de forma
independiente.

La relación entre proyectos, clientes, solicitudes
y componentes se definirá conjuntamente antes de
implementar datos compartidos.

No se deben crear relaciones incompatibles entre
modelos de distintos integrantes.

## 8. Git y colaboración

- main: rama principal integrada.
- feature/portal-corporativo: Moisés.
- feature/catalogo: Matías.
- feature/proyectos: Vicente.

Cada integrante trabaja en su propia rama.

Los cambios se integran mediante Pull Requests.

Los commits deben describir funcionalidades reales.

Antes de integrar cambios:
- Revisar los archivos modificados.
- Comprobar que la aplicación funcione.
- Revisar posibles conflictos.
- Ejecutar las pruebas disponibles.

## 9. Estado del proyecto

Esta documentación representa la estructura
acordada para el desarrollo futuro.

No significa que todas las carpetas, páginas o
funcionalidades ya estén implementadas.

La fuente oficial del estado actual es el código
y el historial de GitHub.
