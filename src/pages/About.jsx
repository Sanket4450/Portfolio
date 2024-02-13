import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const About = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return <div style={{ color: textPrimary }}>About page</div>
}
