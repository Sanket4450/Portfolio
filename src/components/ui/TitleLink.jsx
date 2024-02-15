import { useNavigate } from 'react-router-dom'

export const TitleLink = ({ title, path }) => {
  const navigate = useNavigate()

  return (
    <div className=" text-theme-primary font-semibold max-md:text-md md:text-xl flex space-x-1">
      <p>———</p>
      <p className=" hover:cursor-pointer hover:text-theme-hover-primary" onClick={() => navigate(path)}>
        {title}
      </p>
    </div>
  )
}
