import { useNavigate } from 'react-router-dom'
import { TitleLink } from '../ui'
import { serviceDetails, serviceCards } from '../../data/services'

export const RecentWork = () => {
  const navigate = useNavigate()

  return (
    <section>
      <TitleLink title="Recent Works" path="/projects" />
    </section>
  )
}
