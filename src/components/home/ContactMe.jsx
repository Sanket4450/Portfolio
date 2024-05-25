import {Link} from 'react-router-dom'

export const ContactMe = () => {
  return (
    <div className=" h-64 sm:h-36 flex max-sm:flex-col max-sm:justify-evenly justify-between sm:items-center">
      <div className=" space-y-2">
        <h3 className=" text-primary font-semibold text-2xl">Have any project in mind ?</h3>
        <p className=" text-gray-primary text-sm">Feel free to contact me or just say friendly hello!</p>
      </div>
      <Link
        to="/contact"
        className=" bg-text-theme-primary text-bg-primary font-semibold text-[15px] max-sm:mx-auto w-32 h-10 flex justify-center items-center rounded-sm hover:bg-primary hover:text-primary hover:border-2 hover:border-text-theme-primary transition duration-200"
      >
        Contact Me
      </Link>
    </div>
  )
}
