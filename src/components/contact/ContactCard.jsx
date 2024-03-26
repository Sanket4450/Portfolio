export const ContactCard = ({ IconComp, contactValue, hrefValue, description }) => {
  return (
    <div className=" w-full md:w-[48%] lg:w-[32%] xl:w-[30%] my-10 flex flex-col items-center space-y-8 py-12 border-[1px] border-text-primary rounded-2xl">
      <IconComp />
      <div className=" text-center space-y-3">
        <a
          href={hrefValue}
          className=" text-primary hover:text-theme-primary font-semibold text-xl phone:text-2xl lg:text-xl xl:text-2xl transition duration-300 "
        >
          {contactValue}
        </a>
        <p className=" text-primary font-light">{description}</p>
      </div>
    </div>
  )
}
