import { useContext } from 'react'
import { ThemeContext } from '../context'

export const Services = () => {
  const {
    theme: { textPrimary },
  } = useContext(ThemeContext)

  return <div style={{ color: textPrimary }}>Services page</div>
}
