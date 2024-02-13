import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const Services = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return <div style={{ color: textPrimary }}>Services page</div>
}
