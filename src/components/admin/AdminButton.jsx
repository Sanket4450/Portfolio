import { useNavigate } from 'react-router-dom'

export const AdminButton = ({ text, navigatePath }) => {
    const navigate = useNavigate()
  return (
    <h2
      className=" w-[70vw] sm:w-44 lg:w-64 text-center py-3 text-xl font-semibold hover:cursor-pointer text-bg-primary bg-text-theme-primary border-4 border-text-theme-primary rounded-md hover:text-primary hover:bg-primary transition duration-200"
      onClick={() => navigate(navigatePath)}
    >
      {text}
    </h2>
  )
}
