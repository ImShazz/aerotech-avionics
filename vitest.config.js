
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,

    include: [
  'tests/ServiciosDestacados.spec.jsx',
  'tests/Navbar.spec.jsx',
  'tests/Nosotros.spec.jsx',
  'tests/Contacto.spec.jsx',
  'tests/ScrollToHash.spec.jsx',
  'src/features/admin/Dashboard.test.jsx',
  'src/features/proyectos/Proyectos.test.jsx'
],

    clearMocks: true,
    restoreMocks: true
  }
})
