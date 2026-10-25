import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const frame = window.requestAnimationFrame(() => {
      const id = decodeURIComponent(hash.slice(1))
      const elemento = document.getElementById(id)

      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}

export default ScrollToHash