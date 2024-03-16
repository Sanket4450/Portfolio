const SingleHeaderSection = ({ name, width }) => {
  return <div className={`${width} text-center`}>{name}</div>
}

export const MessagesHeader = ({ screenWidth }) => {
  return (
    <div className=" flex items-center h-11 bg-text-theme-primary text-bg-primary text-lg lg:text-xl font-semibold">
      <div className=" w-[3%]" />
      <SingleHeaderSection name="Sender Name" width={screenWidth >= 768 ? 'w-[20%]' : 'w-[25%]'} />
      <SingleHeaderSection name="Email" width={screenWidth >= 1024 ? 'w-[35%]' : 'w-[45%]'} />
      <SingleHeaderSection name="Date Received" width={screenWidth >= 768 ? 'w-[20%]' : 'w-[27%]'} />
      {screenWidth >= 1024 && <SingleHeaderSection name="Status" width="w-[10%]" />}
      {screenWidth >= 768 && <SingleHeaderSection name="Actions" width="w-[12%]" />}
    </div>
  )
}
