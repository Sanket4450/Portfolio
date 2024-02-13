import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const Contact = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return <div style={{ color: textPrimary }}>Contact page</div>
}
