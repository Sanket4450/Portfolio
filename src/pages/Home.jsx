import { useContext } from 'react'
import { DarkModeContext } from '../context'

export const Home = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return (
    <>
      <h1 style={{ color: textPrimary }}>Home page</h1>
    </>
  )
}
