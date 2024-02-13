import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../../context'
import { userDetails } from '../../data/home'

export const UserDetails = () => {
  const {
    theme: { bgPrimary, textPrimary, grayPrimary, grayStrong, greenPrimary },
  } = useContext(DarkModeContext)

  return (
    <section style={{ backgroundColor: bgPrimary }} className="py-10 flex flex-col justify-between space-y-6">
      <h2 style={{ color: greenPrimary }} className="max-phone:text-xl max-sm:text-2xl text-3xl font-semibold">
        Hello, I'm {userDetails.name}
      </h2>
      <h1 style={{ color: textPrimary }} className="max-phone:text-3xl max-sm:text-4xl text-5xl font-bold">
        {userDetails.title}
      </h1>
      <p style={{ color: grayPrimary }} className="text-sm md:w-[50vw]">
        {userDetails.bio}
      </p>
      <div className="flex space-x-7 items-center">
        <a
          href={userDetails.github}
          target="_blank"
          style={{ backgroundColor: textPrimary, color: bgPrimary }}
          className="text-sm font-semibold py-2.5 px-5 rounded-sm"
        >
          Github
        </a>
        <a
          href="../../assets/pngs/resume.png"
          style={{ color: grayStrong }}
          className="flex space-x-1"
          download="cv"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} style={{ marginTop: '4px' }} />
          <p className="font-semibold">Download CV</p>
        </a>
      </div>
    </section>
  )
}
