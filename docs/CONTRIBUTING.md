
# AeroTech Avionics
## Guía de colaboración - Versión 1.0

### 1. Integrantes
- Moisés Pontigo
- Matías Muñoz
- Vicente Bahamondes

### 2. Objetivo
Desarrollar una plataforma web para una empresa
ficticia del sector aeroespacial y de defensa.

El proyecto incluye:
- Portal corporativo público.
- Plataforma administrativa.
- Gestión de sistemas de aviónica.
- Gestión de clientes y proyectos.

### 3. Tecnologías
- React con Vite
- JavaScript
- Bootstrap 5
- CSS personalizado
- Git y GitHub
- Jasmine y Karma para pruebas unitarias

### 4. Reglas de Git

La rama main contiene la versión integrada.

Cada integrante trabaja en su propia rama:

- Moisés: feature/estructura
- Matías: feature/catalogo
- Vicente: feature/proyectos

Reglas:
- No desarrollar directamente en main.
- Hacer commits de cambios reales.
- Utilizar mensajes descriptivos.
- Revisar git status antes de cada commit.
- Publicar avances con git push.
- Integrar cambios mediante Pull Requests.
- No modificar archivos de otro integrante
  sin coordinación previa.

### 5. Convenciones de commits

feat: nueva funcionalidad
fix: corrección de errores
style: cambios visuales
docs: documentación
test: pruebas
refactor: reorganización de código
chore: configuración o mantenimiento

Ejemplos:
feat: agregar listado de proyectos
fix: corregir validación de formulario
test: validar componente de navegación

### 6. Convenciones de React

- Componentes con nombres PascalCase.
- Un componente por responsabilidad.
- Componentes reutilizables en src/components.
- Vistas completas en src/pages.
- Datos simulados en src/data.
- Evitar duplicar lógica entre componentes.
- Utilizar props y estados cuando corresponda.

### 7. Reglas de CSS

- Consultar docs/DESIGN_SYSTEM.md.
- Utilizar Bootstrap para responsividad.
- Reutilizar variables CSS globales.
- No agregar colores arbitrarios.
- Mantener una navegación consistente.
- Evitar estilos inline innecesarios.

### 8. Distribución inicial

Moisés Pontigo:
- Estructura general.
- Navegación.
- Portal corporativo.
- Autenticación.

Matías Muñoz:
- Tecnologías de aviónica.
- Catálogo de sistemas.
- Gestión de componentes.

Vicente Bahamondes:
- Clientes.
- Solicitudes.
- Gestión de proyectos.

La distribución podrá ajustarse
mediante acuerdos del equipo.

### 9. Pruebas

- Probar cada funcionalidad antes de integrarla.
- Utilizar Jasmine y Karma.
- Documentar los casos de prueba.
- Registrar resultados.
- Participar en la cobertura de testing.

### 10. Integración

Antes de integrar una rama:
- Comprobar que la aplicación funciona.
- Revisar que no existan errores.
- Verificar los archivos modificados.
- Crear un Pull Request.
- Solicitar revisión de otro integrante.
- Integrar después de aprobar los cambios.
