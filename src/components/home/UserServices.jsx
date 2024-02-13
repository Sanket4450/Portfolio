import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../context'
import { ServiceCard } from './ServiceCard'
import { userDetails } from '../../data/home'
import { serviceDetails, serviceCards } from '../../data/services'

export const UserServices = () => {
  const {
    isDarkMode,
    theme: { bgPrimary, textPrimary, grayPrimary, greenPrimary, greenSecondary },
  } = useContext(DarkModeContext)

  const navigate = useNavigate()

  return (
    <section style={{ backgroundColor: bgPrimary }}>
      <div className="flex justify-between py-16">
        <h2
          style={{ color: textPrimary }}
          className="sm:max-w-[40%] font-bold max-phone:text-xl max-md:text-2xl md:text-3xl"
        >
          {userDetails.experience}+ Years Experience Working
        </h2>
        <div className="max-sm:hidden sm:max-w-[40%] flex flex-col space-y-1.5">
          <div style={{ color: greenPrimary }} className="font-semibold max-md:text-md md:text-xl flex space-x-1">
            <p>———</p>
            <p
              className="hover:cursor-pointer"
              onMouseOver={(e) => (e.target.style.color = greenSecondary)}
              onMouseOut={(e) => (e.target.style.color = greenPrimary)}
              onClick={() => navigate('/services')}
            >
              Services
            </p>
          </div>
          <p style={{ color: grayPrimary }} className="text-sm">
            {serviceDetails.discoverServices}
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col sm:flex-row justify-between items-center">
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
