const SingleHeaderSection = ({ name, width }) => {
  return <div className={` ${width} text-center`}>{name}</div>
}

export const MessagesHeader = ({ screenWidth }) => {
  return (
    <div className=" flex items-center h-11 bg-text-theme-primary text-bg-primary text-lg lg:text-xl font-semibold">
      <SingleHeaderSection name="Sender Name" width={screenWidth >= 768 ? 'w-[20%]' : 'w-[25%]'} />
      <SingleHeaderSection name="Email" width="w-[30%]" />
      <SingleHeaderSection name="Date Received" width={screenWidth >= 768 ? 'w-[25%]' : 'w-[30%]'} />
      <SingleHeaderSection name="Status" width="w-[15%]" />
      {screenWidth >= 768 && <SingleHeaderSection name="Actions" width="w-[10%]" />}
    </div>
  )
}
