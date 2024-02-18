import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelopeOpenText, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ContactCard } from './ContactCard'
import { userDetails } from '../../data/user'

const PhoneComp = () => <FontAwesomeIcon icon={faPhoneVolume} className=" text-theme-primary text-5xl" />
const EmailComp = () => <FontAwesomeIcon icon={faEnvelopeOpenText} className=" text-theme-primary text-5xl" />
const LocationComp = () => <FontAwesomeIcon icon={faLocationDot} className=" text-theme-primary text-5xl" />

export const ContactInfo = () => {
  return (
    <section className=" md:flex md:justify-between flex-wrap max-md:space-y-10">
      <ContactCard
        IconComp={PhoneComp}
        contactValue="+91 XXXXX XXXXX"
        hrefValue={`tel:${userDetails.mobile}`}
        description="Contact Phone"
      />
      <ContactCard
        IconComp={EmailComp}
        contactValue={userDetails.email}
        hrefValue={`mailto:${userDetails.email}`}
        description="Contact Email"
      />
      <ContactCard
        IconComp={LocationComp}
        contactValue={userDetails.location}
        hrefValue="#"
        description="Contact Location"
      />
    </section>
  )
}
