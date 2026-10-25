
import { build } from 'esbuild'

try {
  await build({
    entryPoints: [
      'tests/ServiciosDestacados.spec.jsx',
      'tests/Navbar.spec.jsx',
      'tests/Nosotros.spec.jsx',
      'tests/Contacto.spec.jsx',
      'tests/ScrollToHash.spec.jsx'
    ],
    bundle: true,
    platform: 'browser',
    format: 'iife',
    jsx: 'automatic',
    loader: {
      '.css': 'empty'
    },
    outdir: 'tests/bundles',
    entryNames: '[name].bundle'
  })

  console.log('Pruebas compiladas correctamente.')
} catch (error) {
  console.error('Error al compilar las pruebas:', error)
  process.exitCode = 1
}
