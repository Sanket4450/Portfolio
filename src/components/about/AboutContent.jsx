import { userDetails } from '../../data/user'
import { aboutDetails } from '../../data/about'

export const AboutContent = () => {
  return (
    <section className=" md:flex md:justify-between md:space-x-5 max-md:space-y-8">
      <div className=" md:w-[60%] md:py-5 space-y-8">
        <h1 className=" text-primary font-bold text-3xl sm:text-2xl lg:text-4xl">
          Hi &#128075;, I'm {userDetails.name}
        </h1>
        <p className=" text-primary text-sm font-semibold">{userDetails.about}</p>
        <div className=" space-y-2">
          <h2 className=" text-primary text-2xl sm:text-xl lg:text-3xl font-semibold">Expertise:</h2>
          <p className=" text-primary text-sm font-semibold">{userDetails.expertise}</p>
        </div>
        <div className=" space-y-2">
          <h2 className=" text-primary text-2xl sm:text-xl lg:text-3xl font-semibold">Vision:</h2>
          <p className=" text-primary text-sm font-semibold">{userDetails.vision}</p>
        </div>
        <div className=" flex justify-center p-5">
          <img src={aboutDetails.techStackLogo} className=" w-[50%] lg:w-80" />
        </div>
      </div>
      <div className=" phone:w-[70%] md:w-[280px] lg:w-96 mx-auto space-y-8">
        <img src={userDetails.image} />
        <p className=" text-primary font-serif italic text-center mx-auto lg:px-10">
          <q>{aboutDetails.quote}</q>
        </p>
      </div>
    </section>
  )
}
