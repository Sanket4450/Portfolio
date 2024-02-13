import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const NotFound = () => {
  const {
    theme: { bgPrimary, textPrimary },
  } = useContext(DarkModeContext)

  return (
    <div className="flex flex-col text-center" style={{ backgroundColor: bgPrimary }}>
      <h1 className="font-mono text-[14vmax]" style={{ color: textPrimary }}>
        404
      </h1>
      <h3 className="font-sans text-3xl mb-5" style={{ color: textPrimary }}>
        Page Not Found
      </h3>
      <p className="font-sans text-sm px-6" style={{ color: textPrimary }}>
        Oops! The page you are looking for does not exist. It might have been moved or delete.
      </p>
    </div>
  )
}
