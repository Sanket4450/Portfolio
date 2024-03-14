import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const WorkCard = ({ image, title, titleDesc, path, align }) => {
  return (
    <div
      className={` w-[92%] phone:w-[75%] sm:w-[450px] lg:w-[32.5%] h-56 phone:h-72 sm:h-[370px] lg:h-80 xl:h-[370px] ${
        align === 'right' ? 'justify-self-end' : 'justify-self-start'
      }`}
    >
      <img src={image} className=" w-full h-[75%] sm:h-[80%]" />
      <div className=" h-[25%] sm:h-[20%] flex flex-col justify-center space-y-1">
        <div className=" text-primary font-semibold max-phone:text-sm text-lg flex space-x-2">
          <h3>{title}</h3>
          <h3>—</h3>
          <h3>{titleDesc}</h3>
        </div>
        <div>
          <Link
            to={path}
            className=" text-theme-primary hover:text-theme-hover-primary text-sm transition duration-300"
          >
            See project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </div>
  )
}
