import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const Skills = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return <div style={{ color: textPrimary }}>Skills page</div>
}
