import { InfoList } from '../ui'
import { LinkList } from '../ui'
import { userDetails } from '../../data/user'
import { informationList, mediaList } from '../../data/footer'

export const Footer = () => {
  return (
    <footer className=" max-sm:px-5 sm:px-[5vw] lg:px-[80px] flex max-md:flex-col justify-between max-md:space-y-5 border-t-[0.5px] border-gray-primary py-10">
      <h2 className=" text-primary font-semibold text-2xl">{userDetails.name}</h2>
      <section className=" w-[50%] flex max-phone:flex-col max-phone:space-y-5 phone:space-x-20">
        <InfoList title={informationList.title} items={informationList.items} />
        <LinkList title={mediaList.title} items={mediaList.items} />
      </section>
    </footer>
  )
}
