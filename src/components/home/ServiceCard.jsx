export const ServiceCard = ({ img, title, description }) => {
  return (
    <div className=" bg-gray-weak max-phone:w-[90%] phone:w-[75%] sm:w-[32%] xl:w-[365px] max-phone:h-[300px] phone:h-60 sm:h-[335px] md:h-80 lg:h-64 px-5 pt-7 flex flex-col space-y-7 border-b-4 border-text-theme-primary rounded-sm">
      <img src={img} alt="" className=" size-12" />
      <h3 className=" text-primary font-bold max-md:text-xl md:text-2xl">{title}</h3>
      <p className=" text-gray-strong text-sm">{description}</p>
    </div>
  )
}
