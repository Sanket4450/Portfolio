import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context'
import { ServiceCard } from './ServiceCard'
import { TitleLink } from '../ui'
import { userDetails } from '../../data/home'
import { serviceDetails, serviceCards } from '../../data/services'

export const UserServices = () => {
  const {
    isDarkMode,
    theme: { bgPrimary, textPrimary, grayPrimary, greenPrimary, greenSecondary },
  } = useContext(ThemeContext)

  const navigate = useNavigate()

  return (
    <section>
      <div className="flex justify-between py-14">
        <h2
          style={{ color: textPrimary }}
          className="sm:max-w-[40%] font-bold max-phone:text-xl max-md:text-2xl md:text-3xl"
        >
          {userDetails.experience}+ Years Experience Working
        </h2>
        <div className="max-sm:hidden sm:max-w-[40%] flex flex-col space-y-1.5">
          <TitleLink title="Services" path="/services" />
          <p style={{ color: grayPrimary }} className="text-sm">
            {serviceDetails.discoverServices}
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col sm:flex-row justify-between items-center max-sm:space-y-5">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.id}
            img={isDarkMode ? card.image.dark : card.image.light}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}
