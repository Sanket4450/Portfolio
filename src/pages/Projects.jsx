import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const Projects = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return <div style={{ color: textPrimary }}>Projects page</div>
}
