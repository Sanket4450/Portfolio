import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context'

export const TitleLink = ({ title, path }) => {
  const {
    theme: { greenPrimary, greenSecondary },
  } = useContext(ThemeContext)

  const navigate = useNavigate()

  return (
    <div style={{ color: greenPrimary }} className="font-semibold max-md:text-md md:text-xl flex space-x-1">
      <p>———</p>
      <p
        className="hover:cursor-pointer"
        onClick={() => navigate(path)}
      >
        {title}
      </p>
    </div>
  )
}
