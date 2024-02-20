import { Link } from 'react-router-dom'
import { Done } from '@mui/icons-material'

export const MessageSubmit = () => {
  return (
    <section className=" flex flex-col items-center space-y-7">
      <div className=" bg-gray-strong w-16 h-16 flex justify-center items-center rounded-full">
        <Done fontSize="large" className=" text-bg-primary" />
      </div>
      <div className=" flex flex-col items-center space-y-1">
        <h2 className=" text-gray-strong text-3xl">Thank You</h2>
        <p className=" text-gray-strong text-center">The message was sent successfully</p>
      </div>
      <Link to="/" className=" text-gray-strong hover:underline hover:underline-offset-1 hover:decoration-gray-strong">
        Go back
      </Link>
    </section>
  )
}
