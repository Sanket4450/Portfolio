import { useContext } from 'react'
import { ThemeContext } from '../context'

export const Contact = () => {
  const {
    theme: { textPrimary },
  } = useContext(ThemeContext)

  return <div style={{ color: textPrimary }}>Contact page</div>
}
