import { useContext } from 'react'
import { ThemeContext } from '../context'

export const Projects = () => {
  const {
    theme: { textPrimary },
  } = useContext(ThemeContext)

  return <div style={{ color: textPrimary }}>Projects page</div>
}
