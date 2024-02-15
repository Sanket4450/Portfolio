import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const WorkCard = ({ image, title, path, extraClasses }) => {
  return (
    <div
      className={` w-[92%] phone:w-[75%] sm:w-[450px] lg:w-[32.5%] h-56 phone:h-72 sm:h-[370px] lg:h-80 xl:h-[370px] ${extraClasses}`}
    >
      <img src={image} className=" w-full h-[80%] hover:cursor-pointer" />
      <div className=" h-[20%] flex flex-col justify-center space-y-1">
        <h3 className=" text-primary font-semibold max-phone:text-sm text-lg">{title}</h3>
        <Link to={path} className=" text-theme-primary hover:text-theme-hover-primary text-sm">
          See project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>
    </div>
  )
}
