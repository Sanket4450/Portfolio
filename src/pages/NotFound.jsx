import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const NotFound = () => {
  const {
    theme: { bgPrimary, textPrimary },
  } = useContext(DarkModeContext)

  return (
    <div style={{ backgroundColor: bgPrimary }} className="flex flex-col text-center">
      <h1 style={{ color: textPrimary }} className="font-mono text-[14vmax]">
        404
      </h1>
      <h3 style={{ color: textPrimary }} className="font-sans text-3xl mb-5">
        Page Not Found
      </h3>
      <p style={{ color: textPrimary }} className="font-sans text-sm px-6">
        Oops! The page you are looking for does not exist. It might have been moved or delete.
      </p>
    </div>
  )
}
