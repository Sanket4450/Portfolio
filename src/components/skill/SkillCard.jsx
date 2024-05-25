export const SkillCard = ({ image, title, link }) => {
  return (
    <div className=" w-40 h-48 m-6">
      <div className=" h-[75%] bg-greenGray flex justify-center items-center rounded-t-sm">
        <img src={image} className=" size-20" />
      </div>
      <div className=" h-[25%] bg-text-theme-primary flex justify-center items-center rounded-b-sm">
        <a
          href={link}
          className=" text-bg-primary font-bold text-center text-xl tracking-wide transition duration-300"
          target="_blank"
        >
          {title}
        </a>
      </div>
    </div>
  )
}
