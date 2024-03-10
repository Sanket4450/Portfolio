export const AdminDataCard = ({ icon, title, count }) => {
  return (
    <div className=" bg-gray-weak w-[70vw] phone:w-80 sm:w-64 lg:w-52 xl:w-60 h-[70vw] phone:h-80 sm:h-64 lg:h-52 xl:h-60 flex flex-col justify-evenly items-center rounded-md">
      <img src={icon} className=" w-[50%]" />
      <div className=" space-y-2">
        <h3 className=" text-primary font-bold text-4xl text-center">{count}</h3>
        <h5 className=" text-primary text-sm">{title}</h5>
      </div>
    </div>
  )
}
