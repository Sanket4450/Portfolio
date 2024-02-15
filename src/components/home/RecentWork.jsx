import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context'
import { TitleLink } from '../ui'
import { serviceDetails, serviceCards } from '../../data/services'

export const RecentWork = () => {
  const {
    isDarkMode,
    theme: { bgPrimary, textPrimary, grayPrimary, greenPrimary, greenSecondary },
  } = useContext(ThemeContext)

  const navigate = useNavigate()

  return (
    <section>
      <TitleLink title="Recent Works" path="/projects" />
    </section>
  )
}
