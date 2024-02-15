import { useContext } from 'react'
import { ThemeContext } from '../context'

export const Skills = () => {
  const {
    theme: { textPrimary },
  } = useContext(ThemeContext)

  return <div style={{ color: textPrimary }}>Skills page</div>
}
