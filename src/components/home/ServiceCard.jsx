import { useContext } from 'react'
import { ThemeContext } from '../../context'

export const ServiceCard = ({ img, title, description }) => {
  const {
    theme: { textPrimary, grayWeak, grayStrong, greenPrimary },
  } = useContext(ThemeContext)

  return (
    <div
      style={{ backgroundColor: grayWeak, borderColor: greenPrimary }}
      className="max-phone:w-[90%] phone:w-[75%] sm:w-[32%] xl:w-[365px] max-phone:h-[300px] phone:h-60 sm:h-[335px] md:h-80 lg:h-64 px-5 pt-7 flex flex-col space-y-7 border-b-4 rounded-sm"
    >
      <img src={img} alt="" className=" size-12" />
      <h3 style={{ color: textPrimary }} className="font-bold max-md:text-xl md:text-2xl">
        {title}
      </h3>
      <p style={{ color: grayStrong }} className="text-sm">
        {description}
      </p>
    </div>
  )
}
