import { useContext } from 'react'
import { ThemeContext } from '../context'

export const About = () => {
  const {
    theme: { textPrimary },
  } = useContext(ThemeContext)

  return <div style={{ color: textPrimary }}>About page</div>
}
