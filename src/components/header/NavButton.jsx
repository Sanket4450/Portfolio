import { useContext } from 'react'
import { DarkModeContext } from '../../context'

export const NavButton = ({ text }) => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return (
    <div
      className="text-center text-xs font-semibold hover:cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
      style={{ color: textPrimary, textDecorationColor: textPrimary }}
    >
      {text}
    </div>
  )
}
