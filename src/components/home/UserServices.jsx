import { useSelector } from 'react-redux'
import { ServiceCard } from './ServiceCard'
import { TitleLink } from '../ui'
import { userDetails } from '../../data/home'
import { serviceDetails, serviceCards } from '../../data/services'

export const UserServices = () => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <section>
      <div className=" flex justify-between py-14">
        <h2 className=" text-primary sm:max-w-[40%] font-bold max-phone:text-xl max-md:text-2xl md:text-3xl">
          {userDetails.experience}+ Years Experience Working
        </h2>
        <div className=" max-sm:hidden sm:max-w-[40%] flex flex-col space-y-1.5">
          <TitleLink title="Services" path="/services" />
          <p className=" text-theme-primary text-sm">{serviceDetails.discoverServices}</p>
        </div>
      </div>
      <div className=" flex max-sm:flex-col sm:flex-row justify-between items-center max-sm:space-y-5">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.id}
            img={theme === 'dark' ? card.image.dark : card.image.light}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}
