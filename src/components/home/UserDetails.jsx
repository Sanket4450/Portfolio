import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { userDetails } from '../../data/user'

export const UserDetails = () => {
  return (
    <section className=" space-y-6">
      <h2 className=" text-theme-primary max-phone:text-xl max-sm:text-2xl text-3xl font-semibold">
        Hello, I'm {userDetails.name}
      </h2>
      <h1 className=" text-primary max-phone:text-3xl max-sm:text-4xl text-5xl font-bold">{userDetails.title}</h1>
      <p className=" text-gray-primary text-sm md:w-[50vw]">{userDetails.bio}</p>
      <div className=" flex space-x-7 items-center">
        <a
          href={userDetails.github}
          target="_blank"
          className=" bg-text-primary text-bg-primary text-sm font-semibold py-2.5 px-5 rounded-sm"
        >
          Github
        </a>
        <a
          href="../../assets/pngs/resume.png"
          className=" text-gray-strong flex space-x-1"
          download="cv"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} style={{ marginTop: '4px' }} />
          <p className=" font-semibold">Download CV</p>
        </a>
      </div>
    </section>
  )
}
