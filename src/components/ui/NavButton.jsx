import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkMode'

export const NavButton = ({ text }) => {
  const {
    theme: { bgPrimary, bgSecondary, textPrimary, textSecondary },
  } = useContext(DarkModeContext)

  return <div style={{backgroundColor: bgPrimary, color: textPrimary}} className="text-center py-2">{text}</div>
}
