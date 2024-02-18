export const SkillCard = ({ image, title, link }) => {
  return (
    <div className=" bg-gray-weak w-48 h-60 flex flex-col justify-around items-center rounded-md drop-shadow-md">
      <img src={image} className=" size-20" />
      <a
        href={link}
        target="_blank"
        className=" text-primary hover:text-gray-strong font-semibold text-center text-2xl"
      >
        {title}
      </a>
    </div>
  )
}
